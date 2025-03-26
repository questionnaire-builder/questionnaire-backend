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

router.get("/", async (req: Request, res: Response) => {
  const quizzes = await quizService.getAllQuizzes();
  res.status(200).json(quizzes);
});

router.delete("/:quizId", async (req: Request, res: Response) => {
  const { quizId } = req.params;
  if (!quizId) {
    res.status(400).json({ message: "Quiz id not found" });
    return;
  }
  const deletedQuiz = await quizService.deleteQuiz(quizId);
  res.status(200).json(deletedQuiz);
});

router.get("/:quizId", async (req: Request, res: Response) => {
  const { quizId } = req.params;
  if (!quizId) {
    res.status(400).json({ message: "Quiz id not found" });
    return;
  }
  const quiz = await quizService.getQuizById(quizId);
  res.status(200).json(quiz);
});

export const quizRouter = router;
