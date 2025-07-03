import { Router } from 'express';
import { AuthController } from '@/controllers/AuthController';
import { strictRateLimiterMiddleware } from '@/middleware/rateLimiter';
import { validateRequest } from '@/middleware/validation';
import { loginSchema, registerSchema, refreshTokenSchema } from '@/utils/validation/authSchemas';

/**
 * Authentication routes
 * Handles user registration, login, logout, and token refresh
 */
const router = Router();
const authController = new AuthController();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post(
  '/register',
  strictRateLimiterMiddleware,
  validateRequest(registerSchema),
  authController.register
);

/**
 * @route   POST /api/auth/login
 * @desc    Login user and return JWT token
 * @access  Public
 */
router.post(
  '/login',
  strictRateLimiterMiddleware,
  validateRequest(loginSchema),
  authController.login
);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user (invalidate token)
 * @access  Private
 */
router.post('/logout', authController.logout);

/**
 * @route   POST /api/auth/refresh
 * @desc    Refresh JWT token
 * @access  Public
 */
router.post(
  '/refresh',
  validateRequest(refreshTokenSchema),
  authController.refreshToken
);

/**
 * @route   POST /api/auth/forgot-password
 * @desc    Send password reset email
 * @access  Public
 */
router.post(
  '/forgot-password',
  strictRateLimiterMiddleware,
  authController.forgotPassword
);

/**
 * @route   POST /api/auth/reset-password
 * @desc    Reset password with token
 * @access  Public
 */
router.post(
  '/reset-password',
  strictRateLimiterMiddleware,
  authController.resetPassword
);

/**
 * @route   POST /api/auth/verify-email
 * @desc    Verify email address
 * @access  Public
 */
router.post('/verify-email', authController.verifyEmail);

/**
 * @route   POST /api/auth/resend-verification
 * @desc    Resend email verification
 * @access  Public
 */
router.post(
  '/resend-verification',
  strictRateLimiterMiddleware,
  authController.resendVerification
);

export default router;
