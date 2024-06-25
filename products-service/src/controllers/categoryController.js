const CategoryService = require('../services/categoryService');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await CategoryService.getCategory(req.params.id);
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await CategoryService.updateCategory(req.params.id, req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await CategoryService.deleteCategory(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
