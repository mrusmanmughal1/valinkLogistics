const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    formID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "QuotationForm",
    },
    paymentStatus: {
      type: Boolean,
      required: true,
    },
    paymentReference: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
