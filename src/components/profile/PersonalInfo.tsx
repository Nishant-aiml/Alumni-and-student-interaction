import React from 'react';
import { Mail, MapPin, Link, Linkedin, Twitter } from 'lucide-react';

interface PersonalInfoProps {
  profile: any;
  isEditing: boolean;
  onInputChange: (field: string, value: any) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ profile, isEditing, onInputChange }) => {
  const handleSocialLinkChange = (platform: string, value: string) => {
    onInputChange('social', {
      ...(profile.social || {}),
      [platform]: value
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
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
                  value={profile.firstName || ''}
                  onChange={(e) => onInputChange('firstName', e.target.value)}
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
                  value={profile.lastName || ''}
                  onChange={(e) => onInputChange('lastName', e.target.value)}
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
                    onChange={(e) => onInputChange('location', e.target.value)}
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
              onChange={(e) => onInputChange('bio', e.target.value)}
              placeholder="Write something about yourself..."
            />
          ) : (
            <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">{profile.bio || 'No bio provided'}</p>
          )}
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Social Links</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              {isEditing ? (
                <div className="mt-1 flex items-center">
                  <Link className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="url"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={profile.website || ''}
                    onChange={(e) => onInputChange('website', e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>
              ) : profile.website ? (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  <Link className="h-5 w-5 mr-2" />
                  {profile.website}
                </a>
              ) : (
                <p className="mt-1 text-sm text-gray-500">No website provided</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              {isEditing ? (
                <div className="mt-1 flex items-center">
                  <Linkedin className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="url"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={profile.social?.linkedin || ''}
                    onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
              ) : profile.social?.linkedin ? (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  {profile.social.linkedin}
                </a>
              ) : (
                <p className="mt-1 text-sm text-gray-500">No LinkedIn profile provided</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter</label>
              {isEditing ? (
                <div className="mt-1 flex items-center">
                  <Twitter className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="url"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={profile.social?.twitter || ''}
                    onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                    placeholder="https://twitter.com/username"
                  />
                </div>
              ) : profile.social?.twitter ? (
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  {profile.social.twitter}
                </a>
              ) : (
                <p className="mt-1 text-sm text-gray-500">No Twitter profile provided</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
