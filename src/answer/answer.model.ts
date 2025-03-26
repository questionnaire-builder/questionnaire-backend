import mongoose, { Schema } from "mongoose";
import { IAnswer } from "./answer.types";

const AnswerSchema = new Schema<IAnswer>({
  questionId: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  answer: { type: Schema.Types.Mixed, required: true },
});

export const Answer = mongoose.model<IAnswer>("Answer", AnswerSchema);
