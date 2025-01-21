import React from 'react';
import { UserProfile } from '../../types/auth';
import { Mail, MapPin, Link, Linkedin, Twitter } from 'lucide-react';

interface PersonalInfoProps {
  profile: UserProfile;
  isEditing: boolean;
  onUpdate: (field: keyof UserProfile, value: any) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ profile, isEditing, onUpdate }) => {
  const handleSocialLinkChange = (platform: string, value: string) => {
    onUpdate('socialLinks', {
      ...profile.socialLinks,
      [platform]: value
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={profile.firstName}
                  onChange={(e) => onUpdate('firstName', e.target.value)}
                />
              ) : (
                <p className="mt-1 text-sm text-gray-900">{profile.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={profile.lastName}
                  onChange={(e) => onUpdate('lastName', e.target.value)}
                />
              ) : (
                <p className="mt-1 text-sm text-gray-900">{profile.lastName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <p className="text-sm text-gray-900">{profile.email}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              {isEditing ? (
                <div className="mt-1 flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={profile.location || ''}
                    onChange={(e) => onUpdate('location', e.target.value)}
                    placeholder="Enter your location"
                  />
                </div>
              ) : (
                <div className="mt-1 flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-900">{profile.location || 'Not specified'}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Bio</h3>
          {isEditing ? (
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={4}
              value={profile.bio || ''}
              onChange={(e) => onUpdate('bio', e.target.value)}
              placeholder="Write something about yourself..."
            />
          ) : (
            <p className="mt-1 text-sm text-gray-900">{profile.bio || 'No bio provided'}</p>
          )}
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Social Links</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-gray-400 mr-2" />
                  LinkedIn
                </div>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={profile.socialLinks?.linkedin || ''}
                  onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                  placeholder="LinkedIn profile URL"
                />
              ) : (
                <a
                  href={profile.socialLinks?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-indigo-600 hover:text-indigo-500"
                >
                  {profile.socialLinks?.linkedin || 'Not provided'}
                </a>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </div>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={profile.socialLinks?.github || ''}
                  onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                  placeholder="GitHub profile URL"
                />
              ) : (
                <a
                  href={profile.socialLinks?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-indigo-600 hover:text-indigo-500"
                >
                  {profile.socialLinks?.github || 'Not provided'}
                </a>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <Twitter className="h-5 w-5 text-gray-400 mr-2" />
                  Twitter
                </div>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={profile.socialLinks?.twitter || ''}
                  onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                  placeholder="Twitter profile URL"
                />
              ) : (
                <a
                  href={profile.socialLinks?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-indigo-600 hover:text-indigo-500"
                >
                  {profile.socialLinks?.twitter || 'Not provided'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
