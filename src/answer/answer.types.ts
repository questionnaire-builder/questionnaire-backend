import { Types } from "mongoose";

export interface IAnswer {
  _id?: Types.ObjectId;
  questionId: Types.ObjectId;
  answer: string | string[];
}
