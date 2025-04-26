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
  .get(verifyJWT, getAllVehicle)
  .post(createNewVehicle)
  .patch(updateVehicle)
  .delete(deleteVehicle);

export default router;
