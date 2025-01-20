import React, { useState } from 'react';
import { UserProfile } from '../types/profile';
import { Tab as HeadlessTab } from '@headlessui/react';
import { 
  User, Briefcase, GraduationCap, Award, 
  Code, Network, Activity, Settings,
  Edit3, Share2, MessageCircle
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

const mockProfile: UserProfile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  headline: 'Software Engineer | AI Enthusiast | Open Source Contributor',
  bio: 'Passionate about building innovative solutions...',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  coverImageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  location: 'San Francisco, CA',
  email: 'john.doe@example.com',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  achievements: [],
  badges: [],
  connections: [],
  activityUpdates: [],
  profileCompletion: 85,
  profileViews: 1234,
  availability: {
    forMentoring: true,
    forJobs: true,
    forProjects: true,
  },
  preferences: {
    emailNotifications: true,
    profileVisibility: 'public',
    showEmail: true,
    showPhone: false,
  },
};

const Profile = () => {
  const [profile] = useState<UserProfile>(mockProfile);

  const tabs = [
    { name: 'Overview', icon: User },
    { name: 'Experience', icon: Briefcase },
    { name: 'Education', icon: GraduationCap },
    { name: 'Projects', icon: Code },
    { name: 'Skills', icon: Award },
    { name: 'Achievements', icon: Award },
    { name: 'Connections', icon: Network },
    { name: 'Activity', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <ProfileHeader profile={profile} />

        {/* Quick Actions */}
        <div className="flex justify-end space-x-4 mt-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            <Edit3 className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </button>
        </div>

        {/* Profile Navigation */}
        <div className="mt-8">
          <HeadlessTab.Group>
            <HeadlessTab.List className="flex space-x-4 border-b border-gray-200">
              {tabs.map((tab) => (
                <HeadlessTab
                  key={tab.name}
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center focus:outline-none`
                  }
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </HeadlessTab>
              ))}
            </HeadlessTab.List>

            <HeadlessTab.Panels className="mt-8">
              <HeadlessTab.Panel>
                <PersonalInfo profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <Experience profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <Education profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <Projects profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <Skills profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <Achievements profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <Connections profile={profile} />
              </HeadlessTab.Panel>
              <HeadlessTab.Panel>
                <ActivityFeed profile={profile} />
              </HeadlessTab.Panel>
            </HeadlessTab.Panels>
          </HeadlessTab.Group>
        </div>
      </div>
    </div>
  );
};

export default Profile;
