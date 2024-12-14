// /src/config/jwtConfig.js

// You can store your JWT secret here
module.exports = {
    jwtSecret: process.env.JWT_SECRET,  // Replace with a strong secret key, ideally use environment variables
    jwtExpiration: '1h',  // Optional: set token expiration time (e.g., 1 hour)

};
