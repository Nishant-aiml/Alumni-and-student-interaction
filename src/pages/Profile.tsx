import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UserProfile } from '../types/auth';
import { Tab } from '@headlessui/react';
import { 
  User, Briefcase, GraduationCap, Award, 
  Code, Network, Activity, Settings,
  Edit3, Share2, MessageCircle, Save
} from 'lucide-react';

// Import profile sections
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInfo from '../components/profile/PersonalInfo';
import Experience from '../components/profile/Experience';
import Education from '../components/profile/Education';
import Projects from '../components/profile/Projects';
import Skills from '../components/profile/Skills';
import Achievements from '../components/profile/Achievements';
import Connections from '../components/profile/Connections';
import ActivityFeed from '../components/profile/ActivityFeed';

const Profile = () => {
  const { user, userProfile, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (userProfile) {
      setEditedProfile(userProfile);
    }
  }, [userProfile]);

  const handleSaveProfile = async () => {
    if (editedProfile) {
      await updateProfile(editedProfile);
      setIsEditing(false);
    }
  };

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    if (editedProfile) {
      setEditedProfile({
        ...editedProfile,
        [field]: value
      });
    }
  };

  if (!user || !userProfile || !editedProfile) {
    return <div>Loading...</div>;
  }

  const tabs = [
    { name: 'Personal Info', icon: User },
    { name: 'Experience', icon: Briefcase },
    { name: 'Education', icon: GraduationCap },
    { name: 'Skills', icon: Code },
    { name: 'Achievements', icon: Award },
    { name: 'Connections', icon: Network },
    { name: 'Activity', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="relative h-48">
            <img
              className="w-full h-full object-cover rounded-t-lg"
              src={editedProfile.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
              alt="Cover"
            />
            <div className="absolute -bottom-16 left-6">
              <img
                className="w-32 h-32 rounded-full border-4 border-white"
                src={editedProfile.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
                alt={`${user.firstName} ${user.lastName}`}
              />
            </div>
            <div className="absolute top-4 right-4 space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveProfile}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditedProfile(userProfile);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          <div className="px-6 py-4 pt-20">
            <h1 className="text-2xl font-bold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>
            {isEditing ? (
              <textarea
                className="mt-2 w-full p-2 border rounded"
                value={editedProfile.bio || ''}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Write something about yourself..."
              />
            ) : (
              <p className="mt-2 text-gray-600">{editedProfile.bio || 'No bio yet'}</p>
            )}
            <div className="mt-4 flex space-x-4">
              <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">{editedProfile.posts}</span> posts
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">{editedProfile.followers}</span> followers
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">{editedProfile.following}</span> following
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex space-x-1 bg-white p-1 rounded-lg shadow mb-6">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  `flex-1 py-2.5 text-sm font-medium leading-5 rounded-lg
                  ${
                    selected
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }
                  `
                }
              >
                <div className="flex items-center justify-center">
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="bg-white rounded-lg shadow">
            <Tab.Panel>
              <PersonalInfo
                profile={editedProfile}
                isEditing={isEditing}
                onUpdate={handleInputChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Experience
                experience={editedProfile.experience || []}
                isEditing={isEditing}
                onUpdate={(exp) => handleInputChange('experience', exp)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Education
                education={editedProfile.education || []}
                isEditing={isEditing}
                onUpdate={(edu) => handleInputChange('education', edu)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Skills
                skills={editedProfile.skills || []}
                isEditing={isEditing}
                onUpdate={(skills) => handleInputChange('skills', skills)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Achievements
                profile={editedProfile}
                isEditing={isEditing}
                onUpdate={(achievements) => handleInputChange('achievements', achievements)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Connections
                profile={editedProfile}
                isEditing={isEditing}
                onUpdate={(connections) => handleInputChange('connections', connections)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ActivityFeed
                profile={editedProfile}
                isEditing={isEditing}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Profile;
