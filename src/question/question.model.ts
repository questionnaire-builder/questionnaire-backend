import mongoose, { Schema } from "mongoose";
import { IQuestion } from "./question.types";

const QuestionSchema = new Schema<IQuestion>({
  quizId: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
  text: { type: String, required: true },
  type: { type: String, enum: ["text", "single_choice", "multiple_choice"], required: true },
  options: { type: [String], default: undefined },
});

export const Question = mongoose.model<IQuestion>("Question", QuestionSchema);
