const express = require('express');
const { registerStudent, getAllStudents } = require('../controllers/registerStudent');
const { validateStudentSignup } = require('../middlewares/validateStudent');
const router = express.Router();

// POST /signup route with validation middleware
router.post('/signup', validateStudentSignup, registerStudent);
router.get('/all', getAllStudents);


module.exports = router;
