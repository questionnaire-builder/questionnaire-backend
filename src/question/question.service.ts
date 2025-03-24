import { Question } from "./question.model";
import { IQuestion } from "./question.types";

export class QuestionService {
  async createQuestion(questionData: IQuestion): Promise<IQuestion> {
    try {
      const question = new Question(questionData);
      return await question.save();
    } catch (error) {
      throw new Error(`Failed to create question: ${error}`);
    }
  }
}
