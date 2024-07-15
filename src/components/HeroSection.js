import React from "react";

const HeroSection = ({ openModal }) => {
  return (
    <div className="relative bg-[rgb(238,245,255)] shadow-lg rounded-t-[14px] p-16 max-w-5xl mx-auto text-center mt-24 flex items-center">
      <div className="flex-1 text-left">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Let's Learn & Earn</h1>
        <p className="text-2xl text-gray-700 my-10 ">Get a chance to win <br/> up-to <span className="text-3xl font-bold text-blue-500">Rs. 15,000</span></p>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
        >
          Refer Now
        </button>
      </div>
      <div className="flex-1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/active-pillar-421905.appspot.com/o/pic1.png?alt=media&token=615684a0-823e-4c92-909a-3f3ff625fd27"
          alt="Refer & Earn"
          className="ml-8"
        />
      </div>
    </div>
  );
};

export default HeroSection;
