import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const QuotationFormSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    collectionDetails: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      postCode: { type: String, required: true },
      date: { type: Date, required: true },
      time: { type: String, required: true },
      contact: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      additionalInstructions: { type: String },
    },
    deliveryDetails: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      postCode: { type: String, required: true },
      date: { type: Date, required: true },
      time: { type: String, required: true },
      contact: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      additionalInstructions: { type: String },
    },
    bookerDetails: {
      name: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      email: { type: String, required: true },
    },
    selectedVan: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vehicle",
    },
    quoteJobStatus: {
      type: String,
      enum: ["Pending", "Accepted", "In Progress", "Completed", "Cancelled"],
      default: "Pending",
    },
    quoteAmmount: {
      type: Number,
      required: true,
    },
    quoteDistance: {
      type: Number,
      required: true,
    },
    quotePayStatus: {
      type: Boolean,
      default: false,
    },
    notes: {
      // Optional field for any additional comments or internal notes
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

QuotationFormSchema.plugin(AutoIncrement, {
  inc_field: "quoteNum",
  id: "quoteNumber",
  start_seq: 500,
});

const QuotationForm = mongoose.model("QuotationForm", QuotationFormSchema);
export default QuotationForm;
