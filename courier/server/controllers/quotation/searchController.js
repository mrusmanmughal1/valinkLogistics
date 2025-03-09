import asyncHandler from "express-async-handler";
import QuotationForm from "../../models/QuotationForm.js";

export const searchQuotesV2 = asyncHandler(async (req, res) => {
  try {
    const {
      quoteNum,
      quoteJobStatus,
      quotePayStatus,
      page = 1,
      limit = 10,
      startDate,
      endDate,
    } = req.query;

    let matchQuery = {}; // Empty query, will add conditions dynamically

    // 🔹 1️⃣ Optimized Search by quoteNum
    if (quoteNum && quoteNum.length >= 2) {
      matchQuery.$expr = {
        $regexMatch: {
          input: { $toString: "$quoteNum" }, // Convert number to string at query level
          regex: `^${quoteNum}`, // Match numbers starting with input
          options: "i",
        },
      };
    }

    // 🔹 2️⃣ Filter by quoteJobStatus
    if (quoteJobStatus) {
      matchQuery.quoteJobStatus = quoteJobStatus;
    }

    // 🔹 3️⃣ Filter by quotePayStatus
    if (quotePayStatus !== undefined) {
      matchQuery.quotePayStatus = JSON.parse(quotePayStatus.toLowerCase());
    }

    // 🔹 5️⃣ Filter by Date Range
    const buildDateFilter = (startDate, endDate) => {
      const filter = {};
      if (startDate) filter.$gte = new Date(startDate);
      if (endDate) filter.$lte = new Date(endDate);
      return Object.keys(filter).length ? filter : undefined;
    };
    const dateFilter = buildDateFilter(startDate, endDate);
    if (dateFilter) matchQuery.createdAt = dateFilter;

    // Pagination
    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(limit, 10) || 10;
    const skipRecords = (pageNumber - 1) * pageSize;

    // 🔍 Optimized MongoDB Aggregation Query using `$facet`
    const aggregationPipeline = [
      { $match: matchQuery },
      { $sort: { createdAt: -1 } },
      {
        $facet: {
          metadata: [{ $count: "totalRecords" }],
          statusCounts: [
            { $group: { _id: "$quoteJobStatus", count: { $sum: 1 } } }, // Count by status
          ],
          data: [
            { $skip: skipRecords },
            { $limit: pageSize },
            {
              $project: {
                _id: 1,
                quoteNum: 1,
                quoteJobStatus: 1,
                quotePayStatus: 1,
                createdAt: 1,
                bookerDetails: 1,
                selectedVan: 1,
                quoteAmmount: 1,
                quoteDistance: 1,
                collectionDetails: 1,
                deliveryDetails: 1,
              },
            },
          ],
        },
      },
    ];

    const [result] = await QuotationForm.aggregate(aggregationPipeline);
    // 🛠 Format `statusCounts` for Missing Values
    const statusCounts = {
      Pending: 0,
      Accepted: 0,
      InProgress: 0,
      Completed: 0,
      Cancelled: 0,
    };
    result.statusCounts.forEach((status) => {
      statusCounts[`${status._id}`] = status.count;
    });
    const totalRecords = result.metadata[0]?.totalRecords || 0;
    const quotes = result.data;

    // ✅ Response
    res.json({
      success: true,
      totalRecords,
      totalPages: Math.ceil(totalRecords / pageSize),
      currentPage: pageNumber,
      statusCounts,
      pageSize,
      data: quotes,
    });
  } catch (error) {
    console.error("Error searching quotes:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
