// routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddlewares');

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Access granted', user: req.user });
});

module.exports = router;
