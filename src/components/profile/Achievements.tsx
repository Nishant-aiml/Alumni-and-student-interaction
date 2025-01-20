import React from 'react';
import { UserProfile } from '../../types/profile';
import { Award, Plus, ExternalLink } from 'lucide-react';

interface AchievementsProps {
  profile: UserProfile;
}

const Achievements: React.FC<AchievementsProps> = ({ profile }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-100 text-blue-800',
      professional: 'bg-green-100 text-green-800',
      certification: 'bg-purple-100 text-purple-800',
      award: 'bg-yellow-100 text-yellow-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Achievements & Certifications</h2>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Plus className="h-4 w-4 mr-2" />
          Add Achievement
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.achievements.length === 0 ? (
          <p className="text-gray-500 text-center py-4 col-span-full">No achievements added yet</p>
        ) : (
          profile.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="relative group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start space-x-3">
                {achievement.imageUrl ? (
                  <img
                    src={achievement.imageUrl}
                    alt={achievement.title}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-gray-600" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{achievement.issuer}</p>
                </div>
              </div>

              <div className="mt-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                    achievement.category
                  )}`}
                >
                  {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                </span>
                <time
                  dateTime={achievement.date}
                  className="ml-2 text-sm text-gray-500"
                >
                  {new Date(achievement.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>

              {achievement.description && (
                <p className="mt-3 text-sm text-gray-600">{achievement.description}</p>
              )}

              {achievement.verificationUrl && (
                <div className="mt-4">
                  <a
                    href={achievement.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Badges Section */}
      {profile.badges.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Earned Badges</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {profile.badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                title={badge.description}
              >
                <img
                  src={badge.imageUrl}
                  alt={badge.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-900 text-center">
                  {badge.name}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {new Date(badge.earnedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
