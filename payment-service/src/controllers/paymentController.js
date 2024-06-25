const PaymentService = require('../services/paymentService');
const nats = require('../pubsub/nats');

exports.processPayment = async (req, res) => {
  try {
    const payment = await PaymentService.processPayment(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPayment = async (req, res) => {
  try {
    const payment = await PaymentService.getPayment(req.params.id);
    res.json(payment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentService.getAllPayments();
    res.json(payments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await PaymentService.updatePayment(req.params.id, req.body);
    res.json(payment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    await PaymentService.deletePayment(req.params.id);
    res.json({ message: 'Payment deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
