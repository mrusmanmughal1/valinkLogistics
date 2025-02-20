import express from "express";
import {
  getAllVehicle,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicle/vehicleController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .get(getAllVehicle)
  .post(verifyJWT, createNewVehicle)
  .patch(verifyJWT, updateVehicle)
  .delete(verifyJWT, deleteVehicle);

export default router;
