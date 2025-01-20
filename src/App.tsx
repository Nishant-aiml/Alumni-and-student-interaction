import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import Career from './pages/Career';
import SkillTrade from './pages/SkillTrade';
import LoginForm from './components/auth/LoginForm';
import RegistrationForm from './components/auth/RegistrationForm';
import PasswordRecovery from './components/auth/PasswordRecovery';
import Landing from './pages/Landing';
import Events from './pages/Events';
import Directory from './pages/Directory';
import Mentorship from './pages/Mentorship';
import Jobs from './pages/Jobs';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/login"
            element={
              <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="pt-16">
                  <LoginForm />
                </main>
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="pt-16">
                  <RegistrationForm />
                </main>
              </div>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="pt-16">
                  <PasswordRecovery />
                </main>
              </div>
            }
          />
          <Route
            path="/get-started"
            element={
              <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="pt-16">
                  <GetStarted />
                </main>
              </div>
            }
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Home />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Profile />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Events />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/directory"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Directory />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentorship"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Mentorship />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Jobs />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/career"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <Career />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/skill-trade"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main className="pt-16">
                    <SkillTrade />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Redirect unmatched routes to landing */}
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;