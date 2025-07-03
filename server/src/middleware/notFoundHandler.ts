import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '@/types/errors';

/**
 * 404 Not Found middleware
 * This middleware should be placed after all route handlers
 * but before the error handling middleware
 */
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new NotFoundError(
    `Route ${req.method} ${req.originalUrl} not found`
  );
  
  next(error);
};
