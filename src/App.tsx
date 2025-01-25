import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FeedProvider } from './contexts/FeedContext';
import Navigation from './components/Navigation';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import PasswordRecovery from './components/auth/PasswordRecovery';
import { useAuth } from './contexts/AuthContext';
import InstallPrompt from './components/InstallPrompt';
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
import Resources from './pages/Resources';
import ChatBot from './components/ChatBot';

// Layout for authenticated pages
const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, isLoading } = useAuth();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
      <main className="pt-16 pb-16 md:pb-0 mobile-safe-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <ChatBot />
      <InstallPrompt />
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
      <InstallPrompt />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <FeedProvider>
          <div className="app">
            <Routes>
              {/* Public routes */}
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
              <Route path="/get-started" element={<GetStarted />} />

              {/* Protected routes */}
              <Route path="/" element={<AuthenticatedLayout><Navigate to="/home" replace /></AuthenticatedLayout>} />
              <Route path="/home" element={<AuthenticatedLayout><Home /></AuthenticatedLayout>} />
              <Route path="/profile" element={<AuthenticatedLayout><Profile /></AuthenticatedLayout>} />
              <Route path="/career" element={<AuthenticatedLayout><Career /></AuthenticatedLayout>} />
              <Route path="/skill-trade" element={<AuthenticatedLayout><SkillTrade /></AuthenticatedLayout>} />
              <Route path="/events" element={<AuthenticatedLayout><Events /></AuthenticatedLayout>} />
              <Route path="/directory" element={<AuthenticatedLayout><Directory /></AuthenticatedLayout>} />
              <Route path="/mentorship" element={<AuthenticatedLayout><Mentorship /></AuthenticatedLayout>} />
              <Route path="/success-stories" element={<AuthenticatedLayout><SuccessStories /></AuthenticatedLayout>} />
              <Route path="/rewards" element={<AuthenticatedLayout><Rewards /></AuthenticatedLayout>} />
              <Route path="/jobs" element={<AuthenticatedLayout><Jobs /></AuthenticatedLayout>} />
              <Route path="/feeds" element={<AuthenticatedLayout><Feeds /></AuthenticatedLayout>} />
              <Route path="/resources" element={<AuthenticatedLayout><Resources /></AuthenticatedLayout>} />

              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </FeedProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;