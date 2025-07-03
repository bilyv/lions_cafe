import { Router } from 'express';
import { UserController } from '@/controllers/UserController';
import { authenticate, authorize } from '@/middleware/auth';

/**
 * User routes
 * Handles user profile and management
 */
const router = Router();
const userController = new UserController();

/**
 * @route   GET /api/users/profile
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/profile', authenticate, userController.getProfile);

/**
 * @route   PUT /api/users/profile
 * @desc    Update current user profile
 * @access  Private
 */
router.put('/profile', authenticate, userController.updateProfile);

/**
 * @route   GET /api/users
 * @desc    Get all users (admin only)
 * @access  Private (Admin only)
 */
router.get('/', authenticate, authorize(['admin']), userController.getAllUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Get user by ID (admin only)
 * @access  Private (Admin only)
 */
router.get('/:id', authenticate, authorize(['admin']), userController.getUserById);

export default router;
