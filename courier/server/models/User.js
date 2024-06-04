import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  roles: [
    {
      type: String,
      default: "Customer",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
export default User;
