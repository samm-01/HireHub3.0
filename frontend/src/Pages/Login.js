import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5001/api/auth/login', { email, password });
            localStorage.setItem('jwtToken', response.data.token);
            navigate('/student-dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <div className="mb-4">
                    <div className="relative">
                        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-azure-blue"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <div className="relative">
                        <FaLock className="absolute top-3 left-3 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-azure-blue"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full p-3 bg-teal-800 text-white rounded-lg hover:bg-teal-700 focus:outline-none"
                >
                    Login
                </button>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate('/forgot-password')}
                        className="text-teal-800 hover:underline focus:outline-none"
                    >
                        Forgot Password?
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Don't have an account? </span>
                    <button
                        onClick={() => navigate('/student-signup')}
                        className="text-teal-800 hover:underline focus:outline-none"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
