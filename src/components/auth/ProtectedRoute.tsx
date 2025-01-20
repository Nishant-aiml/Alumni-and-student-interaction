import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Check for auth token in localStorage as a backup
  const hasAuthToken = Boolean(localStorage.getItem('token'));

  if (!isAuthenticated && !hasAuthToken) {
    // Save the attempted URL for redirecting after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If we have a token but no user, it means we're still loading
  if (!user && hasAuthToken) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
