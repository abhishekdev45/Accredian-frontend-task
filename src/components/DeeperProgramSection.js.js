// src/components/DeeperProgramSection.js
import React from 'react';
import { FaHeadset } from 'react-icons/fa';

const DeeperProgramSection = () => {
  return (
    <div className="bg-blue-500 text-white p-8 rounded-lg flex items-center justify-between max-w-4xl mx-auto my-36">
      <div className="flex items-center">
        <div className="bg-white p-4 rounded-full mr-4">
          <FaHeadset size={32} className="text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Want to delve deeper into the program?</h3>
          <p className="text-sm">Share your details to receive expert insights from our program team!</p>
        </div>
      </div>
      <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
        Get in touch &rarr;
      </button>
    </div>
  );
};

export default DeeperProgramSection;
