import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  name: String,
  objective: String,
  segment: String,
  channel: String,
  message: String,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: false },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: false },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model("Campaign", campaignSchema);
