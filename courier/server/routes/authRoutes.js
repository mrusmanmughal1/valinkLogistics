import express from "express";
import { login, refresh, logout } from "../controllers/auth/authController.js";
import { requestLimiter } from "../middleware/requestLimiter.js";
const router = express.Router();

router.route("/").post(requestLimiter, login);
router.route("/refresh").get(refresh);
router.route("/logout").post(logout);

export default router;
