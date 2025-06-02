import React, { useState, useEffect } from "react";
import API from "../Api";

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    orderNumber: "",
    customerId: "",
    amount: "",
    date: "",
  });

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all customers on mount
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await API.get("/getAllCustomers");
        setCustomers(res.data.customers || []);
      } catch (err) {
        console.error("Error fetching customers", err);
      }
    };

    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/createOrder", orderData);
      alert("Order created successfully!");
      setOrderData({ orderNumber: "", customerId: "", amount: "", date: "" });
    } catch (error) {
      alert("Failed to create order");
    } finally {
      setLoading(false);
    }
  };

  return (
    
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Create Order</h2>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">Order Number</label>
        <input
          id="orderNumber"
          name="orderNumber"
          value={orderData.orderNumber}
          onChange={handleChange}
          required
          placeholder="Order #12345"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">Customer</label>
        <select
          id="customerId"
          name="customerId"
          value={orderData.customerId}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select a customer</option>
          {customers.map((cust) => (
            <option key={cust._id} value={cust._id}>
              {cust.name} ({cust.email})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={orderData.amount}
          onChange={handleChange}
          required
          placeholder="Order amount"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={orderData.date}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 font-semibold rounded-md text-white transition duration-300 ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Creating..." : "Create Order"}
      </button>
    </form>
  </div>
</div>

            

       
  );
};

export default CreateOrder;


