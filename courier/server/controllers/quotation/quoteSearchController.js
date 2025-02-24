import QuotationForm from "../../models/QuotationForm.js";
import asyncHandler from "express-async-handler";

export const searchQuotes = asyncHandler(async (req, res) => {
  const { quoteNum } = req.query;
  //TODO delete this console.log
  console.log(quoteNum);
  if (!quoteNum || quoteNum.length < 3) {
    return res.json([]);
  }
  const queryNumber = Number(quoteNum);
  if (isNaN(queryNumber)) {
    return res.status(400).json({ message: "Invalid search query" });
  }

  const quotes = await QuotationForm.aggregate([
    {
      $match: {
        $expr: {
          $regexMatch: {
            input: { $toString: "$quoteNum" }, // Convert quoteNum to string
            regex: `^${quoteNum}`, // Match numbers starting with query
            options: "i",
          },
        },
      },
    },
    { $limit: 10 }, // Limit results for performance
    { $project: { _id: 1, quoteNum: 1 } }, // Return only quoteNum
  ]);
  // const quotes = await QuotationForm.find({
  //   quoteNum: { $regex: `^${quoteNum}` },
  // })
  //   .limit(10)
  //   .select("quoteNum _id")
  //   .lean();
  if (!quotes.length) {
    return res.json([]);
  }
  res.json({
    success: true,
    quotes,
  });
});
