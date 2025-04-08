import QuotationForm from "../../models/QuotationForm.js";
import asyncHandler from "express-async-handler";
/* Fetch all Quotes */

// export const getAllQuotes = asyncHandler(async (req, res) => {
//   const pageSize = 10;
//   const page = Number(req.query.pageNumber) || 1;
//   const count = await QuotationForm.countDocuments();

//   const quotes = await QuotationForm.find()
//     .sort({ createdAt: -1 })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1))
//     .populate("selectedVan", "typeofVan")
//     .populate("userID", "userName")
//     .lean();

//   if (!quotes.length) {
//     return res.status(404).json({ message: "No quotes found" });
//   }
//   res.json({
//     success: true,
//     count,
//     quotes,
//     numberOfPages: Math.ceil(count / pageSize),
//   });
// });

export const getAllQuotes = asyncHandler(async (req, res) => {
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
export const getQuoteById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const quotes = await QuotationForm.findById(id)
    .populate("selectedVan", "typeofVan")
    .populate("userID", "userName")
    .lean();

  if (!quotes) {
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
    quoteJobStatus,
    quoteAmmount,
    quoteDistance,
    quotePayStatus,
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
    quoteJobStatus,
    quoteAmmount,
    quoteDistance,
    quotePayStatus,
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
