import express from "express";
import {
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controllers/quotePayController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .get(verifyJWT, getAllPayments)
  .post(verifyJWT, createPayment)
  .patch(verifyJWT, updatePayment)
  .delete(verifyJWT, deletePayment);

export default router;
