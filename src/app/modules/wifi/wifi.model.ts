import { model, Schema } from "mongoose";
import { TUser } from "./wifi.interface";
import { boolean } from "zod";

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
  payment: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
userSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
userSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const UserModel = model<TUser>("User", userSchema);
