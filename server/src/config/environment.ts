import Joi from 'joi';
import { logger } from '@/utils/logger';

/**
 * Environment configuration interface
 */
export interface EnvironmentConfig {
  // Server configuration
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: number;
  FRONTEND_URL: string;

  // Database mode - determines which database configuration to use
  DATABASE_MODE: 'local' | 'deployed';

  // Local PostgreSQL configuration
  DB_HOST?: string;
  DB_PORT?: number;
  DB_NAME?: string;
  DB_USER?: string;
  DB_PASSWORD?: string;

  // Supabase configuration (for deployed mode)
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  SUPABASE_DB_HOST?: string;
  SUPABASE_DB_PORT?: number;
  SUPABASE_DB_NAME?: string;
  SUPABASE_DB_USER?: string;
  SUPABASE_DB_PASSWORD?: string;

  // Authentication
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  BCRYPT_ROUNDS: number;

  // Rate limiting
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;

  // File upload
  MAX_FILE_SIZE: number;
  UPLOAD_PATH: string;

  // Email configuration (optional)
  SMTP_HOST?: string;
  SMTP_PORT?: number;
  SMTP_USER?: string;
  SMTP_PASSWORD?: string;
  FROM_EMAIL?: string;

  // Payment gateway (optional)
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;

  // Logging
  LOG_LEVEL: string;
}

/**
 * Environment validation schema
 */
const environmentSchema = Joi.object({
  // Server configuration
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().port().default(3001),
  FRONTEND_URL: Joi.string().uri().default('http://localhost:5173'),

  // Database mode
  DATABASE_MODE: Joi.string()
    .valid('local', 'deployed')
    .default('local'),

  // Local PostgreSQL configuration (required when DATABASE_MODE is 'local')
  DB_HOST: Joi.when('DATABASE_MODE', {
    is: 'local',
    then: Joi.string().default('localhost'),
    otherwise: Joi.string().optional(),
  }),
  DB_PORT: Joi.when('DATABASE_MODE', {
    is: 'local',
    then: Joi.number().port().default(5432),
    otherwise: Joi.number().port().optional(),
  }),
  DB_NAME: Joi.when('DATABASE_MODE', {
    is: 'local',
    then: Joi.string().default('lions_cafe'),
    otherwise: Joi.string().optional(),
  }),
  DB_USER: Joi.when('DATABASE_MODE', {
    is: 'local',
    then: Joi.string().default('postgres'),
    otherwise: Joi.string().optional(),
  }),
  DB_PASSWORD: Joi.when('DATABASE_MODE', {
    is: 'local',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),

  // Supabase configuration (required when DATABASE_MODE is 'deployed')
  SUPABASE_URL: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().uri().required(),
    otherwise: Joi.string().uri().optional(),
  }),
  SUPABASE_ANON_KEY: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  SUPABASE_SERVICE_ROLE_KEY: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  SUPABASE_DB_HOST: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  SUPABASE_DB_PORT: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.number().port().default(5432),
    otherwise: Joi.number().port().optional(),
  }),
  SUPABASE_DB_NAME: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  SUPABASE_DB_USER: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  SUPABASE_DB_PASSWORD: Joi.when('DATABASE_MODE', {
    is: 'deployed',
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),

  // Authentication
  JWT_SECRET: Joi.string().min(32).required(),
  JWT_EXPIRES_IN: Joi.string().default('7d'),
  BCRYPT_ROUNDS: Joi.number().integer().min(10).max(15).default(12),

  // Rate limiting
  RATE_LIMIT_WINDOW_MS: Joi.number().integer().default(900000), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: Joi.number().integer().default(100),

  // File upload
  MAX_FILE_SIZE: Joi.number().integer().default(5242880), // 5MB
  UPLOAD_PATH: Joi.string().default('./uploads'),

  // Email configuration (optional)
  SMTP_HOST: Joi.string().optional(),
  SMTP_PORT: Joi.number().port().optional(),
  SMTP_USER: Joi.string().optional(),
  SMTP_PASSWORD: Joi.string().optional(),
  FROM_EMAIL: Joi.string().email().optional(),

  // Payment gateway (optional)
  STRIPE_SECRET_KEY: Joi.string().optional(),
  STRIPE_WEBHOOK_SECRET: Joi.string().optional(),

  // Logging
  LOG_LEVEL: Joi.string()
    .valid('error', 'warn', 'info', 'debug')
    .default('info'),
});

/**
 * Validate and parse environment variables
 */
export function validateEnvironment(): EnvironmentConfig {
  const { error, value } = environmentSchema.validate(process.env, {
    allowUnknown: true,
    stripUnknown: true,
  });

  if (error) {
    const errorMessage = `Environment validation error: ${error.details
      .map((detail) => detail.message)
      .join(', ')}`;
    
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }

  return value as EnvironmentConfig;
}

/**
 * Get current environment configuration
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  return validateEnvironment();
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Check if running in test mode
 */
export function isTest(): boolean {
  return process.env.NODE_ENV === 'test';
}

/**
 * Check if using deployed database (Supabase)
 */
export function isDeployedMode(): boolean {
  return process.env.DATABASE_MODE === 'deployed';
}

/**
 * Check if using local database
 */
export function isLocalMode(): boolean {
  return process.env.DATABASE_MODE === 'local' || !process.env.DATABASE_MODE;
}
