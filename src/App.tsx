import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Events from './pages/Events';
import Directory from './pages/Directory';
import Mentorship from './pages/Mentorship';
import Jobs from './pages/Jobs';
import GetStarted from './pages/GetStarted';
import Landing from './pages/Landing';
import LoginForm from './components/auth/LoginForm';
import RegistrationForm from './components/auth/RegistrationForm';
import PasswordRecovery from './components/auth/PasswordRecovery';
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<PasswordRecovery />} />
          
          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navigation />
                  <main>
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
                  <main>
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
                  <main>
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
                  <main>
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
                  <main>
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
                  <main>
                    <Jobs />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Redirect root to get-started for new users */}
          <Route path="*" element={<Navigate to="/get-started" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;