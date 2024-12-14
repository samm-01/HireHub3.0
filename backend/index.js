const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes.js');
const studentRoutes = require('./src/routes/studentRoutes.js')
const authRoutes = require('./src/routes/authRoutes.js')
const protectedRoutes = require('./src/routes/protectedRoutes.js')

app.use(express.json());

// Use routes
// app.use('/api', userRoutes);
app.use('/api', protectedRoutes);
app.use('/api/auth', authRoutes);


app.listen(5001, () => {
    console.log('Server running on port 5001');
});
