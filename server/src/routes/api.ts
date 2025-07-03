import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './users';
import menuRoutes from './menu';
import orderRoutes from './orders';
import reservationRoutes from './reservations';
import tableRoutes from './tables';

/**
 * Main API router
 * Combines all API routes under /api prefix
 */
const router = Router();

// API version and info
router.get('/', (req, res) => {
  res.json({
    message: 'Lions Cafe Web Oasis API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      menu: '/api/menu',
      orders: '/api/orders',
      reservations: '/api/reservations',
      tables: '/api/tables',
    },
    documentation: '/api/docs',
    health: '/health',
  });
});

// Mount route modules
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/reservations', reservationRoutes);
router.use('/tables', tableRoutes);

export default router;
