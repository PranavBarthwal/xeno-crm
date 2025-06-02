// routes/campaignRoutes.js
import express from 'express';
import { createCampaign } from '../controllers/CampaignController.js';

const router = express.Router();


router.post('/create', createCampaign);  // use CampaignController here

export default router;

