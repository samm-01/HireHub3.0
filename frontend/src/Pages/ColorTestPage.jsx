// src/pages/ColorTestPage.js
import React from 'react';

const ColorTestPage = () => {
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-center text-3xl font-semibold">Color Palette Test</h1>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {/* Dark Blue/Teal */}
                <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center font-bold">Primary - Dark Blue/Teal</h2>
                    <p className="text-center">#1A202C</p>
                </div>

                {/* Light Green */}
                <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center font-bold">Secondary - Light Green</h2>
                    <p className="text-center">#48BB78</p>
                </div>

                {/* Azure Blue */}
                <div className="bg-accent text-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center font-bold">Accent - Azure Blue</h2>
                    <p className="text-center">#3182CE</p>
                </div>

                {/* Dark Gray */}
                <div className="bg-textDark text-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center font-bold">Text - Dark Gray</h2>
                    <p className="text-center">#2D3748</p>
                </div>

                {/* Light Gray */}
                <div className="bg-textLight text-dark p-8 rounded-lg shadow-lg">
                    <h2 className="text-center font-bold">Text - Light Gray</h2>
                    <p className="text-center">#E2E8F0</p>
                </div>

                {/* Light Gray Background */}
                <div className="bg-lightGray text-dark p-8 rounded-lg shadow-lg">
                    <h2 className="text-center font-bold">Light Gray Background</h2>
                    <p className="text-center">#F7FAFC</p>
                </div>
            </div>

            <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-green-600">
                Apply Now
            </button>
            <a href="#" className="text-secondary hover:text-green-600">Learn More</a>
            <br></br>
            <label className="text-secondary">Your Name</label>
            <input type="text" className="border-2 border-secondary focus:ring-2 focus:ring-secondary p-2 rounded-md" />
            <br></br>
            <div className="bg-secondary text-white p-4 rounded-lg">
                <p>Job posting successful!</p>
            </div>
            <nav className="flex space-x-6">
                <a href="#" className="text-gray-800 hover:text-secondary">Home</a>
                <a href="#" className="text-gray-800 hover:text-secondary">Jobs</a>
                <a href="#" className="text-gray-800 hover:text-secondary">Profile</a>
            </nav>
            <div className="p-6 border-l-4 border-secondary">
                <p>Job Seeker Dashboard</p>
            </div>
            <div className="hover:bg-secondary hover:text-white p-6 rounded-lg">
                <p>Hover over me</p>
            </div>
            <h2 className="text-secondary text-2xl font-semibold">Recent Jobs</h2>
            <hr className="border-secondary" />

        </div>
    );
}

export default ColorTestPage;
