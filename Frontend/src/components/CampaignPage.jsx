import React, { useState } from "react";
import CampaignForm from "./CampaignForm";
import CampaignSender from "./CampaignSender";

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <CampaignForm campaigns={campaigns} setCampaigns={setCampaigns} />
      <CampaignSender campaigns={campaigns} />
    </div>
  );
};

export default CampaignPage;
