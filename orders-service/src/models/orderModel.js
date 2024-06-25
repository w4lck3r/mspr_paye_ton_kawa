const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  productIds: [{ type: String, required: true }],
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
