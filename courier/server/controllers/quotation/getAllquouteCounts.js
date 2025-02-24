import QuotationForm from "../../models/QuotationForm.js";
import asyncHandler from "express-async-handler";

export const getAllquouteCounts = asyncHandler(async (req, res) => {
  //"Pending", "Accepted", "InProgress", "Completed", "Cancelled"
  const PendingCount = await QuotationForm.countDocuments({
    quoteJobStatus: "Pending",
  });
  const ApprovedCount = await QuotationForm.countDocuments({
    quoteJobStatus: "Accepted",
  });
  const InProgressCount = await QuotationForm.countDocuments({
    quoteJobStatus: "InProgress",
  });
  const CompletedCount = await QuotationForm.countDocuments({
    quoteJobStatus: "Completed",
  });
  const CancelledCount = await QuotationForm.countDocuments({
    quoteJobStatus: "Cancelled",
  });
  const count = {
    PendingCount,
    ApprovedCount,
    InProgressCount,
    CompletedCount,
    CancelledCount,
  };
  res.json(count);
});
