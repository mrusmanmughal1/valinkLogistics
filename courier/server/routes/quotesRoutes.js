import express from "express";
import {
  getAllQuotes,
  createNewQuote,
  updateQuote,
  deleteQuote,
  getQuoteById,
} from "../controllers/quotation/quotesController.js";
import { searchQuotes } from "../controllers/quotation/quoteSearchController.js";
import { searchQuotesByStatus } from "../controllers/quotation/quoteSearchByStatusController.js";
import { requestLimiter } from "../middleware/requestLimiter.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { getAllquouteCounts } from "../controllers/quotation/getAllquouteCounts.js";
import { searchQuotesV2 } from "../controllers/quotation/searchController.js";

const router = express.Router();
// CRUD operations for quotes

router
  .route("/")
  .get(getAllQuotes)
  .post(requestLimiter, createNewQuote)
  .patch(updateQuote)
  .delete(deleteQuote);
router.route("/searchbyID/:id").get(getQuoteById);

// Add the search route
router.route("/search").get(searchQuotesV2);
router.route("/searchByQuote/").get(searchQuotes);

//Search by status
router.route("/searchByStatus/:st").get(searchQuotesByStatus);

router.route("/getQuoteCount").get(getAllquouteCounts);

export default router;
