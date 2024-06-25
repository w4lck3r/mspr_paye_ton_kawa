const Payment = require('../models/paymentModel');

exports.processPayment = async (paymentData) => {
  const payment = new Payment(paymentData);
  await payment.save();
  return payment;
};

exports.getPayment = async (id) => {
  return await Payment.findById(id);
};

exports.getAllPayments = async () => {
  return await Payment.find();
};

exports.updatePayment = async (id, paymentData) => {
  return await Payment.findByIdAndUpdate(id, paymentData, { new: true });
};

exports.deletePayment = async (id) => {
  return await Payment.findByIdAndDelete(id);
};
