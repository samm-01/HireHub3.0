import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-primary text-lightGray p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-lightGray">
                    HireHub
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        to="/contact-sales"
                        className="text-lg hover:text-secondary transition-all"
                    >
                        Contact Sales
                    </Link>
                    <Link
                        to="/student-help"
                        className="text-lg hover:text-secondary transition-all"
                    >
                        Student Help
                    </Link>
                    <Link
                        to="/blog"
                        className="text-lg hover:text-secondary transition-all"
                    >
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;