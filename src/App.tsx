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
import Events from './pages/Events';
import Directory from './pages/Directory';
import Mentorship from './pages/Mentorship';
import InnovationHub from './pages/InnovationHub';
import Forum from './components/forum/Forum';
import SuccessStories from './pages/SuccessStories';
import Rewards from './pages/Rewards';
import Jobs from './pages/Jobs';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <Navigation />
    <main className="pt-16">
      {children}
    </main>
  </div>
);

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <Navigation />
    <main className="pt-16">
      {children}
    </main>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <PublicLayout>
                <LoginForm />
              </PublicLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <RegistrationForm />
              </PublicLayout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicLayout>
                <PasswordRecovery />
              </PublicLayout>
            }
          />
          <Route
            path="/get-started"
            element={
              <PublicLayout>
                <GetStarted />
              </PublicLayout>
            }
          />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/home"
              element={
                <ProtectedLayout>
                  <Home />
                </ProtectedLayout>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedLayout>
                  <Profile />
                </ProtectedLayout>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedLayout>
                  <Events />
                </ProtectedLayout>
              }
            />
            <Route
              path="/directory"
              element={
                <ProtectedLayout>
                  <Directory />
                </ProtectedLayout>
              }
            />
            <Route
              path="/mentorship"
              element={
                <ProtectedLayout>
                  <Mentorship />
                </ProtectedLayout>
              }
            />
            <Route
              path="/jobs"
              element={
                <ProtectedLayout>
                  <Jobs />
                </ProtectedLayout>
              }
            />
            <Route
              path="/career"
              element={
                <ProtectedLayout>
                  <Career />
                </ProtectedLayout>
              }
            />
            <Route
              path="/skill-trade"
              element={
                <ProtectedLayout>
                  <SkillTrade />
                </ProtectedLayout>
              }
            />
            <Route
              path="/innovation"
              element={
                <ProtectedLayout>
                  <InnovationHub />
                </ProtectedLayout>
              }
            />
            <Route
              path="/forum"
              element={
                <ProtectedLayout>
                  <Forum />
                </ProtectedLayout>
              }
            />
            <Route
              path="/success-stories"
              element={
                <ProtectedLayout>
                  <SuccessStories />
                </ProtectedLayout>
              }
            />
            <Route
              path="/rewards"
              element={
                <ProtectedLayout>
                  <Rewards />
                </ProtectedLayout>
              }
            />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;