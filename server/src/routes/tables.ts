import { Router } from 'express';
import { TableController } from '@/controllers/TableController';
import { authenticate, authorize } from '@/middleware/auth';

/**
 * Table routes
 * Handles restaurant table management
 */
const router = Router();
const tableController = new TableController();

/**
 * @route   GET /api/tables
 * @desc    Get all tables
 * @access  Private (Staff and above)
 */
router.get('/', authenticate, authorize(['staff', 'admin', 'manager']), tableController.getTables);

/**
 * @route   GET /api/tables/available
 * @desc    Get available tables
 * @access  Public
 */
router.get('/available', tableController.getAvailableTables);

/**
 * @route   POST /api/tables
 * @desc    Create new table
 * @access  Private (Admin/Manager only)
 */
router.post('/', authenticate, authorize(['admin', 'manager']), tableController.createTable);

/**
 * @route   PATCH /api/tables/:id/status
 * @desc    Update table status
 * @access  Private (Staff and above)
 */
router.patch(
  '/:id/status',
  authenticate,
  authorize(['staff', 'admin', 'manager']),
  tableController.updateTableStatus
);

export default router;
