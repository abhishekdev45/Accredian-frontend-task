import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../axiosConfig";

const ReferralModal = ({ closeModal }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for validating names (allowing only alphabetic characters and spaces)
    const nameRegex = /^[a-zA-Z\s]*$/;

    if (
      referrerName.trim() !== "" &&
      referrerEmail.match(emailRegex) &&
      refereeName.trim() !== "" &&
      refereeEmail.match(emailRegex) &&
      referrerName.match(nameRegex) &&
      refereeName.match(nameRegex)
    ) {
      try {
        const response = await axiosInstance.post(
          `https://accredian-backend-task-4hp1.onrender.com/api/referrals`,
          {
            referrerName,
            referrerEmail,
            refereeName,
            refereeEmail,
          }
        );

        // Assuming successful response (replace with actual logic)
        if (response.status === 201) {
          toast.success("Referral submitted successfully");
          console.log({
            referrerName,
            referrerEmail,
            refereeName,
            refereeEmail,
          });
          setTimeout(() => {
            closeModal();
          }, 3000);
        } else {
          toast.error("Failed to submit referral");
        }
      } catch (error) {
        toast.error("Failed to submit referral");
      }
    } else {
      toast.error("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded mt-1"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded mt-1"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded mt-1"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded mt-1"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ReferralModal;
