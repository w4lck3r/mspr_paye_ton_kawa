const InventoryService = require('../services/inventoryService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await InventoryService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await InventoryService.getProduct(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await InventoryService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await InventoryService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await InventoryService.deleteProduct(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
