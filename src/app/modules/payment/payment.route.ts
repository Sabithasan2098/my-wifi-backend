import express from "express";

import { validateRequest } from "../../middleware/validation";
import { paymentValidation } from "./payment.validation";
import { getPayment, postPayment } from "./payment.controller";

const router = express.Router();
// update payment
router.patch("/update-payment/:id", validateRequest(paymentValidation));
// get payment
router.get("/get-payment", getPayment);
// post payment
router.post("/post-payment", validateRequest(paymentValidation), postPayment);

export const paymentRoutes = router;
