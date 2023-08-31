const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const authenticateUser = require('../middleware/authMiddleware')
//api/users/

router.post('/', userCtrl.registerUser);
router.post('/login', userCtrl.loginUser);
router.post('/logout', userCtrl.logoutUser);
router.get('/profile', authenticateUser, userCtrl.getUserProfile);


module.exports = router;