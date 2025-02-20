import Vehicle from "../../models/Vehicle.js";
import asyncHandler from "express-async-handler";

/* Fethc all vehicles*/

export const getAllVehicle = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find().lean();
  if (!vehicles.length) {
    return res.status(400).json({ message: "No vehicles found" });
  }
  res.json(vehicles);
});

/* Create New Vehicle */

export const createNewVehicle = asyncHandler(async (req, res) => {
  const { typeofVan, size, weight, idealUses, mileRate, minCharge } = req.body;
  if (!typeofVan || !size || !weight || !idealUses || !mileRate || !minCharge) {
    return res.status(400).json({ message: "All field are required" });
  }
  const duplicate = await Vehicle.findOne({ typeofVan }).lean().exec();
  if (duplicate) {
    return res
      .status(409)
      .json({ message: "Duplicate vehicle. Please change vehicle type." });
  }
  const vehicleObject = {
    typeofVan,
    size,
    weight,
    idealUses,
    mileRate,
    minCharge,
  };
  const vehicle = await Vehicle.create(vehicleObject);
  if (vehicle) {
    res.status(201).json({ message: `${vehicle.typeofVan} is added.` });
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
});

/* Update vehicle */

export const updateVehicle = asyncHandler(async (req, res) => {
  const { id, typeofVan, size, weight, idealUses, mileRate, minCharge } =
    req.body;
  if (
    !id ||
    !typeofVan ||
    !size ||
    !weight ||
    !idealUses ||
    !mileRate ||
    !minCharge
  ) {
    return res.status(400).json({ message: "All field are required" });
  }
  const vehicle = await Vehicle.findById(id).exec();
  if (!vehicle) {
    return res.status(400).json({ message: "Vehicle not found" });
  }
  const duplicate = await Vehicle.findOne({ typeofVan }).lean().exec();
  if (duplicate && duplicate?._id.toString() !== id) {
    return res
      .status(409)
      .json({ message: "Duplicate vehicle. Please change vehicle type." });
  }
  vehicle.typeofVan = typeofVan;
  vehicle.size = size;
  vehicle.weight = weight;
  vehicle.idealUses = idealUses;
  vehicle.mileRate = mileRate;
  vehicle.minCharge = minCharge;
  const result = await vehicle.save();
  res.json({ message: `${result.typeofVan} van updated` });
});

/* Delete Vehicle */

export const deleteVehicle = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const vehicle = await Vehicle.findById(id).exec();
  if (!vehicle) {
    return res.status(400).json({ message: "Vehicle not found" });
  }
  const result = await vehicle.deleteOne();
  res.json({ message: `${vehicle.typeofVan} van deleted` });
});
