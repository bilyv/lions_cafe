import { Request, Response, NextFunction } from 'express';
import { AppError, ErrorResponse } from '@/types/errors';
import { logger } from '@/utils/logger';
import { isProduction } from '@/config/environment';
import { v4 as uuidv4 } from 'uuid';

/**
 * Global error handling middleware
 * This should be the last middleware in the application
 */
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Generate unique request ID for error tracking
  const requestId = uuidv4();

  // Log the error with context
  logError(error, req, requestId);

  // Handle different types of errors
  if (error instanceof AppError) {
    handleAppError(error, req, res, requestId);
  } else if (error.name === 'ValidationError') {
    handleValidationError(error, req, res, requestId);
  } else if (error.name === 'CastError') {
    handleCastError(error, req, res, requestId);
  } else if (error.name === 'JsonWebTokenError') {
    handleJWTError(error, req, res, requestId);
  } else if (error.name === 'TokenExpiredError') {
    handleTokenExpiredError(error, req, res, requestId);
  } else if (error.name === 'MulterError') {
    handleMulterError(error, req, res, requestId);
  } else if (isPostgresError(error)) {
    handlePostgresError(error, req, res, requestId);
  } else {
    handleGenericError(error, req, res, requestId);
  }
};

/**
 * Log error with context information
 */
const logError = (error: Error, req: Request, requestId: string): void => {
  const errorContext = {
    requestId,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    userId: (req as any).user?.id,
    body: req.body,
    params: req.params,
    query: req.query,
    stack: error.stack,
  };

  if (error instanceof AppError && error.isOperational) {
    logger.warn('Operational Error', {
      message: error.message,
      statusCode: error.statusCode,
      errorCode: error.errorCode,
      ...errorContext,
    });
  } else {
    logger.error('System Error', {
      message: error.message,
      name: error.name,
      ...errorContext,
    });
  }
};

/**
 * Handle application-specific errors
 */
const handleAppError = (
  error: AppError,
  req: Request,
  res: Response,
  requestId: string
): void => {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: error.message,
      code: error.errorCode,
      statusCode: error.statusCode,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  // Include details in development mode or for validation errors
  if (!isProduction() || error.statusCode === 400) {
    errorResponse.error.details = error.details;
  }

  res.status(error.statusCode).json(errorResponse);
};

/**
 * Handle validation errors (from Joi or similar)
 */
const handleValidationError = (
  error: any,
  req: Request,
  res: Response,
  requestId: string
): void => {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: 'Validation failed',
      code: 'VALIDATION_ERROR',
      statusCode: 400,
      details: error.details || error.message,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(400).json(errorResponse);
};

/**
 * Handle MongoDB/Mongoose cast errors
 */
const handleCastError = (
  error: any,
  req: Request,
  res: Response,
  requestId: string
): void => {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: 'Invalid ID format',
      code: 'INVALID_ID',
      statusCode: 400,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(400).json(errorResponse);
};

/**
 * Handle JWT errors
 */
const handleJWTError = (
  error: Error,
  req: Request,
  res: Response,
  requestId: string
): void => {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: 'Invalid token',
      code: 'INVALID_TOKEN',
      statusCode: 401,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(401).json(errorResponse);
};

/**
 * Handle expired token errors
 */
const handleTokenExpiredError = (
  error: Error,
  req: Request,
  res: Response,
  requestId: string
): void => {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: 'Token expired',
      code: 'TOKEN_EXPIRED',
      statusCode: 401,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(401).json(errorResponse);
};

/**
 * Handle Multer (file upload) errors
 */
const handleMulterError = (
  error: any,
  req: Request,
  res: Response,
  requestId: string
): void => {
  let message = 'File upload error';
  let statusCode = 400;

  switch (error.code) {
    case 'LIMIT_FILE_SIZE':
      message = 'File too large';
      break;
    case 'LIMIT_FILE_COUNT':
      message = 'Too many files';
      break;
    case 'LIMIT_UNEXPECTED_FILE':
      message = 'Unexpected file field';
      break;
    default:
      message = error.message || 'File upload error';
  }

  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message,
      code: 'FILE_UPLOAD_ERROR',
      statusCode,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(statusCode).json(errorResponse);
};

/**
 * Check if error is a PostgreSQL error
 */
const isPostgresError = (error: any): boolean => {
  return error.code && typeof error.code === 'string' && error.code.match(/^[0-9A-Z]{5}$/);
};

/**
 * Handle PostgreSQL errors
 */
const handlePostgresError = (
  error: any,
  req: Request,
  res: Response,
  requestId: string
): void => {
  let message = 'Database error';
  let statusCode = 500;
  let code = 'DATABASE_ERROR';

  switch (error.code) {
    case '23505': // Unique violation
      message = 'Resource already exists';
      statusCode = 409;
      code = 'DUPLICATE_RESOURCE';
      break;
    case '23503': // Foreign key violation
      message = 'Referenced resource not found';
      statusCode = 400;
      code = 'INVALID_REFERENCE';
      break;
    case '23502': // Not null violation
      message = 'Required field missing';
      statusCode = 400;
      code = 'MISSING_REQUIRED_FIELD';
      break;
    case '42P01': // Undefined table
      message = 'Database configuration error';
      statusCode = 500;
      code = 'DATABASE_CONFIG_ERROR';
      break;
    default:
      message = isProduction() ? 'Database error' : error.message;
  }

  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message,
      code,
      statusCode,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(statusCode).json(errorResponse);
};

/**
 * Handle generic/unknown errors
 */
const handleGenericError = (
  error: Error,
  req: Request,
  res: Response,
  requestId: string
): void => {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: isProduction() ? 'Internal server error' : error.message,
      code: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId,
    },
  };

  res.status(500).json(errorResponse);
};
