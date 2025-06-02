import Campaign from "../models/campaign_models.js";

export const createCampaign = async (req, res) => {
  try {
    const { name, objective, segment, channel, message, customerId, orderId } = req.body;
    const campaign = new Campaign({ name, objective, segment, channel, message, customerId, orderId });
    await campaign.save();
    res.status(201).json({ success: true, campaign });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to create campaign" });
  }
};


