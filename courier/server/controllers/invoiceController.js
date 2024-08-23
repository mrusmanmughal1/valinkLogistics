import Invoice from "../models/Invoice.js";
import asyncHandler from "express-async-handler";
import QuotationForm from "../models/QuotationForm.js";
export const getAllInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find()
    .populate("userID", "userName")
    .populate("quotationID", "quoteNum")
    .lean();

  if (!invoices.length) {
    return res.status(404).json({ message: "No invoices found" });
  }
  invoice.userID = invoice.userID || "Guest";

  res.json(invoices);
});

//Get Invoice by ID

export const getInvoiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const invoice = await Invoice.findById(id)
    .populate("userID", "userName")
    .populate("quotationID", "quoteNum")
    .lean();

  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }
  invoice.userID = invoice.userID || "Guest";

  res.json(invoice);
});

//Get Invoice by UserID

export const getInvoiceByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const invoices = await Invoice.find({ userID: userId })
    .populate("userID", "userName")
    .populate("quotationID", "quoteNum")
    .lean();

  res.status(200).json(invoices);

  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }
  invoice.userID = invoice.userID || "Guest";

  res.json(invoice);
});

//Create New Payment

export const createInvoice = asyncHandler(async (req, res) => {
  const {
    userID,
    quotationID,
    invoiceDate,
    dueDate,
    items,
    paymentStatus,
    paymentDetails,
    notes,
  } = req.body;

  if (!quotationID || !dueDate || !items?.length) {
    return res
      .status(400)
      .json({ message: "Some required fields must be provided" });
  }

  const invoice = new Invoice({
    userID: userID || null,
    quotationID,
    invoiceDate,
    dueDate,
    items,
    paymentStatus,
    paymentDetails,
    notes,
  });

  await invoice.save();

  res.status(201).json({ message: "Invoice created successfully", invoice });
});

//Update Payment

export const updateInvoice = asyncHandler(async (req, res) => {
  const { id, ...updateData } = req.body;

  const invoice = await Invoice.findById(id);
  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }

  Object.assign(invoice, updateData);

  await invoice.save();

  res.json({ message: "Invoice updated successfully", invoice });
});

//Delete Payment

export const deleteInvoice = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "user ID required" });
  }
  const invoice = await Invoice.findById(id).exec();
  const job = await QuotationForm.findById(invoice.quotationID).lean().exec();
  if (job) {
    return res.status(401).json({
      message: `You need to delete Quotation No. ${job.quoteNum} before you delete invoice`,
    });
  }
  if (!invoice) {
    return res.status(400).json({ message: "no invoice founded" });
  }
  await invoice.deleteOne();
  return res.status(201).json({
    message: `Invoice has been deleted`,
  });
});
