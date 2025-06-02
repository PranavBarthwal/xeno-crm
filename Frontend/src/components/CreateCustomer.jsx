import React, { useState } from "react";
import API from "../Api";

const CreateCustomer = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/createCustomer", customerData); 
      console.log(customerData);

      alert("Customer created successfully!");
      setCustomerData({ name: "", email: "", phone: "" });
    } catch (error) {
      alert("Failed to create customer");
    } finally {
      setLoading(false);
    }
  };

  return (
   
           <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Create Customer</h2>

    <form onSubmit={handleSubmit} className="space-y-5">
      {["name", "email", "phone"].map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
            {field}
          </label>
          <input
            id={field}
            name={field}
            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
            value={customerData[field]}
            onChange={handleChange}
            placeholder={field === "phone" ? "+1 (555) 555-5555" : `Enter ${field}`}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 font-semibold rounded-md text-white transition duration-300 ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Creating..." : "Create Customer"}
      </button>
    </form>
  </div>
</div>

  );
};

export default CreateCustomer;

