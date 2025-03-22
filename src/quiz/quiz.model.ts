import mongoose, { Schema } from "mongoose";
import { IQuiz } from "./quiz.types";

const QuizSchema = new Schema<IQuiz>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question", default: [] }],
  completions: { type: Number, default: 0 },
});


export const Quiz = mongoose.model<IQuiz>("Quiz", QuizSchema);
