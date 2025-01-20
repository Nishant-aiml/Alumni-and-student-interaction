import React from 'react';
import WelcomeHero from '../components/WelcomeHero';
import FeaturedContent from '../components/FeaturedContent';
import FeaturedStories from '../components/FeaturedStories';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <WelcomeHero />
      <FeaturedContent />
      <FeaturedStories />
    </div>
  );
};

export default Home;
