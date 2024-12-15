const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes.js');
const studentRoutes = require('./src/routes/studentRoutes.js')
const authRoutes = require('./src/routes/authRoutes.js')
const protectedRoutes = require('./src/routes/protectedRoutes.js');
const studentSignup = require('./src/routes/studentSignup.js');
const cors = require('cors');


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api', userRoutes);

// app.use('/api', protectedRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentSignup);

// 404 Middleware
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});
// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});


app.listen(5001, () => {
    console.log('Server running on port 5001');
});
