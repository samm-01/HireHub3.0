// /src/middleware/auth.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwtConfig');

// Middleware to authenticate JWT token
const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }
        req.user = decoded; // Attach user data to request
        next();
    });
};

module.exports = { authenticate };
