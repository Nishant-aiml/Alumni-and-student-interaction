import React from 'react';
import { UserProfile } from '../../types/profile';
import { MessageSquare, ThumbsUp, Calendar, Award, Code, GraduationCap, Briefcase } from 'lucide-react';

interface ActivityFeedProps {
  profile: UserProfile;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ profile }) => {
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
          {profile.activityUpdates.length === 0 ? (
            <li className="text-gray-500 text-center py-4">No recent activity</li>
          ) : (
            profile.activityUpdates.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== profile.activityUpdates.length - 1 ? (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <div
                      className={`relative h-10 w-10 rounded-full flex items-center justify-center ${getActivityColor(
                        activity.type
                      )}`}
                    >
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="min-w-0 flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                      <div>
                        <p className="text-sm text-gray-900">{activity.content}</p>
                      </div>
                      <div className="mt-2 text-sm space-x-2">
                        <span className="text-gray-500">
                          <Calendar className="inline-block h-4 w-4 mr-1" />
                          {new Date(activity.timestamp).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        {activity.imageUrl && (
                          <img
                            src={activity.imageUrl}
                            alt="Activity"
                            className="mt-2 rounded-lg max-h-48 object-cover"
                          />
                        )}
                      </div>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {activity.likes} Likes
                        </button>
                        <button className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {activity.comments} Comments
                        </button>
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
