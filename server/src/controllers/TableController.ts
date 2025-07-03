import { Request, Response, NextFunction } from 'express';
import { SuccessResponse } from '@/types/errors';

export class TableController {
  public getTables = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: [],
        message: 'Tables retrieved successfully',
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public getAvailableTables = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: [],
        message: 'Available tables retrieved successfully',
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public createTable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: null,
        message: 'Table created successfully',
      };
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  public updateTableStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: SuccessResponse = {
        success: true,
        data: null,
        message: 'Table status updated successfully',
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}
