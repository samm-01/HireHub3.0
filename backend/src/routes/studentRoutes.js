const express = require("express");
const router = express.Router();
const db = require('../../config/db');  // Import the database connection

// Fetch student by ID
router.get("/students/:id", async (req, res) => {
    const studentId = req.params.id;
    try {
        const [student] = await db.query("SELECT * FROM Students WHERE id = ?", [studentId]);
        if (!student) return res.status(404).json({ error: "Student not found" });
        res.json(student);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
