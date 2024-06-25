const OrdersService = require('../services/ordersService');
const nats = require('../pubsub/nats');
exports.getAllOrders = async (req, res) => {
  const orders = await OrdersService.getAllOrders();
  res.json(orders);
};

exports.getOrderById = async (req, res) => {
  const order = await OrdersService.getOrderById(req.params.id);
  res.json(order);
};

exports.createOrder = async (req, res) => {
  const order = await OrdersService.createOrder(req.body);
  res.json(order);
};

exports.updateOrder = async (req, res) => {
  const order = await OrdersService.updateOrder(req.params.id, req.body);
  res.json(order);
};

exports.deleteOrder = async (req, res) => {
  const order = await OrdersService.deleteOrder(req.params.id);
  res.json(order);
};
