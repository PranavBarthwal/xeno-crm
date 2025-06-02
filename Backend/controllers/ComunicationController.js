import Campaign from "../models/campaign_models.js";
import Customer from "../models/CustomerModel.js";
import CommunicationLog from "../models/CommunicationLog.js";

export const sendCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;

    // Find campaign
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) return res.status(404).json({ error: "Campaign not found" });

    // Get all customers to send campaign to
    const customers = await Customer.find({});
    if (customers.length === 0) return res.status(404).json({ error: "No customers found" });

    const logs = [];

    // Simulate sending campaign and create logs
    for (const customer of customers) {
      // Replace this with actual sending logic (email/SMS etc)
      const log = new CommunicationLog({
        campaignId: campaign._id,
        customerId: customer._id,
        status: "SENT",
        message: `Campaign "${campaign.name}" sent to ${customer.name}`,
      });
      await log.save();
      logs.push(log);
    }

    res.status(200).json({ message: "Campaign sent", logs });
  } catch (error) {
    console.error("Error sending campaign:", error);
    res.status(500).json({ error: "Server error sending campaign" });
  }
};

export const getAllLogs = async (req, res) => {
  try {
    // Get all logs and populate campaign and customer info
    const logs = await CommunicationLog.find()
      .populate("campaignId", "name")
      .populate("customerId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ error: "Server error fetching communication logs" });
  }
};
