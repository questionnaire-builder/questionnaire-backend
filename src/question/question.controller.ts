import { Request, Response, Router } from "express";
import { QuestionService } from "./question.service";
import { createQuestionDto } from "./question.dto";
import { Quiz } from "../quiz/quiz.model";

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

router.get("/:quizId", async (req: Request, res: Response) => {
  try {
    const { quizId } = req.params;
    const questions = await questionService.getQuestionsByQuizId(quizId);
    if (!questions || questions.length === 0) {
      res.status(404).json({ message: "No questions found for this quiz" });
      return;
    }

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch questions", error });
  }
});

export const questionRouter = router;
