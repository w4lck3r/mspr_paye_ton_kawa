const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/', clientsController.getAllClients);
// Other routes...

module.exports = router;
