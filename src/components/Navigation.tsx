import React, { useState } from 'react';
import { Search, Bell, User, Menu, X, GraduationCap, LogOut } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/landing');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side */}
          <div className="flex">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-indigo-600">AlumNet</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Home
              </Link>
              <Link
                to="/events"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/events') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Events
              </Link>
              <Link
                to="/directory"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/directory') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Directory
              </Link>
              <Link
                to="/mentorship"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/mentorship') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Mentorship
              </Link>
              <Link
                to="/jobs"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/jobs') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Jobs
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative rounded-full text-gray-400 p-1 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </div>
            </div>
            <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Bell className="h-6 w-6" />
            </button>
            <button
              onClick={handleLogout}
              className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </button>
            <Link
              to="/profile"
              className="ml-4 flex items-center px-3 py-2 text-sm text-gray-700 hover:text-indigo-600"
            >
              <div className="relative">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.avatarUrl || `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=random`}
                  alt={user?.firstName}
                />
                <span className="absolute -bottom-1 -right-1 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <span className="ml-2 hidden md:block">{user?.firstName || 'Profile'}</span>
            </Link>
            <div className="ml-4 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/events')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Events
            </Link>
            <Link
              to="/directory"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/directory')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Directory
            </Link>
            <Link
              to="/mentorship"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/mentorship')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Mentorship
            </Link>
            <Link
              to="/jobs"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/jobs')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Jobs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}