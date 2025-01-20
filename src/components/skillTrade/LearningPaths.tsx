import React from 'react';
import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
} from 'lucide-react';
import { LearningPath } from '../../types/skillTrade';

const LearningPaths = () => {
  const samplePaths: LearningPath[] = [
    {
      id: '1',
      title: 'Full-Stack Web Development',
      description:
        'Master modern web development from frontend to backend with React, Node.js, and more.',
      category: 'Programming',
      skills: [
        {
          skillId: 'react',
          order: 1,
          requiredLevel: 'beginner',
          estimatedHours: 40,
        },
        {
          skillId: 'node',
          order: 2,
          requiredLevel: 'intermediate',
          estimatedHours: 30,
        },
      ],
      prerequisites: ['Basic JavaScript', 'HTML/CSS'],
      resources: [
        {
          type: 'video',
          title: 'React Fundamentals',
          url: 'https://example.com/react',
          duration: 120,
        },
        {
          type: 'project',
          title: 'Build a Full-Stack App',
          url: 'https://example.com/project',
        },
      ],
      completions: 1250,
      rating: 4.8,
      reviews: 450,
      creator: {
        userId: '123',
        expertise: ['Web Development', 'React', 'Node.js'],
      },
    },
    // Add more sample paths as needed
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Learning Paths</h2>
          <p className="mt-1 text-sm text-gray-500">
            Structured paths to master new skills
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Create Path
        </button>
      </div>

      {/* Path Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePaths.map((path) => (
          <div
            key={path.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {path.title}
                  </h3>
                  <div className="mt-1 flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {path.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1.5 h-4 w-4" />
                      {path.skills.reduce(
                        (acc, skill) => acc + skill.estimatedHours,
                        0
                      )}{' '}
                      hours
                    </div>
                  </div>
                </div>
                <Award
                  className={`h-8 w-8 ${
                    path.rating >= 4.5
                      ? 'text-yellow-400'
                      : 'text-gray-400'
                  }`}
                />
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                {path.description}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Skills you'll learn:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill) => (
                    <span
                      key={skill.skillId}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {skill.skillId}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-500">
                  <Users className="mr-1.5 h-4 w-4" />
                  {path.completions.toLocaleString()} learners
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 font-medium text-gray-900">
                    {path.rating}
                  </span>
                  <span className="mx-1 text-gray-500">•</span>
                  <span className="text-gray-500">
                    {path.reviews} reviews
                  </span>
                </div>
              </div>

              {/* Creator */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://via.placeholder.com/32"
                    alt="Creator"
                  />
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">
                      Created by Expert
                    </p>
                    <p className="text-gray-500">
                      {path.creator.expertise[0]}
                    </p>
                  </div>
                </div>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Start Learning
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </button>
              </div>

              {/* Progress (if enrolled) */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="mr-1.5 h-4 w-4" />
                    <span>2/8 modules completed</span>
                  </div>
                  <span className="font-medium">25%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;
