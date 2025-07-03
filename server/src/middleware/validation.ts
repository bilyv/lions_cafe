import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { ValidationError } from '@/types/errors';

/**
 * Request validation middleware factory
 * Validates request body, params, or query against Joi schema
 */
export const validateRequest = (
  schema: Joi.ObjectSchema,
  target: 'body' | 'params' | 'query' = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const dataToValidate = req[target];
      
      const { error, value } = schema.validate(dataToValidate, {
        abortEarly: false, // Return all validation errors
        stripUnknown: true, // Remove unknown fields
        convert: true, // Convert types when possible
      });

      if (error) {
        const validationErrors = error.details.map((detail) => ({
          field: detail.path.join('.'),
          message: detail.message,
          value: detail.context?.value,
        }));

        throw new ValidationError('Validation failed', validationErrors);
      }

      // Replace the original data with validated and sanitized data
      req[target] = value;
      
      next();
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Validate multiple targets (body, params, query) at once
 */
export const validateMultiple = (schemas: {
  body?: Joi.ObjectSchema;
  params?: Joi.ObjectSchema;
  query?: Joi.ObjectSchema;
}) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const errors: any[] = [];

      // Validate each target if schema is provided
      Object.entries(schemas).forEach(([target, schema]) => {
        if (schema) {
          const { error, value } = schema.validate(req[target as keyof Request], {
            abortEarly: false,
            stripUnknown: true,
            convert: true,
          });

          if (error) {
            const targetErrors = error.details.map((detail) => ({
              target,
              field: detail.path.join('.'),
              message: detail.message,
              value: detail.context?.value,
            }));
            errors.push(...targetErrors);
          } else {
            // Replace with validated data
            (req as any)[target] = value;
          }
        }
      });

      if (errors.length > 0) {
        throw new ValidationError('Validation failed', errors);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Common validation schemas
 */
export const commonSchemas = {
  // UUID parameter validation
  uuidParam: Joi.object({
    id: Joi.string().uuid().required(),
  }),

  // Pagination query validation
  pagination: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    sortBy: Joi.string().optional(),
    sortOrder: Joi.string().valid('asc', 'desc').default('asc'),
  }),

  // Search query validation
  search: Joi.object({
    q: Joi.string().min(1).max(100).optional(),
    category: Joi.string().uuid().optional(),
    status: Joi.string().optional(),
  }),
};
