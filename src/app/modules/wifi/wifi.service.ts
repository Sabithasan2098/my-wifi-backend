import { TUser } from "./wifi.interface";
import { UserModel } from "./wifi.model";

// create a user------------------------------------->
export const createUserIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
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
