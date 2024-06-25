const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/products', authMiddleware, productController.getAllProducts);
router.get('/products/:id', authMiddleware, productController.getProduct);
router.post('/products', authMiddleware, productController.createProduct);
router.patch('/products/:id', authMiddleware, productController.updateProduct);
router.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
