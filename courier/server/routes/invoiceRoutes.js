import express from "express";
import {
  getAllInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoiceById,
  getInvoiceByUserId,
} from "../controllers/invoiceController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .get(getAllInvoices)
  .post(createInvoice)
  .patch(updateInvoice)
  .delete(deleteInvoice);
router.route("/:id").get(getInvoiceById);
router.route("/:userId").get(getInvoiceByUserId);

export default router;
