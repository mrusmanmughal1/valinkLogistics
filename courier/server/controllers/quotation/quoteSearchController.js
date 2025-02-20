import QuotationForm from "../../models/QuotationForm.js";
import asyncHandler from "express-async-handler";

export const searchQuotes = asyncHandler(async (req, res) => {
  const { query } = req.query;
  if (!query || query.length < 3) {
    return res.json([]);
  }
  const queryNumber = Number(query);
  if (isNaN(queryNumber)) {
    return res.status(400).json({ message: "Invalid search query" });
  }

  const quotes = await QuotationForm.find({
    quoteNum: { $regex: `${queryNumber}` },
  })
    .limit(10)
    .select("quoteNum _id")
    .lean();
  if (!quotes.length) {
    return res.json([]);
  }
  res.json({
    success: true,
    quotes,
  });
});
