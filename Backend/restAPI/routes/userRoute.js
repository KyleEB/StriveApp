const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.post('/signup/user', userCtrl.createUser)
router.post('/login/user', userCtrl.loginUser);
router.post('/changepassword/user', userCtrl.changePassword);
router.post('/updatecards/user', userCtrl.updateCards);
router.post('/subscribe/user', userCtrl.updateSubscribed);
router.post('/get/users', userCtrl.getAllUsers);
module.exports = router;