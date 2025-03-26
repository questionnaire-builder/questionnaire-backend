import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectToDatabase } from "./db";
import { quizRouter } from "./quiz/quiz.controller";
import { questionRouter } from "./question/question.controller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

async function main() {
  app.use(cors());
  app.use(express.json());

  await connectToDatabase();

  app.use("/api/quizzes", quizRouter);
  app.use("/api/questions", questionRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
