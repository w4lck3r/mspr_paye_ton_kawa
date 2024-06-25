const Category = require('../models/categoryModel');

exports.getAllCategories = async () => {
  return await Category.find();
};

exports.getCategory = async (id) => {
  return await Category.findById(id);
};

exports.createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  await category.save();
  return category;
};

exports.updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};

exports.deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};
