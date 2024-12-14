import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBriefcase, FiBook, FiUser } from 'react-icons/fi';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleSelection = (role) => {
        if (role === 'student') {
            navigate('/student-info'); // Navigate to the student-specific page
        } else {
            navigate(`/${role}`); // Navigate to other modules directly
        }
    };

    return (
        <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-primary mb-8">Welcome to HireHub</h1>
            <p className="text-lg text-textDark mb-12 text-center">
                Choose your role to proceed:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Employer Option */}
                <div
                    className="bg-white text-primary rounded-xl shadow-xl p-12 flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all"
                    onClick={() => handleSelection('employer')}
                >
                    <div className="text-6xl mb-6">
                        <FiBriefcase />
                    </div>
                    <h2 className="text-2xl font-bold">Employer</h2>
                    <p className="text-center mt-4 text-textDark">
                        Post jobs, manage applicants, and find the best talent for your organization.
                    </p>
                </div>

                {/* University Option */}
                <div
                    className="bg-white text-primary rounded-xl shadow-xl p-12 flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all"
                    onClick={() => handleSelection('university')}
                >
                    <div className="text-6xl mb-6">
                        <FiBook />
                    </div>
                    <h2 className="text-2xl font-bold">University</h2>
                    <p className="text-center mt-4 text-textDark">
                        Manage student profiles, placement statistics, and collaborations.
                    </p>
                </div>

                {/* Student Option */}
                <div
                    className="bg-white text-primary rounded-xl shadow-xl p-12 flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all"
                    onClick={() => handleSelection('student')}
                >
                    <div className="text-6xl mb-6">
                        <FiUser />
                    </div>
                    <h2 className="text-2xl font-bold">Student</h2>
                    <p className="text-center mt-4 text-textDark">
                        Explore jobs, build your resume, and track your applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
