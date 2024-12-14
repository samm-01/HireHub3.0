// /src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// POST route for user registration
router.post('/register', register);

// POST route for user login
router.post('/login', login);

module.exports = router;
