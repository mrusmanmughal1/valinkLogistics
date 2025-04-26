import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "All field are required " });
  }
  const founduser = await User.findOne({ userName }).exec();
  if (!founduser && founduser.active) {
    return res.status(400).json({ message: "Unauthorized" });
  }
  const match = bcrypt.compare(password, founduser.password);
  if (!match) return res.status(401).json({ message: "Unauthorized" });

  const accessToken = jwt.sign(
    {
      UserInfo: {
        userName: founduser.userName,
        roles: founduser.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "2m" }
  );
  const refreshToken = jwt.sign(
    { userName: founduser.userName },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "5m" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 10 * 60 * 1000,
  });

  res.json({ accessToken });
});

export const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const foundUser = await User.findOne({
        userName: decoded.userName,
      }).exec();

      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            userName: foundUser.userName,
            roles: foundUser.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2m" }
      );

      res.json({ accessToken });
    })
  );
});

export const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: "true" });
  res.json({ message: "Logout Successfuly" });
});
