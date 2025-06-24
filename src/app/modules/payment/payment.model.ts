import { model, Schema } from "mongoose";
import { TPayment } from "./payment.interface";

const paymentSchema = new Schema<TPayment>({
  name: {
    type: String,
    required: false,
  },
  january: { type: String, required: false },
  february: { type: String, required: false },
  march: { type: String, required: false },
  april: { type: String, required: false },
  may: { type: String, required: false },
  june: { type: String, required: false },
  july: { type: String, required: false },
  august: { type: String, required: false },
  september: { type: String, required: false },
  october: { type: String, required: false },
  november: { type: String, required: false },
  december: { type: String, required: false },
});

export const PaymentModel = model<TPayment>("Payment", paymentSchema);
