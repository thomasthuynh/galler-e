import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({message: "Hello from GALLER-E!"})
})

app.listen(4000, (req, res) => {
  console.log("Server has started on port 4000")
})