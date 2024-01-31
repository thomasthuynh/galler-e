import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from GALLER-E!" });
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(4000, (req, res) => {
      console.log("Server has started on port 4000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
