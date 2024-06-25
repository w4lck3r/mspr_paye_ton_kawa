const Product = require('../models/productModel');

exports.getAllProducts = async () => {
  return await Product.find().populate('category');
};

exports.getProduct = async (id) => {
  return await Product.findById(id).populate('category');
};

exports.createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

exports.updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
