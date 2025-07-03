import { Router } from 'express';
import { MenuController } from '@/controllers/MenuController';
import { authenticate, authorize } from '@/middleware/auth';
import { validateRequest } from '@/middleware/validation';
import { createMenuItemSchema, updateMenuItemSchema } from '@/utils/validation/menuSchemas';

/**
 * Menu routes
 * Handles menu items and categories
 */
const router = Router();
const menuController = new MenuController();

/**
 * @route   GET /api/menu/categories
 * @desc    Get all menu categories
 * @access  Public
 */
router.get('/categories', menuController.getCategories);

/**
 * @route   GET /api/menu/categories/:id
 * @desc    Get category by ID
 * @access  Public
 */
router.get('/categories/:id', menuController.getCategoryById);

/**
 * @route   POST /api/menu/categories
 * @desc    Create new category
 * @access  Private (Admin/Manager only)
 */
router.post(
  '/categories',
  authenticate,
  authorize(['admin', 'manager']),
  menuController.createCategory
);

/**
 * @route   PUT /api/menu/categories/:id
 * @desc    Update category
 * @access  Private (Admin/Manager only)
 */
router.put(
  '/categories/:id',
  authenticate,
  authorize(['admin', 'manager']),
  menuController.updateCategory
);

/**
 * @route   DELETE /api/menu/categories/:id
 * @desc    Delete category
 * @access  Private (Admin only)
 */
router.delete(
  '/categories/:id',
  authenticate,
  authorize(['admin']),
  menuController.deleteCategory
);

/**
 * @route   GET /api/menu/items
 * @desc    Get all menu items with optional filtering
 * @access  Public
 */
router.get('/items', menuController.getMenuItems);

/**
 * @route   GET /api/menu/items/:id
 * @desc    Get menu item by ID
 * @access  Public
 */
router.get('/items/:id', menuController.getMenuItemById);

/**
 * @route   GET /api/menu/items/category/:categoryId
 * @desc    Get menu items by category
 * @access  Public
 */
router.get('/items/category/:categoryId', menuController.getMenuItemsByCategory);

/**
 * @route   GET /api/menu/featured
 * @desc    Get featured menu items
 * @access  Public
 */
router.get('/featured', menuController.getFeaturedItems);

/**
 * @route   POST /api/menu/items
 * @desc    Create new menu item
 * @access  Private (Admin/Manager only)
 */
router.post(
  '/items',
  authenticate,
  authorize(['admin', 'manager']),
  validateRequest(createMenuItemSchema),
  menuController.createMenuItem
);

/**
 * @route   PUT /api/menu/items/:id
 * @desc    Update menu item
 * @access  Private (Admin/Manager only)
 */
router.put(
  '/items/:id',
  authenticate,
  authorize(['admin', 'manager']),
  validateRequest(updateMenuItemSchema),
  menuController.updateMenuItem
);

/**
 * @route   PATCH /api/menu/items/:id/availability
 * @desc    Toggle menu item availability
 * @access  Private (Staff and above)
 */
router.patch(
  '/items/:id/availability',
  authenticate,
  authorize(['staff', 'admin', 'manager']),
  menuController.toggleAvailability
);

/**
 * @route   DELETE /api/menu/items/:id
 * @desc    Delete menu item
 * @access  Private (Admin only)
 */
router.delete(
  '/items/:id',
  authenticate,
  authorize(['admin']),
  menuController.deleteMenuItem
);

export default router;
