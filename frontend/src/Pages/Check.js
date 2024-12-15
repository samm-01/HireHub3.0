import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BasicForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        dob: '',
        mobile: '',
        college: '',
        program: '',
        batch: '',
    });

    const [responseMessage, setResponseMessage] = useState(null);
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage(null);

        try {
            const response = await axios.post('http://localhost:5001/api/students/signup', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                setResponseMessage('Student registered successfully!');
                setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
            }
        } catch (error) {
            setResponseMessage(
                error.response?.data?.message || 'Failed to register. Please try again.'
            );
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Basic Student Registration Form</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <div>
                    <label className="block text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Mobile</label>
                    <input
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">College</label>
                    <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Program</label>
                    <input
                        type="text"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Batch</label>
                    <input
                        type="text"
                        name="batch"
                        value={formData.batch}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"

                >
                    Submit
                </button>
            </form>
            {
                responseMessage && (
                    <div
                        className={`mt-4 p-3 rounded ${responseMessage.includes('successfully')
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                            }`}
                    >
                        {responseMessage}
                    </div>
                )
            }
        </div >
    );
};

export default BasicForm;
