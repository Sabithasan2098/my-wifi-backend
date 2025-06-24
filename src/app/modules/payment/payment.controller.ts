import { Request, Response } from "express";
import { getAllPaymentIntoDB, updatePaymentIntoDB } from "./payment.service";
import { createUserIntoDB } from "../wifi/wifi.service";

// get all payment------------------------>
export const getPayment = async (req: Request, res: Response) => {
  try {
    const result = await getAllPaymentIntoDB();
    res.status(200).json({
      success: true,
      message: "Get all data successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// post a payment------------------------>
export const postPayment = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await createUserIntoDB(data);
    res.status(200).json({
      success: true,
      message: "Post data successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// post a payment------------------------>
export const updateAPayment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updatePaymentIntoDB(id, data);
    res.status(200).json({
      success: true,
      message: "Update data successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
