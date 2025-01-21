import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

type UserType = 'student' | 'mentor' | 'alumni';

const RegisterForm = () => {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    userType: 'student' as UserType
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleGoogleRegister = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await loginWithGoogle();
      navigate('/home');
    } catch (error) {
      setError('Google sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    try {
      setIsLoading(true);
      setError(null);
      await register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        userType: formData.userType
      });
      navigate('/home');
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Create Account</h2>
          <p className="mt-2 text-sm text-gray-300">
            Join our community and start connecting
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleGoogleRegister}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-4 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200 space-x-2"
          >
            <FaGoogle className="h-5 w-5 text-white" />
            <span>Sign up with Google</span>
          </button>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-300">Or sign up with email</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {error && (
            <div className="bg-red-500/10 backdrop-blur border border-red-500/20 rounded-lg p-4 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
              <span className="text-sm text-red-400">{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-gray-300">
              I am a
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
              required
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="alumni">Alumni</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                First Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                  placeholder="First name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
