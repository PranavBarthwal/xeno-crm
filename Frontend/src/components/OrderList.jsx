import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/getAllOrders");
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    const fetchCustomers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/getAllCustomers");
        setCustomers(res.data.customers || []);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    };

    fetchOrders();
    fetchCustomers();
  }, []);

  const customerMap = customers.reduce((acc, customer) => {
    acc[customer._id] = customer.name;
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Order No</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border px-4 py-2">{order._id}</td>
              <td className="border px-4 py-2">{customerMap[order.customerId] || "Unknown"}</td>
              <td className="border px-4 py-2">₹{order.amount}</td>
              <td className="border px-4 py-2">
                {new Date(order.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;


