// src/ReferEarnLandingPage.js
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ReferralProcess from './ReferralProcess';
import ReferralModal from './ReferralModal';
import ReferralBenefits from './ReferralBenefits';

const ReferEarnLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen ">
      <HeroSection openModal={openModal} />
      <ReferralProcess />
      {isModalOpen && <ReferralModal closeModal={closeModal} />}
      <ReferralBenefits />
    </div>
  );
};

export default ReferEarnLandingPage;
