import { Request, Response, Router } from "express";
import { AnswerService } from "./answer.service";

const router = Router();

const answerService = new AnswerService();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { questionId, answer } = req.body;
    if (!questionId || !answer) {
      res.status(400).json({ message: "questionId and answer are required" });
      return;
    }

    const createdAnswer = await answerService.createAnswer({ questionId, answer });
    res.status(201).json(createdAnswer);
  } catch (error) {
    res.status(500).json({ message: "Failed to create answer", error });
  }
});

export const answerRouter = router;
