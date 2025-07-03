import { Request, Response, NextFunction } from 'express';
import { SuccessResponse } from '@/types/errors';

export class ReservationController {
  public getReservations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: [],
        message: 'Reservations retrieved successfully',
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public createReservation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: null,
        message: 'Reservation created successfully',
      };
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  public updateReservation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: null,
        message: 'Reservation updated successfully',
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public cancelReservation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: null,
        message: 'Reservation cancelled successfully',
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}
