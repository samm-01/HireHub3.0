import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from backend here
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-semibold text-gray-800">Profile</h2>
                {userData ? (
                    <div className="mt-8 text-gray-700">
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        {/* Add other fields to display */}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
