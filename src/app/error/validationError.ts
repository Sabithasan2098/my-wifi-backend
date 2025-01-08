import mongoose from "mongoose";
import { TGenericErrorResponse } from "./zodError";
import { TErrorSourses } from "../middleware/globalErrorHandelar";

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  const statusCode = 400;

  const errorSourses: TErrorSourses = Object.values(err.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    }
  );
  return {
    statusCode,
    message: "Validation error",
    errorSourses,
  };
};
