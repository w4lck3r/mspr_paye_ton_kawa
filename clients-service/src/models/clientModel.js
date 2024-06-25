const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  familyName: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);
