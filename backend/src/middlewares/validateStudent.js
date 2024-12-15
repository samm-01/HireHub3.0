const validateStudentSignup = (req, res, next) => {
    const { fullName, email, password, dob, mobile, college, program, batch } = req.body;

    // Check for missing fields
    if (!fullName || !email || !password || !dob || !mobile || !college || !program || !batch) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate password length
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Validate mobile number format (example for 10-digit mobile numbers)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        return res.status(400).json({ message: 'Invalid mobile number format' });
    }

    next(); // Proceed to the next middleware or controller
};

module.exports = { validateStudentSignup };
