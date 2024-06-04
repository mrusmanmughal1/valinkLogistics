import express from "express";
import {
  getAllQuotes,
  createNewQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quotesController.js";
import { requestLimiter } from "../middleware/requestLimiter.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .get(verifyJWT, getAllQuotes)
  .post(requestLimiter, createNewQuote)
  .patch(verifyJWT, updateQuote)
  .delete(verifyJWT, deleteQuote);

export default router;
