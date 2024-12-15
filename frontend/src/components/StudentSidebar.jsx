import React from 'react';
import { FaHome, FaBriefcase, FaUser, FaClipboardList, FaBook, FaCalendarAlt, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const handleLogout = () => {
        // Clear any stored data (like JWT tokens) and redirect to login
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userData');
        window.location.href = '/login';
    };

    return (
        <aside className="w-1/4 bg-teal-800 text-white p-6 flex flex-col justify-between">
            {/* Top Section */}
            <div>
                <h2 className="text-2xl font-bold mb-6 cursor-pointer" onClick={() => window.location.href = '/'}>HireHub</h2>
                <div className="flex items-center space-x-4 mb-6">
                    <img
                        src="https://via.placeholder.com/40" // Replace with user's profile image URL
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    <span className="text-lg font-medium">John Doe</span> {/* Replace with dynamic user name */}
                </div>
                <nav className="space-y-4">
                    <a href="/student-dashboard" className="flex items-center space-x-3 hover:bg-teal-700 p-2 rounded-lg">
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
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 hover:bg-red-600 bg-red-500 p-2 rounded-lg justify-center w-full"
                    >
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </nav>
            </div>

            {/* Bottom Section
            <div>
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 hover:bg-red-600 bg-red-500 p-2 rounded-lg w-full justify-center mt-6"
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div> */}
        </aside>
    );
};

export default Sidebar;
