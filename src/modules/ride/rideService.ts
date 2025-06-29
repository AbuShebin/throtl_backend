import { AddRideDetailsType } from "./rideTypes";
import { RideDetailsModel, RideDetailsSchema } from "./rideModels";
import mongoose from "mongoose";
const RideDetails = mongoose.model("RideDetails", RideDetailsSchema);

export const rideService = {
    addRideDetails: (rideDetails:AddRideDetailsType)=>{
        const newRide = new RideDetailsModel(rideDetails);
         newRide.save();
    },
    getAllRideDetails:()=>{
        return RideDetails.find();
    }
}