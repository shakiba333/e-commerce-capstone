const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product');
const authenticateUser = require('../middleware/authMiddleware');
const checkObjectId = require('../middleware/checkObjectId')

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.showProduct);
// router.post('/:id', authenticateUser, checkObjectId, productCtrl.productReviews)
router.post('/:id/reviews', authenticateUser, checkObjectId, productCtrl.productReviews)

//checkObjectId

module.exports = router;

