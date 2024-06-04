import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
});

export const createNewUser = asyncHandler(async (req, res) => {
  const {
    userName,
    userEmail,
    password,
    companyName,
    address,
    city,
    postCode,
    roles,
  } = req.body;
  if (
    !userName ||
    !userEmail ||
    !password ||
    !companyName ||
    !address ||
    !city ||
    !postCode ||
    !Array.isArray(roles) ||
    !roles.length
  ) {
    return res.status(400).json({ message: "Some fields are mandatory" });
  }

  const duplicate = await User.findOne({ userName }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate Username" });
  }
  const hashedPWD = await bcrypt.hash(password, 10);
  const userObject = {
    userName,
    userEmail,
    password: hashedPWD,
    companyName,
    address,
    city,
    postCode,
    roles,
  };
  const user = await User.create(userObject);
  if (user) {
    return res.status(201).json({ message: `New user ${userName} created.` });
  } else {
    return res.status(400).json({ message: "Invalid user Data recieved." });
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const {
    id,
    userName,
    userEmail,
    companyName,
    address,
    city,
    postCode,
    roles,
    active,
  } = req.body;
  if (
    !id ||
    !userName ||
    !userEmail ||
    !password ||
    !companyName ||
    !city ||
    !address ||
    !postCode ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res.status(400).json({ message: "Some fields are mandatory" });
  }
  const user = await User.findById(id).exec();
  const duplicate = await User.findOne({ userName }).lean().exec();
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate Username" });
  }
  user.userName = userName;
  user.userEmail = userEmail;
  user.companyName = companyName;
  user.address = address;
  user.city = city;
  user.postCode = postCode;
  user.roles = roles;
  user.active = active;
  const updatedUser = await user.save();
  return res.json({ message: `${updatedUser.userName} updated` });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "user ID required" });
  }
  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: "No users found" });
  }
  const result = await user.deleteOne();
  const reply = `Username ${user.username} with ID ${user._id} deleted`;
  return res.json(reply);
});
