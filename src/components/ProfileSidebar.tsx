import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Bookmark, 
  MessageCircle, 
  Users, 
  Star, 
  Brain,
  Lightbulb,
  ChevronRight
} from 'lucide-react';

const ProfileSidebar = () => {
  const menuItems = [
    {
      name: 'My Feeds & Bookmarks',
      icon: Bookmark,
      path: '/feeds',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Conversations',
      icon: MessageCircle,
      path: '/conversations',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Groups Joined',
      icon: Users,
      path: '/groups',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Starred Events',
      icon: Star,
      path: '/starred-events',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      name: 'Career Guidance AI',
      icon: Brain,
      path: '/career-ai',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Learn with AI',
      icon: Lightbulb,
      path: '/learn-ai',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl text-white font-semibold">
            DE
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold text-gray-900 truncate">Demo User</h2>
            <p className="text-sm text-gray-500">Student at XYZ University</p>
          </div>
        </div>
        <button className="mt-4 w-full py-2.5 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
          Edit Profile
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? `${item.bgColor} ${item.color}` 
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
