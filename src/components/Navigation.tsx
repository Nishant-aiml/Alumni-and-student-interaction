import React, { useState } from 'react';
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  GraduationCap,
  LogOut,
  Briefcase,
  ArrowRightLeft,
  Lightbulb,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, currentUser } = useAuth();

  const handleLogoClick = () => {
    navigate(currentUser ? '/' : '/landing');
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
  const isAuthPage = ['/login', '/register', '/forgot-password', '/landing'].includes(
    location.pathname
  );

  const navigation = [
    { name: 'Home', href: '/', icon: GraduationCap },
    { name: 'Events', href: '/events', icon: Search },
    { name: 'Directory', href: '/directory', icon: User },
    { name: 'Mentorship', href: '/mentorship', icon: Briefcase },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Career', href: '/career', icon: Briefcase },
    { name: 'Skill Trade', href: '/skill-trade', icon: ArrowRightLeft },
    { name: 'Innovation Hub', href: '/innovation', icon: Lightbulb },
    { name: 'Forum', href: '/forum', icon: MessageSquare },
  ];

  // Show simplified navigation for auth pages
  if (isAuthPage) {
    return (
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => navigate('/landing')}
            >
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-indigo-600">EduConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              {location.pathname !== '/login' && (
                <Link
                  to="/login"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </Link>
              )}
              {location.pathname !== '/register' && (
                <Link
                  to="/register"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }

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
              <span className="ml-2 text-2xl font-bold text-indigo-600">EduConnect</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive(item.href)
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link
              to="/innovation"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/innovation')
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              } transition-colors duration-200`}
            >
              <Sparkles className="h-5 w-5 mr-1.5" />
              Innovation Hub
            </Link>

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
                  src={currentUser?.photoURL || `https://ui-avatars.com/api/?name=${currentUser?.displayName}&background=random`}
                  alt={currentUser?.displayName}
                />
                <span className="absolute -bottom-1 -right-1 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <span className="ml-2 hidden md:block">{currentUser?.displayName || 'Profile'}</span>
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/innovation"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/innovation')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-1.5" />
                Innovation Hub
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}