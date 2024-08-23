import mongoose from "mongoose";
const QuotePaymentSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    formID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "QuotationForm",
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    paymentMethod: {
      type: String,
      enum: ["Credit Card", "PayPal", "Bank Transfer", "Cash"],
    },
    paymentAmount: {
      type: Number,
      required: true,
    },
    paymentReference: {
      type: String,
    },
    paymentDate: {
      // Adding a date for when the payment was made
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const QuotePayment = mongoose.model("QuotePayment", QuotePaymentSchema);
export default QuotePayment;
