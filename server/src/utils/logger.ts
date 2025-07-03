import winston from 'winston';
import { isProduction, isDevelopment } from '@/config/environment';

/**
 * Custom log format for development
 */
const developmentFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
    let log = `${timestamp} [${level}]: ${message}`;
    
    // Add stack trace for errors
    if (stack) {
      log += `\n${stack}`;
    }
    
    // Add metadata if present
    if (Object.keys(meta).length > 0) {
      log += `\n${JSON.stringify(meta, null, 2)}`;
    }
    
    return log;
  })
);

/**
 * Custom log format for production
 */
const productionFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

/**
 * Create logger instance
 */
const createLogger = (): winston.Logger => {
  const logLevel = process.env.LOG_LEVEL || 'info';
  
  const transports: winston.transport[] = [
    new winston.transports.Console({
      level: logLevel,
      format: isDevelopment() ? developmentFormat : productionFormat,
    }),
  ];

  // Add file transports for production
  if (isProduction()) {
    transports.push(
      // Error log file
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: productionFormat,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      }),
      // Combined log file
      new winston.transports.File({
        filename: 'logs/combined.log',
        format: productionFormat,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      })
    );
  }

  return winston.createLogger({
    level: logLevel,
    format: productionFormat,
    transports,
    // Don't exit on handled exceptions
    exitOnError: false,
    // Handle uncaught exceptions
    exceptionHandlers: [
      new winston.transports.Console({
        format: isDevelopment() ? developmentFormat : productionFormat,
      }),
    ],
    // Handle unhandled promise rejections
    rejectionHandlers: [
      new winston.transports.Console({
        format: isDevelopment() ? developmentFormat : productionFormat,
      }),
    ],
  });
};

/**
 * Logger instance
 */
export const logger = createLogger();

/**
 * Request logger utility
 */
export const logRequest = (
  method: string,
  url: string,
  statusCode: number,
  responseTime: number,
  userAgent?: string,
  ip?: string
): void => {
  const logData = {
    method,
    url,
    statusCode,
    responseTime: `${responseTime}ms`,
    userAgent,
    ip,
  };

  if (statusCode >= 400) {
    logger.warn('HTTP Request', logData);
  } else {
    logger.info('HTTP Request', logData);
  }
};

/**
 * Database query logger utility
 */
export const logDatabaseQuery = (
  query: string,
  duration: number,
  error?: Error
): void => {
  const logData = {
    query: query.replace(/\s+/g, ' ').trim(),
    duration: `${duration}ms`,
  };

  if (error) {
    logger.error('Database Query Failed', { ...logData, error: error.message });
  } else {
    logger.debug('Database Query', logData);
  }
};

/**
 * Authentication logger utility
 */
export const logAuthentication = (
  action: 'login' | 'logout' | 'register' | 'token_refresh',
  userId?: string,
  email?: string,
  success: boolean = true,
  error?: string
): void => {
  const logData = {
    action,
    userId,
    email,
    success,
    error,
  };

  if (success) {
    logger.info('Authentication', logData);
  } else {
    logger.warn('Authentication Failed', logData);
  }
};

/**
 * Security event logger utility
 */
export const logSecurityEvent = (
  event: string,
  severity: 'low' | 'medium' | 'high' | 'critical',
  details: any,
  ip?: string,
  userAgent?: string
): void => {
  const logData = {
    event,
    severity,
    details,
    ip,
    userAgent,
    timestamp: new Date().toISOString(),
  };

  switch (severity) {
    case 'critical':
      logger.error('Security Event', logData);
      break;
    case 'high':
      logger.error('Security Event', logData);
      break;
    case 'medium':
      logger.warn('Security Event', logData);
      break;
    case 'low':
    default:
      logger.info('Security Event', logData);
      break;
  }
};

/**
 * Performance logger utility
 */
export const logPerformance = (
  operation: string,
  duration: number,
  metadata?: any
): void => {
  const logData = {
    operation,
    duration: `${duration}ms`,
    ...metadata,
  };

  if (duration > 1000) {
    logger.warn('Slow Operation', logData);
  } else {
    logger.debug('Performance', logData);
  }
};
