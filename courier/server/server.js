/* Packages Import */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import { configDotenv } from "dotenv";
import morgan from "morgan";
/* Import Route Modules */
import vehicleRoutes from "./routes/vehicleRoutes.js";
import quotesRoutes from "./routes/quotesRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";

/* Configuration */

configDotenv();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */

app.use("/vehicles", vehicleRoutes);
app.use("/quotation", quotesRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

/* Mongoose and Server Setup */

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
  })
  .catch((error) => {
    console.log(`Did not able to connect with DB. Error: ${error}`);
  });
