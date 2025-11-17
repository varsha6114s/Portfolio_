import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ExperienceSection from '../sections/ExperienceSection';
import TradingCardsSection from '../sections/TradingCardsSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0e1a] transition-colors duration-300">
      {/* Profile Section */}
      <section className="pt-20 pb-10 px-4">
        <ProfileCard />
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Trading Cards Section */}
      <TradingCardsSection />
    </div>
  );
};

export default Portfolio;
