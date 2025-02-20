import QuotationForm from "../../models/QuotationForm.js";
import asyncHandler from "express-async-handler";

export const searchQuotes = asyncHandler(async (req, res) => {
  const quoteStatus = req.params.status;
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await QuotationForm.countDocuments({ status: quoteStatus });

  const quotes = await QuotationForm.find({ status: quoteStatus })
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate("selectedVan", "typeofVan")
    .populate("userID", "userName")
    .lean();

  res.json({
    success: true,
    count,
    quotes,
  });
});
