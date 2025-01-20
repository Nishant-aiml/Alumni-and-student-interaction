import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
          Welcome to AlumNet
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay">
          Connect, collaborate, and grow with your alumni network
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 inline-flex items-center"
          >
            Sign In
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
          >
            Get Started
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Connect with Alumni</h3>
            <p>Build meaningful relationships with graduates from your institution</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Exclusive Events</h3>
            <p>Access to networking events, workshops, and professional development opportunities</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Mentorship</h3>
            <p>Get guidance from experienced professionals in your field</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
