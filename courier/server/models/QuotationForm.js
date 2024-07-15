import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const QuotationFormSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    collectionName: {
      type: String,
      required: true,
    },
    collectionAddress: {
      type: String,
      required: true,
    },
    collectionPostCode: {
      type: String,
      required: true,
    },
    collectionDate: {
      type: String,
      required: true,
    },
    collectionTime: {
      type: String,
      required: true,
    },
    collectionContact: {
      type: String,
      required: true,
    },
    collectionNumber: {
      type: String,
      required: true,
    },
    collectionDetail: {
      type: String,
      required: true,
    },
    collectionInstruction: {
      type: String,
      required: true,
    },
    selectedVan: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vehicle",
    },
    deliveryName: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    deliveryPostCode: {
      type: String,
      required: true,
    },
    deliveryDate: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true,
    },
    deliveryContact: {
      type: String,
      required: true,
    },
    deliveryNumber: {
      type: String,
      required: true,
    },
    bookerName: {
      type: String,
      required: true,
    },
    bookerNumber: {
      type: String,
      required: true,
    },
    bookerEmail: {
      type: String,
      required: true,
    },
    deliveryInstruction: {
      type: String,
      required: true,
    },
    quoteJobStatus: {
      type: String,
      default: "Pending",
    },
    quotePayStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
QuotationFormSchema.plugin(AutoIncrement, {
  inc_field: "quote",
  id: "quoteNumber",
  start_seq: 500,
});

const QuotationForm = mongoose.model("QuotationForm", QuotationFormSchema);
export default QuotationForm;
