import React from 'react';
import { ArrowRight, Users, Lightbulb, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative min-h-[600px] mt-16 bg-gradient-to-r from-indigo-900 to-indigo-700"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/graduation-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Connect. Learn. Grow.
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl">
            Join AlumNet, where alumni and students come together to create meaningful 
            connections, share valuable experiences, and build successful futures.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network</h3>
              <p className="text-gray-600">
                Connect with alumni and students from your field and build meaningful professional relationships.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mentorship</h3>
              <p className="text-gray-600">
                Find mentors or become one. Share knowledge and guide others in their career journey.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Opportunities</h3>
              <p className="text-gray-600">
                Discover job opportunities, events, and collaborations within our alumni network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
