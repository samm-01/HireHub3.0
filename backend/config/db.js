// db.js
const mysql = require('mysql2/promise');
require('dotenv').config();


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Check if the connection is successful
// db.connect((err) => {
//     if (err) {
//         console.error('error connecting to the database:', err);
//     } else {
//         console.log('connected to the MySQL database');
//     }
// });

module.exports = db;
