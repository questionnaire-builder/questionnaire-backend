import { Types } from "mongoose";

export interface IQuiz {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  questions?: Types.ObjectId[];
  completions?: number;
}
