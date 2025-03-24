import { z } from "zod";
import mongoose from "mongoose";

const zodObjectId = z.string().refine((id) => mongoose.Types.ObjectId.isValid(id), {
  message: "Invalid ObjectId",
}).transform((id) => new mongoose.Types.ObjectId(id));

export const createQuestionDto = z.object({
  quizId: zodObjectId,
  text: z.string().min(5, "Question text must be at least 5 characters long"),
  type: z.enum(["text", "single_choice", "multiple_choice"]),
  options: z.array(z.string()).min(2, "At least two options are required").optional(),
}).refine((data) => {
  if (data.type !== "text") {
    return data.options !== undefined;
  }
  return true;
}, {
  message: "Options are required for single_choice and multiple_choice questions",
  path: ["options"],
});
