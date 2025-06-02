import React, { useEffect, useState } from "react";
import axios from "axios";

const CommunicationLogPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/communication/logs/all");
        setLogs(res.data);
      } catch (err) {
        console.error("Error fetching logs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-10 bg-white shadow-xl rounded-2xl border border-gray-200">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">📚 Communication Logs</h2>
  {loading ? (
    <p className="text-gray-500">Fetching logs...</p>
  ) : logs.length === 0 ? (
    <p className="text-gray-400 italic">No logs found.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg border border-gray-300 shadow-sm">
        <thead className="bg-indigo-50 text-indigo-700">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Campaign</th>
            <th className="px-6 py-3 text-left font-semibold">Recipient</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Time</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 divide-y divide-gray-100">
          {logs.map((log) => (
            <tr key={log._id}>
              <td className="px-6 py-4">{log.campaignId?.name || "N/A"}</td>
              <td className="px-6 py-4">
                {log.customerId?.name || "N/A"}<br />
                <span className="text-sm text-gray-500">{log.customerId?.email || "N/A"}</span>
              </td>
              <td className="px-6 py-4">{log.status}</td>
              <td className="px-6 py-4">{new Date(log.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default CommunicationLogPage;


