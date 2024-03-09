import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

import cookieParser from "cookie-parser";



const app = express();

dotenv.config();
app.use(cookieParser());


app.use(express.json());

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    


  })
  .catch((error) => console.log(`${error} did not connect`));


  app.use(
    cors({
      origin: ["http://localhost:3001"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

app.use("/", authRoutes);