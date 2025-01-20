import React from 'react';
import { Users, MessageSquare, Calendar, Globe, TrendingUp, Briefcase } from 'lucide-react';
import { AlumniGroup } from '../../types/directory';

const mockGroups: AlumniGroup[] = [
  {
    id: '1',
    name: 'Tech Alumni Network',
    description: 'A community of tech professionals sharing insights and opportunities',
    memberCount: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'industry',
    recentActivities: [
      {
        type: 'event',
        content: 'Tech Meetup 2025 - Silicon Valley',
        timestamp: '2025-02-15T10:00:00Z',
      },
      {
        type: 'discussion',
        content: 'Future of AI in Software Development',
        timestamp: '2025-01-19T15:30:00Z',
      },
    ],
  },
  // Add more groups
];

const AlumniGroups = () => {
  return (
    <div className="space-y-8">
      {/* Featured Groups */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Featured Groups</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Group Header Image */}
              <div
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${group.imageUrl})` }}
              >
                <div className="h-full w-full bg-black bg-opacity-40 p-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                    {group.category === 'industry' && 'Industry Group'}
                    {group.category === 'interest' && 'Interest Group'}
                    {group.category === 'batch' && 'Batch Group'}
                    {group.category === 'location' && 'Regional Group'}
                  </span>
                </div>
              </div>

              {/* Group Info */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900">{group.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{group.description}</p>

                {/* Member Count */}
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {group.memberCount.toLocaleString()} members
                </div>

                {/* Recent Activities */}
                <div className="mt-6 space-y-4">
                  <h5 className="text-sm font-medium text-gray-900">Recent Activities</h5>
                  {group.recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {activity.type === 'event' ? (
                        <Calendar className="w-5 h-5 text-indigo-500" />
                      ) : activity.type === 'discussion' ? (
                        <MessageSquare className="w-5 h-5 text-green-500" />
                      ) : (
                        <Globe className="w-5 h-5 text-blue-500" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{activity.content}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(activity.timestamp).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
                    Join Group
                  </button>
                  <button className="flex-1 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Group Categories */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Explore by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Industry Groups */}
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-indigo-900">Industry Groups</h4>
              <Briefcase className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-sm text-indigo-700">Connect with alumni in your industry</p>
            <div className="mt-4">
              <span className="text-xs text-indigo-600">25 active groups</span>
            </div>
          </div>

          {/* Interest Groups */}
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-green-900">Interest Groups</h4>
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-green-700">Join discussions about shared interests</p>
            <div className="mt-4">
              <span className="text-xs text-green-600">18 active groups</span>
            </div>
          </div>

          {/* Batch Groups */}
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-purple-900">Batch Groups</h4>
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700">Stay connected with your batchmates</p>
            <div className="mt-4">
              <span className="text-xs text-purple-600">12 active groups</span>
            </div>
          </div>

          {/* Regional Groups */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-blue-900">Regional Groups</h4>
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm text-blue-700">Network with alumni in your region</p>
            <div className="mt-4">
              <span className="text-xs text-blue-600">30 active groups</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Discussions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Trending Discussions</h3>
          <button className="text-sm text-indigo-600 hover:text-indigo-500">View All</button>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://images.unsplash.com/photo-${i}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  The Impact of AI on Future Job Markets
                </p>
                <p className="text-sm text-gray-500">
                  Started by John Doe • 45 comments • 2 hours ago
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                Trending
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniGroups;
