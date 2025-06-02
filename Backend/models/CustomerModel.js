// models/Customer.js
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  totalSpend: Number,
  lastOrderDate: Date,
  visitCount: Number
});

export default mongoose.model("Customer", customerSchema);

