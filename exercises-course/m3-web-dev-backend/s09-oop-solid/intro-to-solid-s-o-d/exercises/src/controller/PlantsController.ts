/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import PlantsService from '../services/PlantsService';

class PlantsController {
  public static async getPlants(req: Request, res: Response): Promise<void> {
    try {
      const plants = await PlantsService.getPlants();
      res.status(200).json(plants);
    } catch (error: unknown) {
      res.status(500).json(error);
    }
  }
}

export default PlantsController;