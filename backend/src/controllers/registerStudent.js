const bcrypt = require('bcrypt');
const db = require('../../config/db'); // Correct Promise-based connection pool

const registerStudent = async (req, res) => {
    const { fullName, email, password, dob, mobile, college, program, batch } = req.body;

    try {
        if (!fullName || !email || !password || !dob || !mobile) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO student (fullName, email, password, dob, mobile, college, program, batch)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.query(sql, [fullName, email, hashedPassword, dob, mobile, college, program, batch]);

        return res.status(201).json({ message: 'Student registered successfully', studentId: result.insertId });
    } catch (error) {
        console.error('Error during student registration:', error);

        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Email already exists' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const [students] = await db.query('SELECT * FROM student');
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerStudent, getAllStudents };

