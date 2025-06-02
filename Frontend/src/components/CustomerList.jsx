import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/getAllCustomers");
        console.log("Fetched customer data:", res.data);
        setCustomers(res.data.customers || []);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Customers</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={cust._id || index}>
              <td className="border px-4 py-2">{cust.name}</td>
              <td className="border px-4 py-2">{cust.email}</td>
              <td className="border px-4 py-2">{cust.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;


