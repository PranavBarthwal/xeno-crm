import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import campaignRoutes from "./routes/CampaignRoutes.js";
import dataRoutes from "./routes/DataRoutes.js"; // <-- Added for customers & orders
import communicationRoutes from "./routes/CommunicationRoutes.js"; // <-- Added for sending/logging
import customerRoutes from "./routes/CustomerRoute.js";
import orderRoutes from "./routes/OrderRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/createCustomer", customerRoutes );
app.use("/api/getAllCustomers", customerRoutes );
app.use("/api/createOrder", orderRoutes);
app.use("/api/getAllOrders", orderRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/data", dataRoutes); // POST /customers, /orders

app.use("/api/communication", communicationRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));

