import { ZodError, ZodIssue } from "zod";
import { TErrorSourses } from "../middleware/globalErrorHandelar";

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSourses: TErrorSourses;
};

export const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const statusCode = 400;
  const errorSourses: TErrorSourses = err.issues.map((issues: ZodIssue) => {
    return {
      path: issues?.path[issues.path.length - 1],
      message: issues?.message,
    };
  });
  return {
    statusCode,
    message: "Validation error",
    errorSourses,
  };
};
