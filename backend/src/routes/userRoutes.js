// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../../config/db');  // Import the database connection

// Example route to fetch users
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send('Server Error');
        }
        res.json(results);
    });
    db.query('SELECT 1', (err, results) => {
        if (err) {
            console.error('Error running test query:', err);
        } else {
            console.log('Test query results:', results); // Should return an array with the value [ { '1': 1 } ]
        }
    });
});
router.get('/test-db', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return res.status(500).send('Database connection failed');
        }
        res.status(200).send('Database connection successful');
    });
});

module.exports = router;
