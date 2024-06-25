const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/categories', authMiddleware, categoryController.getAllCategories);
router.get('/categories/:id', authMiddleware, categoryController.getCategory);
router.post('/categories', authMiddleware, categoryController.createCategory);
router.patch('/categories/:id', authMiddleware, categoryController.updateCategory);
router.delete('/categories/:id', authMiddleware, categoryController.deleteCategory);

module.exports = router;
