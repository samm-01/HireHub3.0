import React from 'react';
import Sidebar from '../components/StudentSidebar';


const StudentProfile = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <header className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h1 className="text-2xl font-bold text-teal-800">My Profile</h1>
                </header>

                {/* Profile Information */}
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-teal-800 mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-gray-600 font-medium">Full Name</p>
                            <p className="text-gray-800">John Doe</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Email</p>
                            <p className="text-gray-800">john.doe@example.com</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Mobile Number</p>
                            <p className="text-gray-800">+91 9876543210</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Date of Birth</p>
                            <p className="text-gray-800">1995-06-15</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 className="text-xl font-bold text-teal-800 mb-4">Academic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-gray-600 font-medium">College</p>
                            <p className="text-gray-800">ABC University</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Program</p>
                            <p className="text-gray-800">B.Tech in Computer Science</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Batch</p>
                            <p className="text-gray-800">2020 - 2024</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">CGPA</p>
                            <p className="text-gray-800">8.5</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 className="text-xl font-bold text-teal-800 mb-4">Work Experience</h2>
                    <p className="text-gray-600">No work experience added yet.</p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 className="text-xl font-bold text-teal-800 mb-4">Documents</h2>
                    <p className="text-gray-600">No documents uploaded yet.</p>
                </section>
            </main>
        </div>
    );
};

export default StudentProfile;
