import { Types } from "mongoose";

export interface IQuestion {
  _id?: Types.ObjectId;
  quizId: Types.ObjectId;
  text: string;
  type: "text" | "single_choice" | "multiple_choice";
  options?: string[];
}
