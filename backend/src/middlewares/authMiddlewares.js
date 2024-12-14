// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwtConfig.js'); // Import the JWT secret

// JWT verification middleware
const authenticateToken = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    // If no token is provided, send a 401 Unauthorized response
    if (!token) {
        return res.status(401).json({ error: 'Access denied, token required' });
    }

    // Verify the token using the JWT secret
    jwt.verify(token, jwtConfig.jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' }); // Token is invalid
        }
        req.user = user;  // Attach the user information from the token to the request object
        next();  // Proceed to the next middleware or route handler
    });
};

module.exports = authenticateToken;
