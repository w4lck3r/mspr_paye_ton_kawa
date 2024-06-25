const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/products', authMiddleware, inventoryController.getAllProducts);
router.get('/products/:id', authMiddleware, inventoryController.getProduct);
router.post('/products', authMiddleware, inventoryController.createProduct);
router.patch('/products/:id', authMiddleware, inventoryController.updateProduct);
router.delete('/products/:id', authMiddleware, inventoryController.deleteProduct);

module.exports = router;
