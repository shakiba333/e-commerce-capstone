const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/order');
const authenticateUser = require('../middleware/authMiddleware');


router.post('/', authenticateUser, orderCtrl.placeOrder);
router.get('/myorders', authenticateUser, orderCtrl.getMyOrders);
router.get('/order/:id', authenticateUser, orderCtrl.getOrderById);



module.exports = router;