import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaUniversity, FaExclamationCircle, FaCheckCircle, FaPhone, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const StudentSignup = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const [gender, setGender] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        college: '',
        rollNumber: '',
        email: '',
        mobile: '',
        countryCode: '+91',
        password: '',
        confirmPassword: '',
        agreedToTerms: false,
        // Step 3 fields
        educationLevel: '',
        fieldOfStudy: '',
        institutionName: '',
        startDate: '',
        endDate: '',
        grade: '',
        modeOfStudy: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setFormData({ ...formData, gender: selectedGender });
    };



    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="bg-primary text-white w-1/4 p-6">
                <h2 className="text-2xl font-bold mb-8">Signup Steps</h2>
                <ul className="space-y-6">
                    {['Basic Details', 'Contact Details', 'Education Details', 'Work Experience', 'Documents'].map((step, index) => (
                        <li
                            key={index}
                            className={`flex items-center space-x-3 ${currentStep === index + 1 ? 'text-secondary' : 'text-gray-400'}`}
                        >
                            <div
                                className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${currentStep === index + 1 ? 'bg-secondary' : 'bg-gray-500'
                                    }`}
                            >
                                {currentStep > index + 1 ? <FaCheckCircle /> : index + 1}
                            </div>
                            <span>{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Form Section */}
            <div className="w-3/4 bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-primary mb-4">
                    Step {currentStep}: {
                        currentStep === 1
                            ? 'Basic Details'
                            : currentStep === 2
                                ? 'Contact Details'
                                : currentStep === 3
                                    ? 'Education Details'
                                    : currentStep === 4
                                        ? 'Work Experience'
                                        : 'Documents'
                    }
                </h1>
                <p className="text-textDark mb-8">
                    {currentStep === 1
                        ? "Let’s get you started!"
                        : "Please provide the required information to proceed."}
                </p>

                {/* Form Content */}
                {currentStep === 1 && (
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-textDark font-medium mb-2">Middle Name</label>
                                <input
                                    type="text"
                                    name="middleName"
                                    placeholder="Middle Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.middleName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-textDark font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Date of Birth</label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                                        value={formData.dateOfBirth}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-textDark font-medium mb-2">Gender</label>
                                <div className="flex space-x-4">
                                    {['Male', 'Female', 'Other'].map((g) => (
                                        <button
                                            key={g}
                                            type="button"
                                            className={`p-3 w-full border border-gray-300 rounded-lg ${gender === g ? 'bg-secondary text-white' : ''}`}
                                            onClick={() => handleGenderSelect(g)}
                                        >
                                            {g}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-textDark font-medium mb-2">College</label>
                                <div className="relative">
                                    <FaUniversity className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="college"
                                        placeholder="Enter your college name"
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                                        value={formData.college}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Institute Roll Number</label>
                                <input
                                    type="text"
                                    name="rollNumber"
                                    placeholder="Enter your roll number"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.rollNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </form>
                )}
                {currentStep === 2 && (
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Email Address</label>
                                <div className="relative">
                                    <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-textDark font-medium mb-2">Mobile Number</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="countryCode"
                                        placeholder="Country Code"
                                        className="w-1/4 p-3 border border-gray-300 rounded-lg"
                                        value={formData.countryCode}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        className="w-3/4 p-3 border border-gray-300 rounded-lg"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-textDark font-medium mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </form>
                )}

                {currentStep === 3 && (
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Education Level</label>
                                <select
                                    name="educationLevel"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.educationLevel || ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Select your education level</option>
                                    <option value="Bachelors">Bachelor’s</option>
                                    <option value="Masters">Master’s</option>
                                    <option value="PhD">PhD</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-textDark font-medium mb-2">Field of Study</label>
                                <input
                                    type="text"
                                    name="fieldOfStudy"
                                    placeholder="Enter your field of study"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.fieldOfStudy || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Institution Name</label>
                                <input
                                    type="text"
                                    name="institutionName"
                                    placeholder="Enter your institution name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.institutionName || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block text-textDark font-medium mb-2">Mode of Study</label>
                                <select
                                    name="modeOfStudy"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.modeOfStudy || ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Select mode of study</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Distance Learning">Distance Learning</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.startDate || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block text-textDark font-medium mb-2">End Date (or Expected)</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={formData.endDate || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-textDark font-medium mb-2">Grade/CGPA (Optional)</label>
                            <input
                                type="text"
                                name="grade"
                                placeholder="Enter your grade or CGPA"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={formData.grade || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                )}


                {currentStep === 4 && (
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Work Experience</label>
                                <textarea
                                    placeholder="Describe your work experience"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>
                    </form>
                )}

                {currentStep === 5 && (
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div>
                                <label className="block text-textDark font-medium mb-2">Upload Documents</label>
                                <input
                                    type="file"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </form>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePreviousStep}
                            className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all"
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < 5 && (
                        <button
                            onClick={handleNextStep}
                            className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-all"
                        >
                            Save & Next
                        </button>
                    )}
                </div>

                {/* Attention Box */}
                {currentStep === 1 && (
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8">
                        <div className="flex items-center">
                            <FaExclamationCircle className="text-yellow-500 text-2xl mr-4" />
                            <h3 className="font-bold text-yellow-600">ATTENTION!!</h3>
                        </div>
                        <p className="text-yellow-600 mt-2">
                            Registering with an incorrect college can get you disqualified or blacklisted by companies.
                            Please ensure you select the correct college from the list.
                        </p>
                        <ul className="text-yellow-600 mt-2 list-disc pl-6">
                            <li>Do not choose a college you are not studying in.</li>
                            <li>Falsifying your college name may lead to disqualification.</li>
                        </ul>
                        <p className="text-yellow-600 mt-2">
                            Once selected, the college name cannot be changed after proceeding.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentSignup;

