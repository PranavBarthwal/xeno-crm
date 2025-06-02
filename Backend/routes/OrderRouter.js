import express from "express";
import { createOrder,getAllOrders } from "../controllers/OrderController.js";

const router = express.Router();
router.post("/", createOrder);
router.get("/", getAllOrders);

export default router;
