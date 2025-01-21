import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FeedProvider } from './contexts/FeedContext';
import Navigation from './components/Navigation';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import PasswordRecovery from './components/auth/PasswordRecovery';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Profile from './pages/Profile';
import Career from './pages/Career';
import SkillTrade from './pages/SkillTrade';
import Events from './pages/Events';
import Directory from './pages/Directory';
import Mentorship from './pages/Mentorship';
import SuccessStories from './pages/SuccessStories';
import Rewards from './pages/Rewards';
import Jobs from './pages/Jobs';
import Feeds from './pages/Feeds';
import UniversalChatbot from './components/universal/UniversalChatbot';

// Layout for authenticated pages
const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, isLoading } = useAuth();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <UniversalChatbot />
    </div>
  );
};

// Layout for auth pages (login/register)
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, isLoading } = useAuth();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Redirect to home if already authenticated
  if (currentUser) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900">
      {children}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <FeedProvider>
        <Router>
          <Routes>
            {/* Auth Routes - Only accessible when not logged in */}
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <LoginForm />
                </AuthLayout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthLayout>
                  <RegisterForm />
                </AuthLayout>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <AuthLayout>
                  <PasswordRecovery />
                </AuthLayout>
              }
            />

            {/* Protected Routes - Only accessible when logged in */}
            <Route
              path="/home"
              element={
                <AuthenticatedLayout>
                  <Home />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/get-started"
              element={
                <AuthenticatedLayout>
                  <GetStarted />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthenticatedLayout>
                  <Profile />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/events"
              element={
                <AuthenticatedLayout>
                  <Events />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/directory"
              element={
                <AuthenticatedLayout>
                  <Directory />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/mentorship"
              element={
                <AuthenticatedLayout>
                  <Mentorship />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/jobs"
              element={
                <AuthenticatedLayout>
                  <Jobs />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/career"
              element={
                <AuthenticatedLayout>
                  <Career />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/skill-trade"
              element={
                <AuthenticatedLayout>
                  <SkillTrade />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/success-stories"
              element={
                <AuthenticatedLayout>
                  <SuccessStories />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/rewards"
              element={
                <AuthenticatedLayout>
                  <Rewards />
                </AuthenticatedLayout>
              }
            />
            <Route
              path="/feeds"
              element={
                <AuthenticatedLayout>
                  <Feeds />
                </AuthenticatedLayout>
              }
            />

            {/* Redirect root and all unknown routes to login if not authenticated */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </FeedProvider>
    </AuthProvider>
  );
}

export default App;