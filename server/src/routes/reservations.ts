import { Router } from 'express';
import { ReservationController } from '@/controllers/ReservationController';
import { authenticate, authorize } from '@/middleware/auth';

/**
 * Reservation routes
 * Handles table reservations
 */
const router = Router();
const reservationController = new ReservationController();

/**
 * @route   GET /api/reservations
 * @desc    Get user's reservations or all reservations (staff)
 * @access  Private
 */
router.get('/', authenticate, reservationController.getReservations);

/**
 * @route   POST /api/reservations
 * @desc    Create new reservation
 * @access  Private
 */
router.post('/', authenticate, reservationController.createReservation);

/**
 * @route   PUT /api/reservations/:id
 * @desc    Update reservation
 * @access  Private
 */
router.put('/:id', authenticate, reservationController.updateReservation);

/**
 * @route   DELETE /api/reservations/:id
 * @desc    Cancel reservation
 * @access  Private
 */
router.delete('/:id', authenticate, reservationController.cancelReservation);

export default router;
