import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-lightGray py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Brand Section */}
                <div>
                    <h1 className="text-2xl font-bold text-secondary">HireHub</h1>
                    <p className="mt-2 text-sm">
                        Connecting students, employers, and universities seamlessly.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold text-lightGray mb-3">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-secondary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-secondary">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-secondary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div>
                    <h2 className="text-lg font-semibold text-lightGray mb-3">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:text-secondary transition-all" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl hover:text-secondary transition-all" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl hover:text-secondary transition-all" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl hover:text-secondary transition-all" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-6 border-t border-lightGray pt-4 text-center text-sm">
                © 2024 HireHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
