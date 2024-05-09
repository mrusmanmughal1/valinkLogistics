import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  typeofVan: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  idealUses: {
    type: String,
    required: true,
  },
  mileRate: {
    type: Number,
    required: true,
  },
  minCharge: {
    type: Number,
    required: true,
  },
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);
export default Vehicle;
