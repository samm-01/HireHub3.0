import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaHome, FaUser, FaClipboardList, FaBook, FaCalendarAlt, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';
import Sidebar from '../components/StudentSidebar';


const JobProfiles = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch job data (replace with actual backend call or API later)
        const fetchJobs = async () => {
            const mockJobs = [
                {
                    id: 1,
                    title: 'Software Engineer',
                    company: 'Google',
                    location: 'California, USA',
                    eligibility: 'B.Tech, M.Tech',
                    deadline: '2024-12-31',
                },
                {
                    id: 2,
                    title: 'Project Manager',
                    company: 'Microsoft',
                    location: 'Redmond, USA',
                    eligibility: 'MBA, BBA',
                    deadline: '2024-12-25',
                },
                {
                    id: 3,
                    title: 'Data Analyst',
                    company: 'Amazon',
                    location: 'Bangalore, India',
                    eligibility: 'B.Sc, M.Sc',
                    deadline: '2024-12-28',
                },
            ];
            setJobs(mockJobs);
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}

            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header/Search Bar */}
                <header className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md mb-6">
                    <h1 className="text-2xl font-bold text-teal-800">Job Profiles</h1>
                    <input
                        type="text"
                        placeholder="Search by job title or company..."
                        className="mt-4 md:mt-0 p-3 border border-gray-300 rounded-lg w-full md:w-1/3"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </header>

                {/* Job List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold text-teal-800 mb-2">{job.title}</h2>
                            <p className="text-gray-600 mb-1">
                                <FaBriefcase className="inline-block mr-2 text-teal-800" />
                                {job.company}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <FaMapMarkerAlt className="inline-block mr-2 text-teal-800" />
                                {job.location}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <FaClock className="inline-block mr-2 text-teal-800" />
                                Application Deadline: {job.deadline}
                            </p>
                            <p className="text-gray-600 mb-4">Eligibility: {job.eligibility}</p>
                            <button className="bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {/* No Jobs Found */}
                {filteredJobs.length === 0 && (
                    <div className="text-center text-gray-600 mt-6">
                        No jobs found. Try searching for something else.
                    </div>
                )}
            </main>
        </div>
    );
};

export default JobProfiles;
