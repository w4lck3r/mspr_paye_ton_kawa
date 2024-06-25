const ProductService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await ProductService.getProduct(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await ProductService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
