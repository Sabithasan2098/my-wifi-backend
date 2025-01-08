import { model, Schema } from "mongoose";
import { TUser } from "./wifi.interface";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    unique: true,
  },
  macAddress: {
    type: String,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  holdUp: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  profileImg: {
    type: String,
  },
});

export const UserModel = model<TUser>("User", userSchema);
