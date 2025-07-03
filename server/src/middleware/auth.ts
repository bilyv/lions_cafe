import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationError, AuthorizationError } from '@/types/errors';
import { getEnvironmentConfig } from '@/config/environment';
import { logger } from '@/utils/logger';

const config = getEnvironmentConfig();

/**
 * Extended Request interface to include user information
 */
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
    isActive: boolean;
  };
}

/**
 * Authentication middleware
 * Verifies JWT token and adds user information to request
 */
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AuthenticationError('No token provided');
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET) as any;
    
    // Add user information to request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      isActive: decoded.isActive,
    };

    // Check if user is active
    if (!req.user.isActive) {
      throw new AuthenticationError('Account is deactivated');
    }

    logger.debug('User authenticated', {
      userId: req.user.id,
      email: req.user.email,
      role: req.user.role,
    });

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new AuthenticationError('Invalid token'));
    } else if (error instanceof jwt.TokenExpiredError) {
      next(new AuthenticationError('Token expired'));
    } else {
      next(error);
    }
  }
};

/**
 * Authorization middleware factory
 * Checks if user has required role(s)
 */
export const authorize = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new AuthenticationError('User not authenticated');
      }

      if (!allowedRoles.includes(req.user.role)) {
        logger.warn('Authorization failed', {
          userId: req.user.id,
          userRole: req.user.role,
          requiredRoles: allowedRoles,
          path: req.originalUrl,
        });
        
        throw new AuthorizationError(
          `Access denied. Required role: ${allowedRoles.join(' or ')}`
        );
      }

      logger.debug('User authorized', {
        userId: req.user.id,
        role: req.user.role,
        path: req.originalUrl,
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Optional authentication middleware
 * Adds user information if token is provided, but doesn't require it
 */
export const optionalAuthenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      
      try {
        const decoded = jwt.verify(token, config.JWT_SECRET) as any;
        req.user = {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role,
          isActive: decoded.isActive,
        };
      } catch (error) {
        // Ignore token errors for optional authentication
        logger.debug('Optional authentication failed', { error: error.message });
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

/**
 * Resource ownership middleware
 * Checks if user owns the resource or has admin privileges
 */
export const checkResourceOwnership = (resourceUserIdField: string = 'userId') => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new AuthenticationError('User not authenticated');
      }

      // Admin and manager can access any resource
      if (['admin', 'manager'].includes(req.user.role)) {
        return next();
      }

      // Get resource user ID from request params, body, or query
      const resourceUserId = req.params[resourceUserIdField] || 
                           req.body[resourceUserIdField] || 
                           req.query[resourceUserIdField];

      if (!resourceUserId) {
        throw new AuthorizationError('Resource ownership cannot be determined');
      }

      if (req.user.id !== resourceUserId) {
        throw new AuthorizationError('Access denied. You can only access your own resources');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
