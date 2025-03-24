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

  async getAllQuizzes(): Promise<IQuiz[]> {
    try {
      return await Quiz.find();
    } catch (error) {
      console.error(error);
      throw new Error("Error while fetching quizzes");
    }
  }

  async deleteQuiz(quizId: string) {
    try {
      const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
      if (!deletedQuiz) throw new Error("Quiz not found");
      return deletedQuiz;
    } catch (error) {
      console.error(error);
      throw new Error("Error while deleting quiz");
    }
  }
}
