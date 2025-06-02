import express from "express";
import {createCustomer, getAllCustomers } from "../controllers/CustomerController.js";

const router = express.Router();


router.post("/", createCustomer);
router.get("/", getAllCustomers);

export default router;
