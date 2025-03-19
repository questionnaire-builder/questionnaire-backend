import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

async function main() {
  app.use(express.json());

  app.listen(process.env.Port || 5000, () => {
    console.log("Server is running on port 5000");
  });
}

main();
