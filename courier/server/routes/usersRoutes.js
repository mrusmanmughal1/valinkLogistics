import express from "express";
import {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";
const router = express.Router();
import { verifyJWT } from "../middleware/verifyJWT.js";

//router.use(verifyJWT);

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser)
  .patch(verifyJWT, updateUser)
  .delete(verifyJWT, deleteUser);

export default router;
