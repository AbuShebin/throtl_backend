import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema(
  {
    bikeName: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Bike = mongoose.model('bikes', bikeSchema);
