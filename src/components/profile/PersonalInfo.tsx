import React from 'react';
import { UserProfile } from '../../types/profile';
import { Mail, Phone, Globe, MapPin, Edit } from 'lucide-react';

interface PersonalInfoProps {
  profile: UserProfile;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ profile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </button>
      </div>

      <div className="space-y-6">
        {/* Bio */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">About</h3>
          <p className="text-gray-600">{profile.bio}</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.email && (
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-indigo-600">
                  {profile.email}
                </a>
              </div>
            )}
            {profile.phone && profile.preferences.showPhone && (
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href={`tel:${profile.phone}`} className="hover:text-indigo-600">
                  {profile.phone}
                </a>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center text-gray-600">
                <Globe className="h-5 w-5 mr-2 text-gray-400" />
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  {new URL(profile.website).hostname}
                </a>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span>{profile.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        {Object.keys(profile.socialLinks).length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profile.socialLinks).map(([platform, url]) => (
                url && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Globe className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="capitalize">{platform}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        )}

        {/* Availability Status */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Availability</h3>
          <div className="space-y-2">
            {profile.availability.forMentoring && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-2">
                Available for Mentoring
              </div>
            )}
            {profile.availability.forJobs && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2">
                Open to Job Opportunities
              </div>
            )}
            {profile.availability.forProjects && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Interested in Projects
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
