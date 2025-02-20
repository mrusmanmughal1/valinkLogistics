import express from "express";
import {
  getAllQuotes,
  createNewQuote,
  updateQuote,
  deleteQuote,
  getQuoteById,
} from "../controllers/quotation/quotesController.js";
import { searchQuotes } from "../controllers/quotation/quoteSearchController.js";
import { requestLimiter } from "../middleware/requestLimiter.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();
// CRUD operations for quotes

router
  .route("/")
  .get(getAllQuotes)
  .post(requestLimiter, createNewQuote)
  .patch(updateQuote)
  .delete(deleteQuote);
router.route("/:id").get(getQuoteById);

// Add the search route

router.route("/search").get(searchQuotes);

//Search by status
router.route("/status/:status").get(searchQuotes);

export default router;
