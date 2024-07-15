// src/components/ReferralProcess.js
import React from 'react';
import { GiWallet } from 'react-icons/gi';
import { HiIdentification, HiUserAdd } from "react-icons/hi";

const ReferralProcess = ({ openModal }) => {
  return (
    <div className="bg-blue-50 my-28 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">How Do I <span className="text-blue-500">Refer?</span></h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-white p-4 rounded-full inline-block mb-4">
            <HiUserAdd size={56} className="text-blue-500"/>
          </div>
          <p>Submit referrals easily via our website's referral section.</p>
        </div>
        <div className="text-center">
          <div className="bg-white p-4 rounded-full inline-block mb-4">
           <HiIdentification size={56} className="text-blue-500"/>
          </div>
          <p>Referrals get registered and enrolled in our program.</p>
        </div>
        <div className="text-center">
          <div className="bg-white p-4 rounded-full inline-block mb-4">
          <GiWallet size={56} className="text-blue-500"/>
          </div>
          <p>Both parties receive a bonus 30 days after program enrollment.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralProcess;
