import React from 'react';
import { Link } from 'react-router-dom';

const StudentInfo = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            {/* Header Section */}
            <h1 className="text-4xl font-bold text-primary mt-8 mb-4">Welcome, Students!</h1>
            <p className="text-lg text-textDark text-center max-w-2xl mb-8">
                HireHub empowers students to build their career by providing tools for resume building,
                exploring job opportunities, and tracking applications seamlessly.
            </p>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="bg-white text-primary rounded-xl shadow-xl p-8 flex flex-col items-center">
                    <div className="text-6xl mb-4">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <h2 className="text-2xl font-bold">Explore Jobs</h2>
                    <p className="text-center mt-2 text-textDark">
                        Access a wide range of job opportunities tailored to your skills and interests.
                    </p>
                </div>

                <div className="bg-white text-primary rounded-xl shadow-xl p-8 flex flex-col items-center">
                    <div className="text-6xl mb-4">
                        <i className="fas fa-file-alt"></i>
                    </div>
                    <h2 className="text-2xl font-bold">Build Resumes</h2>
                    <p className="text-center mt-2 text-textDark">
                        Use our intuitive resume builder to create professional resumes in minutes.
                    </p>
                </div>

                <div className="bg-white text-primary rounded-xl shadow-xl p-8 flex flex-col items-center">
                    <div className="text-6xl mb-4">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h2 className="text-2xl font-bold">Track Applications</h2>
                    <p className="text-center mt-2 text-textDark">
                        Stay on top of your job applications with real-time tracking and updates.
                    </p>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-12 flex space-x-6">
                <Link
                    to="/login"
                    className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-all"
                >
                    Login
                </Link>
                <Link
                    to="/student-signup"
                    className="bg-secondary text-white py-3 px-6 rounded-lg hover:bg-accent transition-all"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default StudentInfo;
