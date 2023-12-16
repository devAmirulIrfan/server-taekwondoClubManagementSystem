const express = require('express');
const adminLogin = require('../controllers/adminLoginController')

const router = express.Router();


router.post('/adminLogin', adminLogin.login);


module.exports = router;
