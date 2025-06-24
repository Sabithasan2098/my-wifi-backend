import mongoose from "mongoose";
import { TUser } from "./wifi.interface";
import { UserModel } from "./wifi.model";
import { error } from "console";
import { PaymentModel } from "../payment/payment.model";
import { TPayment } from "../payment/payment.interface";

// create a user------------------------------------->
export const createUserIntoDB = async (payload: TUser) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // step-1
    const newUser = await UserModel.create([payload], { session });
    if (!newUser.length) {
      throw new Error("user not create");
    }
    // step-2
    const paymentPayload: TPayment = {
      name: payload.name,
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    };
    const newPayment = await PaymentModel.create([paymentPayload], { session });
    if (!newPayment.length) {
      throw new Error("Payment not create");
    }

    await session.commitTransaction();
    await session.endSession();
    return { newUser, newPayment };
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

// get a user------------------------------------->
export const getUserIntoDB = async () => {
  const result = await UserModel.find();
  return result;
};

// get a user by id------------------------------------->
export const getUserByIdIntoDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};

// update a user by id------------------------------------->
export const updateUserByIdIntoDB = async (id: string, data: TUser) => {
  const result = await UserModel.findByIdAndUpdate(id, data);
  return result;
};
