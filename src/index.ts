import dotenv from "dotenv";
import express from "express";
import { connectToDatabase } from "./db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

async function main() {
  app.use(express.json());

  await connectToDatabase();

  app.listen(PORT, () => {
    console.log("Server is running on port 5000");
  });
}

main();
