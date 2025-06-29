import { Request, Response } from 'express';
import { AddRideDetailsType } from './rideTypes';
import { rideService } from './rideService';

export const rideController =
{
    addRideDetails: ((req: Request, res: Response) => {
        try {
            const rideModel: AddRideDetailsType = req.body;
            rideService.addRideDetails(rideModel);
            res.status(201).json({ message: 'ride added successfully!', });
        } catch (e) {
            res.status(500).json({ message: 'somthing went wrong' })
        }
    })
}
