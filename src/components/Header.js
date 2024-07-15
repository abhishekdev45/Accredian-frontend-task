// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-100 text-center p-2 text-sm text-gray-700">
        <p>Navigate your ideal career path <a href="/contact-expert" className="text-blue-500 hover:underline">
          Contact Expert
        </a></p>
        
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="https://firebasestorage.googleapis.com/v0/b/active-pillar-421905.appspot.com/o/accredian.png?alt=media&token=acf82999-0539-488e-8e7d-2271e94b02b2" alt="Logo" className="h-8" />
            
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-700 hover:underline">
              Refer & Earn
            </a>
            <a href="/" className="text-gray-700 hover:underline">
              Resources
            </a>
            <a href="/" className="text-gray-700 hover:underline">
              About Us
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:underline">Login</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
