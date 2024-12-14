import React from 'react';
import { FaHome, FaBriefcase, FaUser, FaClipboardList, FaBook, FaCalendarAlt, FaFileAlt, FaBell, FaQuestionCircle } from 'react-icons/fa';

const StudentDashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-teal-800 text-white p-6 space-y-6">
                <h2 className="text-2xl font-bold mb-6">HireHub</h2>
                <nav className="space-y-4">
                    <a href="/home" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaHome />
                        <span>Home</span>
                    </a>
                    <a href="/job-profiles" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaBriefcase />
                        <span>Job Profiles</span>
                    </a>
                    <a href="/my-profile" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaUser />
                        <span>My Profile</span>
                    </a>
                    <a href="/interviews" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaClipboardList />
                        <span>Interviews</span>
                    </a>
                    <a href="/assessments" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaBook />
                        <span>Assessments</span>
                    </a>
                    <a href="/events" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaCalendarAlt />
                        <span>Events</span>
                    </a>
                    <a href="/resume" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaFileAlt />
                        <span>Resume</span>
                    </a>
                    <a href="/help" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
                        <FaQuestionCircle />
                        <span>Help</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-teal-800">Home</h1>
                    <div className="flex items-center space-x-4">
                        <FaBell className="text-gray-500 hover:text-teal-800 cursor-pointer" />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </header>

                {/* Job Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-teal-800 mb-2">
                                Open for applications - Job Title {item}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Applications are now being accepted for a project manager position. Eligible students can find the job profile under Job Profiles.
                            </p>
                            <a
                                href="#"
                                className="text-teal-800 hover:underline"
                            >
                                See More
                            </a>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default StudentDashboard;
