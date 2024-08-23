import QuotationForm from "../models/QuotationForm.js";
import asyncHandler from "express-async-handler";
/* Fetch all Quotes */

export const getAllQuotes = asyncHandler(async (req, res) => {
  const quotes = await QuotationForm.find()
    .populate("selectedVan", "typeofVan")
    .populate("userID", "userName")
    .lean();

  if (!quotes.length) {
    return res.status(404).json({ message: "No quotes found" });
  }
  res.json(quotes);
});
export const getQuoteById = asyncHandler(async (req, res) => {
  const id = req.params;
  const quotes = await QuotationForm.findById(id)
    .populate("selectedVan", "typeofVan")
    .populate("userID", "userName")
    .lean();

  if (!quotes.length) {
    return res.status(404).json({ message: "No quotes found" });
  }
  res.json(quotes);
});
/* Create a new Quote */

export const createNewQuote = asyncHandler(async (req, res) => {
  const {
    userID,
    collectionDetails,
    deliveryDetails,
    bookerDetails,
    selectedVan,
    notes,
  } = req.body;

  // Validate required fields for nested objects
  if (
    !collectionDetails ||
    !deliveryDetails ||
    !bookerDetails ||
    !selectedVan ||
    !collectionDetails.name ||
    !deliveryDetails.name ||
    !bookerDetails.name ||
    !bookerDetails.email
  ) {
    return res
      .status(400)
      .json({ message: "Some required fields are missing" });
  }

  const quoteObject = {
    userID: userID || null, // Allow for guest users
    collectionDetails,
    deliveryDetails,
    bookerDetails,
    selectedVan,
    notes,
  };

  const newQuote = await QuotationForm.create(quoteObject);

  if (newQuote) {
    res.status(201).json({
      message: "New quote created",
      quoteId: newQuote._id,
    });
  } else {
    res.status(400).json({ message: "Invalid quote data received" });
  }
});

/* Update existing Quote */

export const updateQuote = asyncHandler(async (req, res) => {
  const { id, ...updateData } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Quote ID is required" });
  }

  const quote = await QuotationForm.findById(id).exec();

  if (!quote) {
    return res.status(404).json({ message: "Quote not found" });
  }

  // Update only provided fields
  Object.assign(quote, updateData);

  const updatedQuote = await quote.save();

  res.json({
    message: "Quote updated successfully",
    updatedQuote,
  });
});

/* Delete Quote */

export const deleteQuote = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Quote ID is required" });
  }

  const quote = await QuotationForm.findById(id).exec();

  if (!quote) {
    return res.json({
      message: "Quote not found. It might have been deleted already.",
    });
  }

  await quote.deleteOne();

  res.json({ message: "Quote has been deleted" });
});
