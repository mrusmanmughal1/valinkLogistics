import express from "express";
import {
  getAllQuotes,
  createNewQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quotesController.js";
const router = express.Router();

router
  .route("/")
  .get(getAllQuotes)
  .post(createNewQuote)
  .patch(updateQuote)
  .delete(deleteQuote);

export default router;
