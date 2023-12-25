const express = require('express');
const {protect} = require("../middleware/authMiddleware")
const {registerUser, loginUser, resetPassword} = require("../controller/userController")

const router = express.Router()

router.post('/register', registerUser);
router.post('/login',loginUser);

module.exports = router