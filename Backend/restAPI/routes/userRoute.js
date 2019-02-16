const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.post('/signup/user', userCtrl.createUser)
router.post('/login/user', userCtrl.loginUser);

module.exports = router;