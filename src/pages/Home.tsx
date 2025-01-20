import React from 'react';
import WelcomeHero from '../components/WelcomeHero';
import FeaturedAlumni from '../components/FeaturedAlumni';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <WelcomeHero />
      <FeaturedAlumni />
    </div>
  );
};

export default Home;
