import { Request, Response } from 'express';
import { bikeService } from '../vehicle/vehicleService';

export const vehicleController = {
  addBike: async (req: Request, res: Response) => {
    try {
      const { bikeName, model, year } = req.body;
      const savedBike = await bikeService.addBike({ bikeName, model, year });
      res.status(201).json({ message: 'Bike added successfully!', bike: savedBike });
    } catch (error) {
      res.status(500).json({ message: 'Error adding bike', error });
    }
  },

  getAllBikes: async (_req: Request, res: Response) => {
    try {
      const bikes = await bikeService.getAllBikes();
      res.status(200).json({ bikes });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bikes', error });
    }
  },
};
