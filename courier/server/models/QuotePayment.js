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
    },
    paymentMethod: {
      type: String,
    },
    paymentAmount: {
      type: Number,
    },
    paymentReference: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const QuotePayment = mongoose.model("QuotePayment", QuotePaymentSchema);
export default QuotePayment;
