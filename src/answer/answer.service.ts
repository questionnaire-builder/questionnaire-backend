import { Answer } from "./answer.model";
import { IAnswer } from "./answer.types";

export class AnswerService {
  async createAnswer(answerData: IAnswer): Promise<IAnswer> {
    try {
      const answer = new Answer(answerData);
      return await answer.save();
    } catch (error) {
      throw new Error(`Failed to create answer: ${error}`);
    }
  }
}
