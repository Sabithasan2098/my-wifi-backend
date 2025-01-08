import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { handleZodError } from "../error/zodError";
import { handleValidationError } from "../error/validationError";

export type TErrorSourses = {
  path: string | number;
  message: string;
}[];
export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  let errorSourses: TErrorSourses = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplefied = handleZodError(err);
    statusCode = simplefied?.statusCode;
    message = simplefied?.message;
    errorSourses = simplefied?.errorSourses;
  } else if (err?.name === "ValidationError") {
    // mongoose validation error
    const simplefied = handleValidationError(err);
    statusCode = simplefied?.statusCode;
    message = simplefied?.message;
    errorSourses = simplefied?.errorSourses;
  }
  res.status(statusCode).json({
    success: false,
    message: message,
    err: err,
    errorSourses,
  });
  next();
};
