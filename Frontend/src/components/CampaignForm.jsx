import React, { useState, useEffect } from "react";
import { createCampaign, fetchCustomers, fetchOrders } from "../Api";

const CampaignForm = ({ campaigns, setCampaigns }) => {
  const [formData, setFormData] = useState({
    name: "",
    objective: "",
    segment: "",
    channel: "",
    message: "",
    customerId: "",
    orderId: "",
  });
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const custRes = await fetchCustomers();
        setCustomers(custRes.data.customers);

        const orderRes = await fetchOrders();
        setOrders(orderRes.data.orders);
      } catch (error) {
        alert("Failed to fetch customers or orders");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createCampaign(formData);
      // Add new campaign to campaigns list
      setCampaigns([res.data.campaign, ...campaigns]);
      alert("Campaign created!");
      setFormData({
        name: "",
        objective: "",
        segment: "",
        channel: "",
        message: "",
        customerId: "",
        orderId: "",
      });
    } catch (error) {
      alert("Failed to create campaign");
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-2xl shadow-xl mt-14 border border-gray-200">
  <h2 className="text-4xl font-bold text-gray-800 mb-10 border-b pb-4">📣 Create a Campaign</h2>
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Input label="Campaign Name" id="name" value={formData.name} handleChange={handleChange} required />
    <Input label="Audience Segment" id="segment" value={formData.segment} handleChange={handleChange} required placeholder="e.g., spend > 10000 AND visits < 3" />
    <Textarea label="Objective" id="objective" value={formData.objective} handleChange={handleChange} required />
    <Textarea label="Message" id="message" value={formData.message} handleChange={handleChange} required />
    <Select label="Channel" id="channel" value={formData.channel} handleChange={handleChange} required options={["email", "sms", "push"]} />
    <Select label="Customer" id="customerId" value={formData.customerId} handleChange={handleChange} required options={customers.map(c => ({ value: c._id, label: c.name }))} />
    <Select label="Order" id="orderId" value={formData.orderId} handleChange={handleChange} required options={orders.map(o => ({ value: o._id, label: o.orderNumber }))} />
    <div className="md:col-span-2">
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 font-semibold text-lg rounded-lg transition-all duration-300 ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {loading ? "Creating..." : "🚀 Create Campaign"}
      </button>
    </div>
  </form>

  {/* History */}
  <div className="mt-14">
    <h3 className="text-2xl font-bold text-gray-700 mb-6 border-b pb-3">🕘 Campaign History</h3>
    {campaigns.length === 0 ? (
      <p className="text-gray-400 italic">No campaigns created yet.</p>
    ) : (
      <ul className="space-y-5">
        {campaigns.map((camp) => (
          <li key={camp._id} className="p-6 border border-gray-100 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">{camp.name}</h4>
            <p className="text-gray-600">{camp.objective}</p>
            <div className="text-sm text-gray-500 mt-2">🎯 Segment: {camp.segment}</div>
            <div className="text-sm text-gray-500">📡 Channel: {camp.channel}</div>
            <div className="mt-3 italic text-indigo-600 whitespace-pre-line">{camp.message}</div>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

        
  );
};

// Reusable Components (same as your code)

const Input = ({ label, id, value, handleChange, required = false, placeholder = "" }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">{label}</label>
    <input
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      required={required}
    />
  </div>
);

const Textarea = ({ label, id, value, handleChange, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">{label}</label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      rows={3}
      className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
      required={required}
    />
  </div>
);

const Select = ({ label, id, value, handleChange, required = false, options }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">{label}</label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      required={required}
      className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="" disabled>Select {label}</option>
      {options.map(opt =>
        typeof opt === "string" ? (
          <option key={opt} value={opt}>{opt}</option>
        ) : (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        )
      )}
    </select>
  </div>
);

export default CampaignForm;



