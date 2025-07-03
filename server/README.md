# Lions Cafe Web Oasis - Backend Server

A TypeScript-based Node.js backend server for the Lions Cafe Web Oasis application, supporting both local PostgreSQL and Supabase deployment modes.

## 🚀 Features

- **TypeScript**: Full TypeScript support with strict type checking
- **Express.js**: Fast, unopinionated web framework
- **Database Support**: PostgreSQL (local) and Supabase (deployed)
- **Authentication**: JWT-based authentication with role-based access control
- **Validation**: Request validation using Joi schemas
- **Error Handling**: Comprehensive error handling with custom error types
- **Rate Limiting**: Built-in rate limiting for API protection
- **Logging**: Structured logging with Winston
- **Security**: Helmet, CORS, and other security middleware
- **Environment Configuration**: Flexible environment-based configuration

## 📁 Project Structure

```
server/
├── src/
│   ├── config/           # Configuration files
│   │   └── environment.ts
│   ├── controllers/      # Route controllers
│   │   ├── AuthController.ts
│   │   ├── MenuController.ts
│   │   ├── OrderController.ts
│   │   ├── ReservationController.ts
│   │   ├── TableController.ts
│   │   └── UserController.ts
│   ├── database/         # Database configuration and schemas
│   │   ├── config.ts
│   │   ├── main.sql
│   │   ├── schemas/      # Individual table schemas
│   │   ├── migrations/   # Database migrations
│   │   └── seeds/        # Database seed files
│   ├── middleware/       # Custom middleware
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── notFoundHandler.ts
│   │   ├── rateLimiter.ts
│   │   └── validation.ts
│   ├── models/           # Data models (to be implemented)
│   ├── routes/           # API routes
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── menu.ts
│   │   ├── orders.ts
│   │   ├── reservations.ts
│   │   ├── tables.ts
│   │   └── users.ts
│   ├── services/         # Business logic services (to be implemented)
│   ├── types/            # TypeScript type definitions
│   │   └── errors.ts
│   ├── utils/            # Utility functions
│   │   ├── logger.ts
│   │   └── validation/   # Validation schemas
│   │       ├── authSchemas.ts
│   │       └── menuSchemas.ts
│   └── index.ts          # Application entry point
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- PostgreSQL (for local development) OR Supabase account (for deployed mode)

### Installation

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration values.

### Environment Configuration

The server supports two database modes:

#### Local Mode (DATABASE_MODE=local)
- Uses local PostgreSQL database
- Requires PostgreSQL installation and setup
- Configure `DB_*` environment variables

#### Deployed Mode (DATABASE_MODE=deployed)
- Uses Supabase as the database
- Requires Supabase project setup
- Configure `SUPABASE_*` environment variables

### Required Environment Variables

```env
# Server Configuration
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173

# Database Mode
DATABASE_MODE=local  # or 'deployed'

# Authentication
JWT_SECRET=your_super_secure_jwt_secret_key_here_minimum_32_characters

# Local PostgreSQL (when DATABASE_MODE=local)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lions_cafe
DB_USER=postgres
DB_PASSWORD=your_password

# Supabase (when DATABASE_MODE=deployed)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 🚀 Running the Server

### Development Mode
```bash
npm run dev
```
Uses nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm run build
npm start
```

### Development with ts-node
```bash
npm run start:dev
```

## 📊 Database Setup

### Local PostgreSQL Setup

1. **Create database:**
   ```sql
   CREATE DATABASE lions_cafe;
   ```

2. **Run the main schema:**
   ```bash
   psql -U postgres -d lions_cafe -f src/database/main.sql
   ```

### Supabase Setup

1. Create a new Supabase project
2. Copy the main.sql content to Supabase SQL editor
3. Execute the schema
4. Configure environment variables with Supabase credentials

## 🔧 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run start:dev` - Start with ts-node
- `npm test` - Run tests (to be implemented)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🛡️ Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing configuration
- **Rate Limiting**: API rate limiting with different tiers
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Joi schema validation
- **Error Handling**: Secure error responses

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh JWT token

### Menu Management
- `GET /api/menu/categories` - Get all categories
- `GET /api/menu/items` - Get all menu items
- `POST /api/menu/items` - Create menu item (Admin/Manager)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

### Reservations
- `GET /api/reservations` - Get user reservations
- `POST /api/reservations` - Create reservation

### Tables
- `GET /api/tables/available` - Get available tables
- `GET /api/tables` - Get all tables (Staff+)

## 🔄 Development Status

This is the initial backend setup with:
- ✅ Project structure and configuration
- ✅ Database schema design
- ✅ Authentication middleware
- ✅ Error handling system
- ✅ Route structure
- ⏳ Controller implementations (placeholder)
- ⏳ Database models and services
- ⏳ Business logic implementation
- ⏳ Testing setup

## 🤝 Contributing

1. Follow TypeScript best practices
2. Add proper error handling
3. Include comprehensive comments
4. Write tests for new features
5. Update documentation

## 📄 License

MIT License - see LICENSE file for details
