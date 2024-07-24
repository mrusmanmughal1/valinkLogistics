import QuotePayment from "../models/QuotePayment.js";
import asyncHandler from "express-async-handler";
import QuotationForm from "../models/QuotationForm.js";
import User from "../models/User.js";

export const getAllPayments = asyncHandler(async (req, res) => {
  const quotePayment = await QuotePayment.find().lean();
  if (!quotePayment.length) {
    return res.status(400).json({ message: "No payments found" });
  }
  const quotePaymentWithJob = await Promise.all(
    quotePayment.map(async (quotePay) => {
      const job = await QuotationForm.findById(quotePay.formID).lean().exec();
      const user = await User.findById(quotePay.userID).lean().exec();
      const userName = user ? user.userName : "Guest";
      return { ...quotePay, quoteNumber: job.quoteNum, userName };
    })
  );
  res.json(quotePaymentWithJob);
});

//Create New Payment

export const createPayment = asyncHandler(async (req, res) => {
  const {
    formID,
    paymentStatus,
    paymentMethod,
    paymentAmount,
    paymentReference,
  } = req.body;
  if (
    !formID ||
    !paymentStatus ||
    !paymentMethod ||
    !paymentAmount ||
    !paymentReference
  ) {
    return res.status(400).json({ message: "Some fields are mandatory" });
  }
  const paymentObject = {
    formID,
    paymentStatus,
    paymentMethod,
    paymentAmount,
    paymentReference,
  };
  const payment = await QuotePayment.create(paymentObject);
  if (payment) {
    return res.status(201).json({ message: "Payment Proccessed" });
  } else {
    return res.status(400).json({ message: "Invalid Data" });
  }
});

//Update Payment

export const updatePayment = asyncHandler(async (req, res) => {
  const {
    id,
    formID,
    paymentStatus,
    paymentMethod,
    paymentAmount,
    paymentReference,
  } = req.body;
  if (
    !id ||
    !formID ||
    !paymentStatus ||
    !paymentMethod ||
    !paymentAmount ||
    !paymentReference
  ) {
    return res.status(400).json({ message: "Some fields are mandatory" });
  }
  const payment = await QuotePayment.findById(id).exec();
  payment.formID = formID;
  payment.paymentStatus = paymentStatus;
  payment.paymentMethod = paymentMethod;
  payment.paymentAmount = paymentAmount;
  payment.paymentReference = paymentReference;
  const updatePayment = await payment.save();
  return res.json({ message: "Payment Information has been updated." });
});

//Delete Payment

export const deletePayment = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "user ID required" });
  }
  const payment = await QuotePayment.findById(id).exec();
  const job = await QuotationForm.findById(payment.formID).lean().exec();
  if (job) {
    return res.status(401).json({
      message: `You need to delete Quotation No. ${job.quoteNum} before you delete payment`,
    });
  }
  if (!payment) {
    return res.status(400).json({ message: "no Payment founded" });
  }
  const result = await payment.deleteOne();
  return res.status(201).json({
    message: `Payment for Quotation No. ${job.quoteNum} has been deleted`,
  });
});
