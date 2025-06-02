import React, { useState } from "react";

const CampaignSender = ({ campaigns }) => {
  const [campaignId, setCampaignId] = useState("");

  const sendCampaign = async () => {
    if (!campaignId) {
      alert("Please select a campaign to send");
      return;
    }
    try {
      const res = await fetch(`http://localhost:8000/api/communication/send/${campaignId}`, {
        method: "POST",
      });
      const data = await res.json();
      alert(`Sent to ${data.logs.length} customers`);
    } catch (err) {
      alert("Failed to send campaign");
    }
  };

  return (
    
      <div className="max-w-lg mx-auto p-8 mt-12 bg-white rounded-2xl shadow-xl border border-gray-200">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">📤 Send Campaign</h2>
  <select
    value={campaignId}
    onChange={(e) => setCampaignId(e.target.value)}
    className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <option value="">Select Campaign</option>
    {campaigns.map((camp) => (
      <option key={camp._id} value={camp._id}>
        {camp.name}
      </option>
    ))}
  </select>

  <button
    onClick={sendCampaign}
    className="w-full py-3 text-lg font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
  >
    ✉️ Send
  </button>
</div>

  );
};

export default CampaignSender;



