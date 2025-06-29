import mongoose, { Schema } from "mongoose";

export const RideDetailsSchema: Schema = new Schema({
    startingKm: { type: Number, required: true },
  endingKm: { type: Number, required: true },
    rideDate: { type: Date, required: true },
    startingPoint: { type: String, required: true },
    destination: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    fuelAdded: { type: Number, required: true },
    odometerAtFuel: { type: Number, required: true },
    note: { type: String, required: false }
})

export const RideDetailsModel = mongoose.model("RideDetails", RideDetailsSchema);