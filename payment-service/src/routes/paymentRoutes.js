const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/payments', authMiddleware, paymentController.processPayment);
router.get('/payments', authMiddleware, paymentController.getAllPayments);
router.get('/payments/:id', authMiddleware, paymentController.getPayment);
router.patch('/payments/:id', authMiddleware, paymentController.updatePayment);
router.delete('/payments/:id', authMiddleware, paymentController.deletePayment);

module.exports = router;
