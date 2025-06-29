import { Bike } from '../vehicle/vehicleModel';

export const bikeService = {
  addBike: async (bikeData: { bikeName: string; model: string; year: number }) => {
    const newBike = new Bike(bikeData);
    return await newBike.save();
  },

  getAllBikes: async () => {
    return await Bike.find();
  },
};
