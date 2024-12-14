import React from 'react';

const Jobs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-semibold text-gray-800">Job Listings</h2>
                <p className="mt-4 text-gray-600">
                    Here you can view and apply to jobs posted by employers.
                </p>
                <div className="mt-8">
                    <button className="bg-teal-800 text-white p-3 rounded-lg hover:bg-teal-700">
                        View Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
