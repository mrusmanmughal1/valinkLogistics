import QuotationForm from "../models/QuotationForm.js";
import User from "../models/User.js";
import Vehicle from "../models/Vehicle.js";
import asyncHander from "express-async-handler";

/* Fetch all Quotes */

export const getAllQuotes = asyncHander(async (req, res) => {
  const quotes = await QuotationForm.find().lean();
  if (!quotes.length) {
    return res.status(400).json({ message: "No quotes found" });
  }
  const quoteWithVehicle = await Promise.all(
    quotes.map(async (quote) => {
      const van = await Vehicle.findById(quote.selectedVan).lean().exec();
      const { userId } = req.body;
      if (userId) {
        const user = await User.findById(quote.userID).lean().exec();
        return { ...quote, selectedVan: van.typeofVan, userID: user.userName };
      }
      return { ...quote, selectedVan: van.typeofVan, userID: "Guest" };
    })
  );
  res.json(quoteWithVehicle);
});

/* Create a new Quote */

export const createNewQuote = asyncHander(async (req, res) => {
  const {
    userID,
    collectionName,
    collectionAddress,
    collectionPostCode,
    collectionDate,
    collectionTime,
    collectionContact,
    collectionNumber,
    collectionDetail,
    collectionInstruction,
    selectedVan,
    deliveryName,
    deliveryAddress,
    deliveryPostCode,
    deliveryDate,
    deliveryTime,
    deliveryContact,
    deliveryNumber,
    deliveryDetail,
    deliveryInstruction,
  } = req.body;
  if (
    !collectionName ||
    !collectionAddress ||
    !collectionPostCode ||
    !collectionDate ||
    !collectionTime ||
    !collectionContact ||
    !collectionNumber ||
    !collectionDetail ||
    !collectionInstruction ||
    !selectedVan ||
    !deliveryName ||
    !deliveryAddress ||
    !deliveryPostCode ||
    !deliveryDate ||
    !deliveryTime ||
    !deliveryContact ||
    !deliveryNumber ||
    !deliveryDetail ||
    !deliveryInstruction
  ) {
    return res.status(400).json({ message: "All field are required" });
  }
  const newuserID = userID ? userID : null;
  const quoteObject = {
    userID: newuserID,
    collectionName,
    collectionAddress,
    collectionPostCode,
    collectionDate,
    collectionTime,
    collectionContact,
    collectionNumber,
    collectionDetail,
    collectionInstruction,
    selectedVan,
    deliveryName,
    deliveryAddress,
    deliveryPostCode,
    deliveryDate,
    deliveryTime,
    deliveryContact,
    deliveryNumber,
    deliveryDetail,
    deliveryInstruction,
  };
  const quote = await QuotationForm.create(quoteObject);
  if (quote) {
    res.status(201).json({
      message: `Job from ${quote.collectionName} to ${quote.deliveryName} is added.`,
    });
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
});

/* Update existing Quote */

export const updateQuote = asyncHander(async (req, res) => {
  const {
    id,
    userID,
    collectionName,
    collectionAddress,
    collectionPostCode,
    collectionDate,
    collectionTime,
    collectionContact,
    collectionNumber,
    collectionDetail,
    collectionInstruction,
    selectedVan,
    deliveryName,
    deliveryAddress,
    deliveryPostCode,
    deliveryDate,
    deliveryTime,
    deliveryContact,
    deliveryNumber,
    deliveryDetail,
    deliveryInstruction,
    quoteJobStatus,
  } = req.body;
  if (
    !id ||
    !userID ||
    !collectionName ||
    !collectionAddress ||
    !collectionPostCode ||
    !collectionDate ||
    !collectionTime ||
    !collectionContact ||
    !collectionNumber ||
    !collectionDetail ||
    !collectionInstruction ||
    !selectedVan ||
    !deliveryName ||
    !deliveryAddress ||
    !deliveryPostCode ||
    !deliveryDate ||
    !deliveryTime ||
    !deliveryContact ||
    !deliveryNumber ||
    !deliveryDetail ||
    !deliveryInstruction ||
    !quoteJobStatus
  ) {
    return res.status(400).json({ message: "All field are required" });
  }
  const quote = await QuotationForm.findById(id).exec();
  if (!quote) {
    return res.status(400).json({ message: "Quote not found" });
  }
  quote.userID = userID;
  quote.collectionName = collectionName;
  quote.collectionAddress = collectionAddress;
  quote.collectionPostCode = collectionPostCode;
  quote.collectionDate = collectionDate;
  quote.collectionTime = collectionTime;
  quote.collectionContact = collectionContact;
  quote.collectionNumber = collectionNumber;
  quote.collectionDetail = collectionDetail;
  quote.collectionInstruction = collectionInstruction;
  quote.selectedVan = selectedVan;
  quote.deliveryName = deliveryName;
  quote.deliveryAddress = deliveryAddress;
  quote.deliveryPostCode = deliveryPostCode;
  quote.deliveryDate = deliveryDate;
  quote.deliveryTime = deliveryTime;
  quote.deliveryContact = deliveryContact;
  quote.deliveryNumber = deliveryNumber;
  quote.deliveryDetail = deliveryDetail;
  quote.deliveryInstruction = deliveryInstruction;
  quote.quoteJobStatus = quoteJobStatus;
  const result = await quote.save();
  res.json({ message: "Quote form has been updated" });
});

/* Delete Quote */

export const deleteQuote = asyncHander(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(409).json({ message: "Id is not required" });
  }
  const quote = await QuotationForm.findById(id).exec();
  if (!quote) {
    return res.status(400).json({ message: "Quote not found" });
  }
  const result = await quote.deleteOne();
  res.json({ message: "Quote has been deleted" });
});
