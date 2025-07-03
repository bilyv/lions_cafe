import Joi from 'joi';

/**
 * Create menu item validation schema
 */
export const createMenuItemSchema = Joi.object({
  categoryId: Joi.string()
    .uuid()
    .required()
    .messages({
      'string.uuid': 'Category ID must be a valid UUID',
      'any.required': 'Category ID is required',
    }),
  
  name: Joi.string()
    .min(2)
    .max(200)
    .required()
    .messages({
      'string.min': 'Menu item name must be at least 2 characters long',
      'string.max': 'Menu item name must not exceed 200 characters',
      'any.required': 'Menu item name is required',
    }),
  
  description: Joi.string()
    .max(1000)
    .optional()
    .allow('')
    .messages({
      'string.max': 'Description must not exceed 1000 characters',
    }),
  
  price: Joi.number()
    .positive()
    .precision(2)
    .required()
    .messages({
      'number.positive': 'Price must be a positive number',
      'any.required': 'Price is required',
    }),
  
  imageUrl: Joi.string()
    .uri()
    .max(500)
    .optional()
    .allow('')
    .messages({
      'string.uri': 'Image URL must be a valid URL',
      'string.max': 'Image URL must not exceed 500 characters',
    }),
  
  isAvailable: Joi.boolean()
    .optional()
    .default(true),
  
  isFeatured: Joi.boolean()
    .optional()
    .default(false),
  
  preparationTime: Joi.number()
    .integer()
    .min(1)
    .max(180)
    .optional()
    .default(15)
    .messages({
      'number.integer': 'Preparation time must be a whole number',
      'number.min': 'Preparation time must be at least 1 minute',
      'number.max': 'Preparation time must not exceed 180 minutes',
    }),
  
  allergens: Joi.array()
    .items(Joi.string().max(50))
    .optional()
    .default([])
    .messages({
      'array.base': 'Allergens must be an array of strings',
    }),
  
  nutritionalInfo: Joi.object({
    calories: Joi.number().integer().min(0).optional(),
    protein: Joi.number().min(0).optional(),
    carbohydrates: Joi.number().min(0).optional(),
    fat: Joi.number().min(0).optional(),
    fiber: Joi.number().min(0).optional(),
    sugar: Joi.number().min(0).optional(),
    sodium: Joi.number().min(0).optional(),
  })
    .optional()
    .default({}),
  
  sortOrder: Joi.number()
    .integer()
    .min(0)
    .optional()
    .default(0)
    .messages({
      'number.integer': 'Sort order must be a whole number',
      'number.min': 'Sort order must be 0 or greater',
    }),
});

/**
 * Update menu item validation schema
 */
export const updateMenuItemSchema = Joi.object({
  categoryId: Joi.string()
    .uuid()
    .optional()
    .messages({
      'string.uuid': 'Category ID must be a valid UUID',
    }),
  
  name: Joi.string()
    .min(2)
    .max(200)
    .optional()
    .messages({
      'string.min': 'Menu item name must be at least 2 characters long',
      'string.max': 'Menu item name must not exceed 200 characters',
    }),
  
  description: Joi.string()
    .max(1000)
    .optional()
    .allow('')
    .messages({
      'string.max': 'Description must not exceed 1000 characters',
    }),
  
  price: Joi.number()
    .positive()
    .precision(2)
    .optional()
    .messages({
      'number.positive': 'Price must be a positive number',
    }),
  
  imageUrl: Joi.string()
    .uri()
    .max(500)
    .optional()
    .allow('')
    .messages({
      'string.uri': 'Image URL must be a valid URL',
      'string.max': 'Image URL must not exceed 500 characters',
    }),
  
  isAvailable: Joi.boolean().optional(),
  
  isFeatured: Joi.boolean().optional(),
  
  preparationTime: Joi.number()
    .integer()
    .min(1)
    .max(180)
    .optional()
    .messages({
      'number.integer': 'Preparation time must be a whole number',
      'number.min': 'Preparation time must be at least 1 minute',
      'number.max': 'Preparation time must not exceed 180 minutes',
    }),
  
  allergens: Joi.array()
    .items(Joi.string().max(50))
    .optional()
    .messages({
      'array.base': 'Allergens must be an array of strings',
    }),
  
  nutritionalInfo: Joi.object({
    calories: Joi.number().integer().min(0).optional(),
    protein: Joi.number().min(0).optional(),
    carbohydrates: Joi.number().min(0).optional(),
    fat: Joi.number().min(0).optional(),
    fiber: Joi.number().min(0).optional(),
    sugar: Joi.number().min(0).optional(),
    sodium: Joi.number().min(0).optional(),
  }).optional(),
  
  sortOrder: Joi.number()
    .integer()
    .min(0)
    .optional()
    .messages({
      'number.integer': 'Sort order must be a whole number',
      'number.min': 'Sort order must be 0 or greater',
    }),
});

/**
 * Create category validation schema
 */
export const createCategorySchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.min': 'Category name must be at least 2 characters long',
      'string.max': 'Category name must not exceed 100 characters',
      'any.required': 'Category name is required',
    }),
  
  description: Joi.string()
    .max(500)
    .optional()
    .allow('')
    .messages({
      'string.max': 'Description must not exceed 500 characters',
    }),
  
  imageUrl: Joi.string()
    .uri()
    .max(500)
    .optional()
    .allow('')
    .messages({
      'string.uri': 'Image URL must be a valid URL',
      'string.max': 'Image URL must not exceed 500 characters',
    }),
  
  isActive: Joi.boolean()
    .optional()
    .default(true),
  
  sortOrder: Joi.number()
    .integer()
    .min(0)
    .optional()
    .default(0)
    .messages({
      'number.integer': 'Sort order must be a whole number',
      'number.min': 'Sort order must be 0 or greater',
    }),
});

/**
 * Update category validation schema
 */
export const updateCategorySchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .optional()
    .messages({
      'string.min': 'Category name must be at least 2 characters long',
      'string.max': 'Category name must not exceed 100 characters',
    }),
  
  description: Joi.string()
    .max(500)
    .optional()
    .allow('')
    .messages({
      'string.max': 'Description must not exceed 500 characters',
    }),
  
  imageUrl: Joi.string()
    .uri()
    .max(500)
    .optional()
    .allow('')
    .messages({
      'string.uri': 'Image URL must be a valid URL',
      'string.max': 'Image URL must not exceed 500 characters',
    }),
  
  isActive: Joi.boolean().optional(),
  
  sortOrder: Joi.number()
    .integer()
    .min(0)
    .optional()
    .messages({
      'number.integer': 'Sort order must be a whole number',
      'number.min': 'Sort order must be 0 or greater',
    }),
});
