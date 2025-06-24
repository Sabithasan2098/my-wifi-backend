import { TPayment } from "./payment.interface";
import { PaymentModel } from "./payment.model";
// get all payment---------->
export const getAllPaymentIntoDB = async () => {
  const result = await PaymentModel.find();
  return result;
};

// update a payment----------->
export const updatePaymentIntoDB = async (id: string, data: TPayment) => {
  const result = await PaymentModel.findByIdAndUpdate(
    { id },
    { $set: data },
    {
      new: true,
      upsert: true,
    }
  );
  return result;
};
