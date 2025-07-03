import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { RateLimitError } from '@/types/errors';
import { logger } from '@/utils/logger';
import { getEnvironmentConfig } from '@/config/environment';

const config = getEnvironmentConfig();

/**
 * Rate limiter configuration
 */
const rateLimiterConfig = {
  keyGenerator: (req: Request) => req.ip, // Use IP address as key
  points: config.RATE_LIMIT_MAX_REQUESTS, // Number of requests
  duration: Math.floor(config.RATE_LIMIT_WINDOW_MS / 1000), // Per duration in seconds
  blockDuration: 60, // Block for 60 seconds if limit exceeded
};

/**
 * Create rate limiter instance
 */
const rateLimiter = new RateLimiterMemory(rateLimiterConfig);

/**
 * Rate limiting middleware
 */
export const rateLimiterMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Skip rate limiting for health check endpoint
    if (req.path === '/health') {
      return next();
    }

    const key = rateLimiterConfig.keyGenerator(req);
    const resRateLimiter = await rateLimiter.consume(key);

    // Add rate limit headers
    res.set({
      'X-RateLimit-Limit': rateLimiterConfig.points.toString(),
      'X-RateLimit-Remaining': resRateLimiter.remainingPoints?.toString() || '0',
      'X-RateLimit-Reset': new Date(Date.now() + resRateLimiter.msBeforeNext).toISOString(),
    });

    next();
  } catch (rejRes: any) {
    // Rate limit exceeded
    const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
    
    // Log rate limit violation
    logger.warn('Rate limit exceeded', {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      path: req.originalUrl,
      method: req.method,
      retryAfter: secs,
    });

    // Set rate limit headers
    res.set({
      'X-RateLimit-Limit': rateLimiterConfig.points.toString(),
      'X-RateLimit-Remaining': '0',
      'X-RateLimit-Reset': new Date(Date.now() + rejRes.msBeforeNext).toISOString(),
      'Retry-After': secs.toString(),
    });

    const error = new RateLimitError(
      `Too many requests. Try again in ${secs} seconds.`
    );
    
    next(error);
  }
};

/**
 * Strict rate limiter for sensitive endpoints (login, register, etc.)
 */
const strictRateLimiter = new RateLimiterMemory({
  keyGenerator: (req: Request) => req.ip,
  points: 5, // 5 requests
  duration: 900, // per 15 minutes
  blockDuration: 900, // block for 15 minutes
});

/**
 * Strict rate limiting middleware for authentication endpoints
 */
export const strictRateLimiterMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const key = strictRateLimiter.keyGenerator(req);
    const resRateLimiter = await strictRateLimiter.consume(key);

    // Add rate limit headers
    res.set({
      'X-RateLimit-Limit': '5',
      'X-RateLimit-Remaining': resRateLimiter.remainingPoints?.toString() || '0',
      'X-RateLimit-Reset': new Date(Date.now() + resRateLimiter.msBeforeNext).toISOString(),
    });

    next();
  } catch (rejRes: any) {
    const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
    
    // Log strict rate limit violation
    logger.warn('Strict rate limit exceeded', {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      path: req.originalUrl,
      method: req.method,
      retryAfter: secs,
    });

    res.set({
      'X-RateLimit-Limit': '5',
      'X-RateLimit-Remaining': '0',
      'X-RateLimit-Reset': new Date(Date.now() + rejRes.msBeforeNext).toISOString(),
      'Retry-After': secs.toString(),
    });

    const error = new RateLimitError(
      `Too many authentication attempts. Try again in ${Math.ceil(secs / 60)} minutes.`
    );
    
    next(error);
  }
};

// Export the default rate limiter
export { rateLimiterMiddleware as rateLimiter };
