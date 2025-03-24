import { Request, Response, Router } from "express";
import { QuestionService } from "./question.service";
import { createQuestionDto } from "./question.dto";
import { Quiz } from "@/quiz/quiz.model";

const router = Router();

const questionService = new QuestionService();

router.post("/", async (req: Request, res: Response) => {
  try {
    const validation = createQuestionDto.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ message: validation.error.errors });
      return;
    }

    const question = await questionService.createQuestion(validation.data);
    await Quiz.findByIdAndUpdate(validation.data.quizId, {
      $push: { questions: question._id }
    });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Failed to create question", error });
  }
});

export const questionRouter = router;
