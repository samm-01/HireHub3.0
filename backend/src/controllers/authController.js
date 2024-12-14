// /src/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const { jwtSecret } = require("../../config/jwtConfig"); // Make sure you have this

// Register user
const register = async (req, res) => {
    const { email, username, password, role } = req.body;

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        const query = 'INSERT INTO Users (email, username, password, role) VALUES (?, ?, ?, ?)';
        db.query(query, [email, username, hashedPassword, role], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }
            return res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Login user
const login = async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const query = 'SELECT * FROM Users WHERE email = ?';
    db.query(query, [email], async (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        // Check if user exists
        if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = result[0]; // The first (and only) result
        // Compare the provided password with the stored hash
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user.id, role: user.role },
            jwtSecret,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token });
    });
};

module.exports = { register, login };
