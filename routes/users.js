var express = require('express');
var router = express.Router();
const registerController = require('../controller/registerController')
const logincontroller=require('../controller/logincontroller')
const forgotPswcontroller=require('../controller/forgotpswcontroller')

/* GET users listing. */
router.post('/register',registerController.handleregister);
router.post('/login',logincontroller.handlelogin);
router.post('/forgotpassword',forgotPswcontroller.handleforgotpassword)




module.exports = router;
