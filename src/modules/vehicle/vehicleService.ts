import { Bike } from '../vehicle/vehicleModel';

export const bikeService = {
  addBike: async (bikeData: { bikeName: string; model: string; year: number }) => {
      console.log("add bike called");

    const newBike = new Bike(bikeData);
    return await newBike.save();
  },

  getAllBikes: async () => {
    return await Bike.find();
  },
};
