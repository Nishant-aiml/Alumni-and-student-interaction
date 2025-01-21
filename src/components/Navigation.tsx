import React, { useState } from 'react';
import {
  Bell,
  User,
  Menu,
  X,
  GraduationCap,
  LogOut,
  Briefcase,
  ArrowRightLeft,
  Star,
  Trophy,
  BookOpen,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, currentUser } = useAuth();
  const isAuthenticated = !!currentUser;

  const handleLogoClick = () => {
    navigate('/home');
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;
  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(
    location.pathname
  );

  const navigation = [
    { name: 'Events', href: '/events', icon: GraduationCap },
    { name: 'Directory', href: '/directory', icon: User },
    { name: 'Mentorship', href: '/mentorship', icon: Briefcase },
    { name: 'Career', href: '/career', icon: Briefcase },
    { name: 'Skill Trade', href: '/skill-trade', icon: ArrowRightLeft },
    { name: 'Feeds', href: '/feeds', icon: Star },
    { name: 'Success Stories', href: '/success-stories', icon: Star },
    { name: 'Rewards', href: '/rewards', icon: Trophy },
    { name: 'Resources', href: '/resources', icon: BookOpen },
  ];

  // Show simplified navigation for auth pages
  if (isAuthPage) {
    return (
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => navigate('/home')}
            >
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl md:text-2xl font-bold text-indigo-600">AlumNet</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              {location.pathname !== '/login' && (
                <Link
                  to="/login"
                  className="text-sm md:text-base inline-flex items-center px-2 md:px-3 py-2 border border-transparent font-medium rounded-md text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </Link>
              )}
              {location.pathname !== '/register' && (
                <Link
                  to="/register"
                  className="text-sm md:text-base inline-flex items-center px-2 md:px-3 py-2 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
            <GraduationCap className="h-7 w-7 md:h-8 md:w-8 text-indigo-600" />
            <span className="ml-2 text-lg md:text-2xl font-bold text-indigo-600 truncate">
              AlumNet
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hidden lg:inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive(item.href)
                    ? 'border-b-2 border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Desktop Right Side Items */}
            <button
              onClick={handleLogout}
              className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <LogOut className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">Logout</span>
            </button>
            <Link
              to="/profile"
              className="ml-2 flex items-center text-sm text-gray-700 hover:text-indigo-600"
            >
              <div className="relative">
                <img
                  className="h-8 w-8 rounded-full"
                  src={currentUser?.photoURL || `https://ui-avatars.com/api/?name=${currentUser?.displayName}&background=random`}
                  alt={currentUser?.displayName}
                />
                <span className="absolute -bottom-1 -right-1 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <span className="ml-2 hidden lg:block">
                {currentUser?.displayName || 'Profile'}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link
              to="/profile"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500"
            >
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Profile Info */}
            <div className="flex items-center px-3 py-2 border-b border-gray-200">
              <img
                className="h-10 w-10 rounded-full"
                src={currentUser?.photoURL || `https://ui-avatars.com/api/?name=${currentUser?.displayName}&background=random`}
                alt={currentUser?.displayName}
              />
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {currentUser?.displayName || 'User'}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {currentUser?.email}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </div>
              </Link>
            ))}

            {/* Mobile Logout Button */}
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}