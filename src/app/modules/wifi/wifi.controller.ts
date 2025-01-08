import { Request, Response } from "express";
import {
  createUserIntoDB,
  getUserByIdIntoDB,
  getUserIntoDB,
  updateUserByIdIntoDB,
} from "./wifi.service";

// create a user------------->
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: "created user successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// get all user------------->
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await getUserIntoDB();
    res.status(200).json({
      success: true,
      message: "get users successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// get a user------------->
export const getAUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await getUserByIdIntoDB(id);
    res.status(200).json({
      success: true,
      message: "get user successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// update a user------------->
export const updateAUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body.user;
    const result = await updateUserByIdIntoDB(id, data);
    res.status(200).json({
      success: true,
      message: "get user successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
