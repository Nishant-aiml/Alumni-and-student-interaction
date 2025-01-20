import React, { useState } from 'react';
import { GraduationCap, Users, Calendar, Briefcase, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const quickLinks = [
    { name: 'Register Now', href: '/register', color: 'from-purple-500 to-indigo-600' },
    { name: 'Browse Events', href: '/events', color: 'from-blue-500 to-cyan-600' },
    { name: 'Find Alumni', href: '/directory', color: 'from-emerald-500 to-teal-600' },
    { name: 'Get Mentorship', href: '/mentorship', color: 'from-orange-500 to-pink-600' },
  ];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-blue-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90" />
        <div className="grid grid-cols-12 h-[600px]">
          <div className="col-span-8 h-full relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
              alt="Students collaborating"
            />
          </div>
          <div className="col-span-4 h-full">
            <div className="h-1/2 relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80"
                alt="Alumni mentoring"
              />
            </div>
            <div className="h-1/2 relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1920&q=80"
                alt="Campus life"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connect. Learn.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"> Grow.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Welcome to AlumNet - Where Alumni Empower Future Leaders. Join our vibrant community of successful graduates and ambitious students, fostering meaningful connections and driving innovation together.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mt-8">
            <div className="max-w-2xl flex rounded-lg shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="search"
                  className="block w-full rounded-l-lg border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Search alumni, events, or jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-lg px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:z-10"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r ${link.color} hover:opacity-90 transform hover:scale-105 transition-all duration-200`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="h-12 w-12 text-blue-400" />
              <div className="ml-4">
                <p className="text-3xl font-bold text-white">10,000+</p>
                <p className="text-base text-gray-300">Alumni Network</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar className="h-12 w-12 text-emerald-400" />
              <div className="ml-4">
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-base text-gray-300">Events Yearly</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Briefcase className="h-12 w-12 text-purple-400" />
              <div className="ml-4">
                <p className="text-3xl font-bold text-white">2,000+</p>
                <p className="text-base text-gray-300">Career Opportunities</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <GraduationCap className="h-12 w-12 text-pink-400" />
              <div className="ml-4">
                <p className="text-3xl font-bold text-white">1,000+</p>
                <p className="text-base text-gray-300">Mentorship Connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}