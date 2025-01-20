import React from 'react';
import Navigation from './components/Navigation';
import WelcomeHero from './components/WelcomeHero';
import FeaturedContent from './components/FeaturedContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <WelcomeHero />
        <FeaturedContent />
      </main>
    </div>
  );
}

export default App;