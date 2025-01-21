import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
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
  const { currentUser, userData, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userData);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (userData) {
      setEditedProfile(userData);
    }
  }, [userData]);

  useEffect(() => {
    const dummyConnections = [
      {
        id: 'conn1',
        name: 'Dr. Priya Sharma',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
        role: 'Senior Data Scientist @ Amazon',
        batch: '2015',
        branch: 'Computer Science',
        company: 'Amazon',
        location: 'Seattle, USA',
        isAlumni: true,
        skills: ['Machine Learning', 'AI', 'Python', 'AWS'],
        mutualConnections: 15
      },
      {
        id: 'conn2',
        name: 'Rahul Verma',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
        role: 'Software Architect @ Microsoft',
        batch: '2016',
        branch: 'Information Technology',
        company: 'Microsoft',
        location: 'Bangalore, India',
        isAlumni: true,
        skills: ['Cloud Architecture', 'Azure', '.NET', 'System Design'],
        mutualConnections: 23
      },
      {
        id: 'conn3',
        name: 'Emily Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
        role: 'Product Manager @ Google',
        batch: '2017',
        branch: 'Electronics',
        company: 'Google',
        location: 'Mountain View, USA',
        isAlumni: true,
        skills: ['Product Strategy', 'UX Design', 'Agile', 'Analytics'],
        mutualConnections: 18
      },
      {
        id: 'conn4',
        name: 'Aditya Patel',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aditya',
        role: 'Blockchain Developer @ Polygon',
        batch: '2018',
        branch: 'Computer Science',
        company: 'Polygon',
        location: 'Mumbai, India',
        isAlumni: true,
        skills: ['Blockchain', 'Solidity', 'Smart Contracts', 'Web3'],
        mutualConnections: 12
      },
      {
        id: 'conn5',
        name: 'Sarah Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
        role: 'AI Research Lead @ DeepMind',
        batch: '2014',
        branch: 'Computer Science',
        company: 'DeepMind',
        location: 'London, UK',
        isAlumni: true,
        skills: ['Deep Learning', 'Neural Networks', 'Research', 'TensorFlow'],
        mutualConnections: 28
      },
      {
        id: 'conn6',
        name: 'Akash Gupta',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=akash',
        role: 'Senior SDE @ Netflix',
        batch: '2016',
        branch: 'Information Technology',
        company: 'Netflix',
        location: 'California, USA',
        isAlumni: true,
        skills: ['Microservices', 'System Design', 'Java', 'Spring Boot'],
        mutualConnections: 20
      },
      {
        id: 'conn7',
        name: 'Lisa Wong',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
        role: 'UI/UX Designer @ Apple',
        batch: '2019',
        branch: 'Design',
        company: 'Apple',
        location: 'Cupertino, USA',
        isAlumni: true,
        skills: ['UI Design', 'UX Research', 'Figma', 'Design Systems'],
        mutualConnections: 16
      },
      {
        id: 'conn8',
        name: 'Ravi Kumar',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ravi',
        role: 'DevOps Engineer @ Uber',
        batch: '2017',
        branch: 'Computer Science',
        company: 'Uber',
        location: 'San Francisco, USA',
        isAlumni: true,
        skills: ['DevOps', 'Kubernetes', 'Docker', 'CI/CD'],
        mutualConnections: 22
      },
      {
        id: 'conn9',
        name: 'Maya Patel',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maya',
        role: 'Data Engineer @ Meta',
        batch: '2018',
        branch: 'Information Technology',
        company: 'Meta',
        location: 'New York, USA',
        isAlumni: true,
        skills: ['Big Data', 'Apache Spark', 'Python', 'SQL'],
        mutualConnections: 19
      },
      {
        id: 'conn10',
        name: 'Alex Thompson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
        role: 'Game Developer @ Unity',
        batch: '2020',
        branch: 'Computer Science',
        company: 'Unity Technologies',
        location: 'Copenhagen, Denmark',
        isAlumni: true,
        skills: ['Game Development', 'Unity3D', 'C#', '3D Modeling'],
        mutualConnections: 14
      },
      {
        id: 'conn11',
        name: 'Neha Reddy',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
        role: 'Cybersecurity Expert @ IBM',
        batch: '2016',
        branch: 'Information Security',
        company: 'IBM',
        location: 'Hyderabad, India',
        isAlumni: true,
        skills: ['Cybersecurity', 'Penetration Testing', 'Network Security', 'CISSP'],
        mutualConnections: 25
      },
      {
        id: 'conn12',
        name: 'Tom Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tom',
        role: 'ML Engineer @ OpenAI',
        batch: '2017',
        branch: 'Computer Science',
        company: 'OpenAI',
        location: 'San Francisco, USA',
        isAlumni: true,
        skills: ['Machine Learning', 'NLP', 'PyTorch', 'Research'],
        mutualConnections: 17
      },
      {
        id: 'conn13',
        name: 'Ananya Singh',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ananya',
        role: 'Frontend Lead @ Spotify',
        batch: '2018',
        branch: 'Information Technology',
        company: 'Spotify',
        location: 'Stockholm, Sweden',
        isAlumni: true,
        skills: ['React', 'TypeScript', 'Web Performance', 'Design Systems'],
        mutualConnections: 21
      },
      {
        id: 'conn14',
        name: 'James Lee',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
        role: 'IoT Specialist @ Intel',
        batch: '2015',
        branch: 'Electronics',
        company: 'Intel',
        location: 'Portland, USA',
        isAlumni: true,
        skills: ['IoT', 'Embedded Systems', 'C++', 'RTOS'],
        mutualConnections: 24
      },
      {
        id: 'conn15',
        name: 'Shreya Kapoor',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shreya',
        role: 'Cloud Architect @ Oracle',
        batch: '2016',
        branch: 'Computer Science',
        company: 'Oracle',
        location: 'Austin, USA',
        isAlumni: true,
        skills: ['Cloud Computing', 'Oracle Cloud', 'Java', 'Microservices'],
        mutualConnections: 26
      }
    ];

    setConnections(dummyConnections);
  }, []);

  const handleSaveProfile = async () => {
    if (editedProfile) {
      try {
        await updateUserProfile(editedProfile);
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to update profile:', error);
      }
    }
  };

  const handleInputChange = (field: string, value: any) => {
    if (editedProfile) {
      setEditedProfile({
        ...editedProfile,
        [field]: value
      });
    }
  };

  if (!currentUser || !userData || !editedProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
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
              src={editedProfile.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.uid}`}
              alt="Cover"
            />
            <div className="absolute -bottom-16 left-6">
              <img
                className="w-32 h-32 rounded-full border-4 border-white"
                src={editedProfile.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.uid}`}
                alt={`${userData.firstName} ${userData.lastName}`}
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
                      setEditedProfile(userData);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
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
                </>
              )}
            </div>
          </div>
          <div className="px-6 py-4 pt-20">
            <h1 className="text-3xl font-bold text-gray-900">
              {`${userData.firstName} ${userData.lastName}`}
            </h1>
            <p className="text-gray-500">{userData.userType}</p>
          </div>
        </div>

        {/* Profile Content */}
        <Tab.Group>
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <Tab.List className="flex min-w-max p-1 space-x-1">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `flex items-center py-2.5 px-3 text-sm leading-5 font-medium rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60
                    ${
                      selected
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-6">
            <Tab.Panel>
              <PersonalInfo
                profile={editedProfile}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Experience
                experience={editedProfile.experience}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Education
                education={editedProfile.education}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Skills
                skills={editedProfile.skills}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Achievements
                achievements={editedProfile.achievements}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Connections connections={connections} />
            </Tab.Panel>
            <Tab.Panel>
              <ActivityFeed activities={editedProfile.activities} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Profile;
