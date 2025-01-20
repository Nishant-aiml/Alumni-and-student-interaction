import React from 'react';
import { UserProfile } from '../../types/profile';
import { MapPin, Link as LinkIcon, Mail, Phone, Eye, Award, Users } from 'lucide-react';

interface ProfileHeaderProps {
  profile: UserProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Cover Image */}
      <div className="h-48 w-full relative">
        <img
          className="w-full h-full object-cover"
          src={profile.coverImageUrl}
          alt="Cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      <div className="relative px-6 pb-6">
        {/* Profile Image */}
        <div className="relative -mt-16 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-white" />
          <img
            className="relative rounded-full h-32 w-32 object-cover border-4 border-white shadow-lg"
            src={profile.avatarUrl}
            alt={`${profile.firstName} ${profile.lastName}`}
          />
          {/* Profile Completion Badge */}
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-lg">
            <div
              className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium"
              style={{
                background: `conic-gradient(#4F46E5 ${profile.profileCompletion}%, #E5E7EB 0)`,
              }}
            >
              <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
                {profile.profileCompletion}%
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="text-lg text-gray-600">{profile.headline}</p>
          </div>

          {/* Stats */}
          <div className="flex space-x-6">
            <div className="flex items-center text-gray-600">
              <Eye className="h-5 w-5 mr-2" />
              <span>{profile.profileViews} profile views</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>{profile.connections.length} connections</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Award className="h-5 w-5 mr-2" />
              <span>{profile.badges.length} badges earned</span>
            </div>
          </div>

          {/* Contact & Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              {profile.location && (
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.email && profile.preferences.showEmail && (
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href={`mailto:${profile.email}`} className="hover:text-indigo-600">
                    {profile.email}
                  </a>
                </div>
              )}
              {profile.phone && profile.preferences.showPhone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href={`tel:${profile.phone}`} className="hover:text-indigo-600">
                    {profile.phone}
                  </a>
                </div>
              )}
            </div>
            <div className="space-y-2">
              {Object.entries(profile.socialLinks).map(([platform, url]) => (
                url && (
                  <div key={platform} className="flex items-center text-gray-600">
                    <LinkIcon className="h-5 w-5 mr-2" />
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Availability Badges */}
          <div className="flex space-x-4 pt-4">
            {profile.availability.forMentoring && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Available for Mentoring
              </span>
            )}
            {profile.availability.forJobs && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Open to Job Opportunities
              </span>
            )}
            {profile.availability.forProjects && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Interested in Projects
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
