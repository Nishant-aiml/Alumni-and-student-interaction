import React, { useState } from 'react';
import { GraduationCap, Users, Calendar, Briefcase, ArrowRight, Search, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const quickLinks = [
    { name: 'Browse Events', href: '/events', color: 'from-blue-500 to-cyan-600', icon: Calendar },
    { name: 'Find Alumni', href: '/directory', color: 'from-emerald-500 to-teal-600', icon: GraduationCap },
    { name: 'Get Mentorship', href: '/mentorship', color: 'from-orange-500 to-pink-600', icon: Briefcase },
    { name: 'Skill Trade', href: '/skill-trade', color: 'from-purple-500 to-indigo-600', icon: Code },
  ];

  return (
    <div className="relative min-h-screen bg-[#1a1f36] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Campus"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f36]/80 via-[#1a1f36]/90 to-[#1a1f36]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full max-w-6xl mx-auto space-y-12">
            {/* Hero Text */}
            <div className="text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Welcome to AlumNet
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with fellow alumni, share experiences, and grow together
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for alumni, events, or opportunities..."
                    className="w-full px-6 py-4 text-lg rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="flex-none px-8 py-4 text-lg font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group p-6 rounded-xl bg-gradient-to-r ${link.color} transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <link.icon className="h-6 w-6 text-white" />
                      <span className="text-lg font-medium text-white">{link.name}</span>
                    </div>
                    <ArrowRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative py-8 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p> 2025 AlumNet. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Install App Banner - Only shown on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-indigo-600 text-white p-4 sm:hidden" id="installBanner" style={{ display: 'none' }}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="font-medium">Get the AlumNet App</p>
            <p className="text-sm text-indigo-100">Install for a better experience</p>
          </div>
          <button
            className="ml-4 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            onClick={() => {
              const banner = document.getElementById('installBanner');
              if (banner) banner.style.display = 'none';
            }}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}