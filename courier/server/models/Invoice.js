import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const InvoiceItemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true }, // quantity * price
});

const PaymentDetailsSchema = new mongoose.Schema({
  paymentDate: { type: Date, default: Date.now },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "PayPal", "Bank Transfer", "Cash"],
  },
  paymentReference: { type: String },
  paymentAmount: { type: Number, required: true },
});

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: String,
      unique: true,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    quotationID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuotationForm",
      required: true,
    },
    invoiceDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    items: [InvoiceItemSchema],
    subtotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Overdue"],
      default: "Pending",
    },
    paymentDetails: PaymentDetailsSchema,
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

InvoiceSchema.pre("save", function (next) {
  if (!this.invoiceNumber) {
    this.invoiceNumber = `INV-${uuidv4().split("-")[0].toUpperCase()}`;
  }

  // Automatically calculate subtotal, tax, and total if not provided
  this.subtotal = this.items.reduce((acc, item) => acc + item.total, 0);
  this.tax = this.subtotal * 0.2; // Assume a 20% tax rate
  this.total = this.subtotal + this.tax;
  next();
});

const Invoice = mongoose.model("Invoice", InvoiceSchema);

export default Invoice;
