import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentAuthPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic (e.g., send login request)
            navigate('/student-dashboard'); // Navigate to student dashboard after successful login
        } else {
            // Handle sign-up logic (e.g., send sign-up request)
            navigate('/student-dashboard'); // Navigate to student dashboard after successful sign-up
        }
    };

    return (
        <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-primary mb-8">
                {isLogin ? 'Login' : 'Sign Up'} as a Student
            </h1>

            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleFormSubmit}
            >
                <div className="mb-6">
                    <label className="block text-lg text-textDark">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg text-textDark">Password</label>
                    <input
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary text-lightGray py-3 px-6 rounded-lg w-full"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <div className="mt-4 text-center">
                    <span
                        className="text-primary cursor-pointer"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default StudentAuthPage;
