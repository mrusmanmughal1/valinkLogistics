import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
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
        role: {
          type: String,
          enum: ["Customer", "Admin", "Employee", "Driver"], // Explicitly defining possible roles
          default: "Customer",
        },
        permissions: [String], // Optional: Array of permissions for role-based access control
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
export default User;
