import React from 'react';
import { UserProfile } from '../../types/auth';
import { MessageSquare, ThumbsUp, Calendar, Award, Code, GraduationCap, Briefcase } from 'lucide-react';

interface ActivityFeedProps {
  profile: UserProfile;
  isEditing?: boolean;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ profile, isEditing }) => {
  const activityUpdates = profile?.activityUpdates || [];

  const getActivityIcon = (type: string) => {
    const icons = {
      post: MessageSquare,
      achievement: Award,
      project: Code,
      certification: Award,
      experience: Briefcase,
      education: GraduationCap,
    };
    const IconComponent = icons[type as keyof typeof icons] || MessageSquare;
    return <IconComponent className="h-6 w-6" />;
  };

  const getActivityColor = (type: string) => {
    const colors = {
      post: 'bg-blue-100 text-blue-600',
      achievement: 'bg-yellow-100 text-yellow-600',
      project: 'bg-purple-100 text-purple-600',
      certification: 'bg-green-100 text-green-600',
      experience: 'bg-indigo-100 text-indigo-600',
      education: 'bg-red-100 text-red-600',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Activity</h2>
          <p className="text-sm text-gray-500 mt-1">Recent updates and achievements</p>
        </div>
      </div>

      <div className="flow-root">
        <ul className="-mb-8">
          {activityUpdates.length === 0 ? (
            <li className="text-center py-8">
              <div className="flex flex-col items-center">
                <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-sm font-medium text-gray-900">No recent activity</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Activities will appear here as you interact with the platform
                </p>
              </div>
            </li>
          ) : (
            activityUpdates.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activityUpdates.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${getActivityColor(
                          activity.type
                        )}`}
                      >
                        {getActivityIcon(activity.type)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900">{activity.description}</p>
                        {activity.details && (
                          <p className="mt-1 text-sm text-gray-500">{activity.details}</p>
                        )}
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={activity.date}>
                          {new Date(activity.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ActivityFeed;
