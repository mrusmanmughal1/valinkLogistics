import express from "express";
import {
  getAllQuotes,
  createNewQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quotesController.js";
import { requestLimiter } from "../middleware/requestLimiter.js";

const router = express.Router();

router
  .route("/")
  .get(getAllQuotes)
  .post(requestLimiter, createNewQuote)
  .patch(updateQuote)
  .delete(deleteQuote);

export default router;
