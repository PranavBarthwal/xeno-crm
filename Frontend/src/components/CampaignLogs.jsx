import { useState } from "react";
import API from "../Api";

const CampaignLogs = () => {
  const [campaignId, setCampaignId] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const res = await API.get(`/communication/logs/${campaignId}`);
      setLogs(res.data);
    } catch (err) {
      alert("Failed to fetch logs");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Campaign Logs</h2>

      <div className="flex gap-4 mb-6">
        <input
          placeholder="Campaign ID"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={fetchLogs}
          className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
        >
          Fetch Logs
        </button>
      </div>

      <ul className="space-y-3 max-h-64 overflow-y-auto">
        {logs.length === 0 && (
          <p className="text-gray-500 italic">No logs to display.</p>
        )}
        {logs.map((log) => (
          <li
            key={log._id}
            className="p-3 border border-gray-200 rounded-md hover:bg-indigo-50 transition-colors"
          >
            <span className="font-semibold">{log.customerId?.name || "Unknown Customer"}</span> —{" "}
            <span className="text-gray-700">{log.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignLogs;

