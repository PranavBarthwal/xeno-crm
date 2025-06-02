import Customer from "../models/CustomerModel.js";

export const createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ success: true, customer });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to create customer" });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({ success: true, customers });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch customers" });
  }
};

