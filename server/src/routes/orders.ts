import { Router } from 'express';
import { OrderController } from '@/controllers/OrderController';
import { authenticate, authorize } from '@/middleware/auth';

/**
 * Order routes
 * Handles customer orders
 */
const router = Router();
const orderController = new OrderController();

/**
 * @route   GET /api/orders
 * @desc    Get user's orders or all orders (staff)
 * @access  Private
 */
router.get('/', authenticate, orderController.getOrders);

/**
 * @route   GET /api/orders/:id
 * @desc    Get order by ID
 * @access  Private
 */
router.get('/:id', authenticate, orderController.getOrderById);

/**
 * @route   POST /api/orders
 * @desc    Create new order
 * @access  Private
 */
router.post('/', authenticate, orderController.createOrder);

/**
 * @route   PATCH /api/orders/:id/status
 * @desc    Update order status (staff only)
 * @access  Private (Staff and above)
 */
router.patch(
  '/:id/status',
  authenticate,
  authorize(['staff', 'admin', 'manager']),
  orderController.updateOrderStatus
);

export default router;
