import express from "express";
import { sendCampaign, getAllLogs } from "../controllers/ComunicationController.js";

const router = express.Router();

router.post("/send/:campaignId", sendCampaign);
router.get("/logs/all", getAllLogs);

export default router;

