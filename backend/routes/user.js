const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


//api/users/

router.post('/', userCtrl.registerUser);

module.exports = router;