import React from 'react';
import {
  ThumbsUp,
  MessageSquare,
  Award,
  TrendingUp,
  Clock,
  Star,
} from 'lucide-react';
import { SuccessStory } from '../../types/skillTrade';

const SuccessStories = () => {
  const sampleStories: SuccessStory[] = [
    {
      id: '1',
      title: 'From Beginner to Full-Stack Developer',
      content:
        'Through skill trading on this platform, I was able to learn React from an experienced developer while teaching them UI/UX design. The exchange was incredibly valuable and helped me land my dream job.',
      author: {
        userId: '123',
        name: 'Sarah Chen',
        avatar: 'https://via.placeholder.com/64',
      },
      trade: {
        skills: ['React', 'Node.js', 'UI/UX Design'],
        duration: '3 months',
        outcome: 'Secured Full-Stack Developer position',
      },
      metrics: {
        skillGrowth: 85,
        projectsCompleted: 4,
        timeInvested: 120,
      },
      media: [
        {
          type: 'image',
          url: 'https://via.placeholder.com/400x300',
        },
      ],
      likes: 156,
      comments: 23,
      featured: true,
    },
    // Add more sample stories
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-1 text-sm text-gray-500">
            Real experiences from our community
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Share Your Story
        </button>
      </div>

      {/* Featured Story */}
      {sampleStories.filter((story) => story.featured).map((story) => (
        <div
          key={story.id}
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6"
        >
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <img
                className="h-16 w-16 rounded-full"
                src={story.author.avatar}
                alt={story.author.name}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Featured
                </span>
              </div>
              <div className="mt-1 flex items-center space-x-2 text-sm">
                <span className="font-medium text-gray-900">
                  {story.author.name}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{story.trade.duration}</span>
              </div>
              <p className="mt-3 text-gray-600">{story.content}</p>

              {/* Skills and Metrics */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Skills Exchanged
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.trade.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Skill Growth</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {story.metrics.skillGrowth}%
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Projects Completed</span>
                    <div className="flex items-center text-blue-600">
                      <Award className="h-4 w-4 mr-1" />
                      {story.metrics.projectsCompleted}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Hours Invested</span>
                    <div className="flex items-center text-purple-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {story.metrics.timeInvested}
                    </div>
                  </div>
                </div>
              </div>

              {/* Media */}
              {story.media && story.media.length > 0 && (
                <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {story.media.map((item, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt="Success story"
                            className="w-full h-48 object-cover"
                          />
                        ) : (
                          <video
                            src={item.url}
                            className="w-full h-48 object-cover"
                            controls
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engagement */}
              <div className="mt-4 flex items-center space-x-4">
                <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {story.likes} Likes
                </button>
                <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {story.comments} Comments
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Regular Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleStories.filter((story) => !story.featured).map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-start space-x-4">
              <img
                className="h-12 w-12 rounded-full"
                src={story.author.avatar}
                alt={story.author.name}
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {story.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-3">
                  {story.content}
                </p>
                <div className="mt-3 flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-gray-500">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {story.likes}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {story.comments}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
