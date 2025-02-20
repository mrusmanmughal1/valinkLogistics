import User from "../../models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

export const getAllUsers = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, active, roles } = req.query;
  const query = {};
  if (active !== undefined) query.active = active === "true";
  if (roles) query.roles = { $elemMatch: { role: roles } };
  const users = await User.find(query)
    .select("-password")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();
  const totalUsers = await User.countDocuments(query);
  if (!users.length) {
    return res.status(404).json({ message: "No users found" });
  }
  res.json({
    totalUsers,
    page: Number(page),
    limit: Number(limit),
    users,
  });
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
    phoneNumber,
    roles,
  } = req.body;

  // Validate required fields
  if (!userName || !userEmail || !password || !roles?.length) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  const duplicateEmail = await User.findOne({ userEmail }).lean().exec();
  if (duplicateEmail) {
    return res.status(409).json({ message: "Email already in use" });
  }

  // Hash password
  const hashedPWD = await bcrypt.hash(password, 10);

  const userObject = {
    userName,
    userEmail,
    password: hashedPWD,
    companyName,
    address,
    city,
    postCode,
    phoneNumber,
    roles,
  };

  const user = await User.create(userObject);

  if (user) {
    return res.status(201).json({ message: `New user ${userName} created.` });
  } else {
    return res.status(400).json({ message: "Invalid user data received." });
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id, ...updateData } = req.body;

  // Validate ID and updateData presence
  if (!id || !Object.keys(updateData).length) {
    return res
      .status(400)
      .json({ message: "ID and fields to update are required" });
  }

  // Handle duplicate email check only if email is being updated
  if (updateData.userEmail) {
    const duplicateEmail = await User.findOne({
      userEmail: updateData.userEmail,
    })
      .lean()
      .exec();
    if (duplicateEmail && duplicateEmail._id.toString() !== id) {
      return res.status(409).json({ message: "Email already in use" });
    }
  }

  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Hash password if it's being updated
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }

  // Update user document
  Object.assign(user, updateData);
  const updatedUser = await user.save();

  return res.json({ message: `${updatedUser.userName} updated successfully` });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID required" });
  }

  const user = await User.findById(id).exec();
  if (!user) {
    return res.json({
      message: `User with ID ${id} not found. Assuming already deleted.`,
    }); // Idempotent
  }

  await user.deleteOne();

  res.json({ message: `User ${user.userName} with ID ${user._id} deleted` });
});
