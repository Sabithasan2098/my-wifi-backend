import express, { Request, Response, Router } from "express";
import {
  createUser,
  getAllUser,
  getAUser,
  updateAUser,
} from "./wifi.controller";
import { userValidation } from "./wifi.validation";
import { validateRequest } from "../../middleware/validation";

const router = express.Router();
// create user
router.post("/create-user", validateRequest(userValidation), createUser);
// get users
router.get("/get-users", getAllUser);
// get-single-user
router.get("/:id", getAUser);
// update-single-user
router.patch("/update/:id", updateAUser);

export const wifiRoutes = router;
