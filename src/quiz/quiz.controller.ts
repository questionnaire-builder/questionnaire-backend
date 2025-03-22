import { Request, Response, Router } from "express";
import { QuizService } from "./quiz.service";

const router = Router();

const quizService = new QuizService();

router.post("/", async (req: Request, res: Response) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ message: "Name and description are required" });
    return;
  }
  const quiz = await quizService.createQuiz(req.body);
  res.status(200).json(quiz);
});

export const quizRouter = router;
