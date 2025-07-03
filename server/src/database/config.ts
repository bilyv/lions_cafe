import { Pool, PoolConfig } from 'pg';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { logger } from '@/utils/logger';

/**
 * Database configuration interface
 */
interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
  max?: number;
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
}

/**
 * Environment-specific database configurations
 */
const getDatabaseConfig = (): DatabaseConfig => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDeployed = process.env.DATABASE_MODE === 'deployed';

  if (isDeployed) {
    // Supabase/deployed configuration
    return {
      host: process.env.SUPABASE_DB_HOST || '',
      port: parseInt(process.env.SUPABASE_DB_PORT || '5432', 10),
      database: process.env.SUPABASE_DB_NAME || '',
      username: process.env.SUPABASE_DB_USER || '',
      password: process.env.SUPABASE_DB_PASSWORD || '',
      ssl: true,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
  } else {
    // Local PostgreSQL configuration
    return {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      database: process.env.DB_NAME || 'lions_cafe',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      ssl: isProduction,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
  }
};

/**
 * PostgreSQL connection pool
 */
class DatabaseConnection {
  private static instance: DatabaseConnection;
  private pool: Pool;
  private config: DatabaseConfig;

  private constructor() {
    this.config = getDatabaseConfig();
    this.pool = this.createPool();
    this.setupEventHandlers();
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  /**
   * Create PostgreSQL connection pool
   */
  private createPool(): Pool {
    const poolConfig: PoolConfig = {
      host: this.config.host,
      port: this.config.port,
      database: this.config.database,
      user: this.config.username,
      password: this.config.password,
      ssl: this.config.ssl ? { rejectUnauthorized: false } : false,
      max: this.config.max,
      idleTimeoutMillis: this.config.idleTimeoutMillis,
      connectionTimeoutMillis: this.config.connectionTimeoutMillis,
    };

    return new Pool(poolConfig);
  }

  /**
   * Setup event handlers for connection pool
   */
  private setupEventHandlers(): void {
    this.pool.on('connect', (client) => {
      logger.info('New database client connected');
    });

    this.pool.on('error', (err, client) => {
      logger.error('Unexpected error on idle client:', err);
    });

    this.pool.on('remove', (client) => {
      logger.info('Database client removed');
    });
  }

  /**
   * Get connection pool
   */
  public getPool(): Pool {
    return this.pool;
  }

  /**
   * Test database connection
   */
  public async testConnection(): Promise<boolean> {
    try {
      const client = await this.pool.connect();
      const result = await client.query('SELECT NOW()');
      client.release();
      
      logger.info('Database connection test successful:', result.rows[0]);
      return true;
    } catch (error) {
      logger.error('Database connection test failed:', error);
      return false;
    }
  }

  /**
   * Close all connections
   */
  public async close(): Promise<void> {
    try {
      await this.pool.end();
      logger.info('Database connection pool closed');
    } catch (error) {
      logger.error('Error closing database connection pool:', error);
    }
  }
}

/**
 * Supabase client configuration
 */
class SupabaseConnection {
  private static instance: SupabaseConnection;
  private client: SupabaseClient;

  private constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL and Anon Key are required for Supabase connection');
    }

    this.client = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
    });
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): SupabaseConnection {
    if (!SupabaseConnection.instance) {
      SupabaseConnection.instance = new SupabaseConnection();
    }
    return SupabaseConnection.instance;
  }

  /**
   * Get Supabase client
   */
  public getClient(): SupabaseClient {
    return this.client;
  }
}

// Export instances
export const db = DatabaseConnection.getInstance();
export const supabase = SupabaseConnection.getInstance();

// Export for direct access
export { DatabaseConnection, SupabaseConnection };
