import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login, loginWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // If user is already logged in, redirect to home
  useEffect(() => {
    if (currentUser) {
      navigate('/home', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await loginWithGoogle();
      navigate('/home', { replace: true });
    } catch (error) {
      setError('Google login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      await login(formData.email, formData.password);
      navigate('/home', { replace: true });
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render anything if user is already logged in
  if (currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-300">
            Please sign in to your account
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-4 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200 space-x-2"
          >
            <FaGoogle className="h-5 w-5 text-white" />
            <span>Continue with Google</span>
          </button>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-300">Or continue with email</span>
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
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 block w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-300">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-indigo-400 hover:text-indigo-300">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
