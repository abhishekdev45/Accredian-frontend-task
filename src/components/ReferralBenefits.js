import React from "react";
import { HiAcademicCap } from "react-icons/hi";

const ReferralBenefits = ({ openModal }) => {
  return (
    <div className="bg-blue-50 my-28 py-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h2>

      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-200 text-left text-blue-700">
              <th className="py-3 px-5 font-semibold">Programs</th>
              <th className="py-3 px-5 font-semibold">Referrer Bonus</th>
              <th className="py-3 px-5 font-semibold">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                Professional Certificate Program in Product Management
              </td>
              <td className="py-3 px-5">₹ 7,000</td>
              <td className="py-3 px-5">₹ 9,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                PG Certificate Program in Strategic Product Management
              </td>
              <td className="py-3 px-5">₹ 9,000</td>
              <td className="py-3 px-5">₹ 11,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                Executive Program in Data Driven Product Management
              </td>
              <td className="py-3 px-5">₹ 10,000</td>
              <td className="py-3 px-5">₹ 10,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                Executive Program in Product Management and Digital
                Transformation
              </td>
              <td className="py-3 px-5">₹ 10,000</td>
              <td className="py-3 px-5">₹ 10,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                Executive Program in Product Management
              </td>
              <td className="py-3 px-5">₹ 10,000</td>
              <td className="py-3 px-5">₹ 10,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                Advanced Certification in Product Management
              </td>
              <td className="py-3 px-5">₹ 10,000</td>
              <td className="py-3 px-5">₹ 10,000</td>
            </tr>
            <tr>
              <td className="py-3 px-5 flex items-center">
                <HiAcademicCap className="w-5 h-5 mr-2 text-blue-500" />
                Executive Program in Product Management and Project Management
              </td>
              <td className="py-3 px-5">₹ 10,000</td>
              <td className="py-3 px-5">₹ 10,000</td>
            </tr>
          </tbody>
        </table>
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

export default ReferralBenefits;
