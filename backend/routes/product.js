const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product');
const authenticateUser = require('../middleware/authMiddleware');


router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.showProduct);
router.get('/:id/reviews', authenticateUser, productCtrl.productReviews);


module.exports = router;