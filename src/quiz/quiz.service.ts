import { Quiz } from "./quiz.model";
import { IQuiz } from "./quiz.types";

export class QuizService {
  async createQuiz(quizData: IQuiz): Promise<IQuiz> {
    try {
      const quiz = new Quiz(quizData);
      return await quiz.save();
    } catch (error) {
      console.error(error);
      throw new Error("Error while creating quiz");
    }
  }
}
