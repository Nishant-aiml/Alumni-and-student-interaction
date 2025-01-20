import React from 'react';
import {
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  Calendar,
  BookOpen,
  Award,
  Star,
} from 'lucide-react';

const MentorshipProgress = () => {
  return (
    <div className="space-y-8">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Overall Progress</h3>
            <Target className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">78%</div>
          <div className="text-purple-100">
            Great progress! You're on track to achieve your goals.
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Skills Growth</h3>
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">System Design</span>
                <span className="text-gray-900 font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Leadership</span>
                <span className="text-gray-900 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Time Invested</h3>
            <Clock className="h-6 w-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
          <div className="text-gray-500">Total mentorship hours</div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Sessions</div>
              <div className="text-gray-900 font-medium">12</div>
            </div>
            <div>
              <div className="text-gray-500">Avg. Duration</div>
              <div className="text-gray-900 font-medium">2h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals & Milestones */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Goals & Milestones
        </h3>
        <div className="space-y-6">
          <div className="relative pb-8">
            <div className="absolute left-4 -ml-px h-full w-0.5 bg-gray-200" />
            <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center ring-8 ring-white">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Master System Design Principles
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Completed 4 system design exercises
                  </p>
                </div>
                <div className="mt-2 text-sm text-green-600">Completed</div>
              </div>
            </div>
          </div>
          <div className="relative pb-8">
            <div className="absolute left-4 -ml-px h-full w-0.5 bg-gray-200" />
            <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center ring-8 ring-white">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Lead a Technical Team
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    In progress - Learning team management skills
                  </p>
                </div>
                <div className="mt-2 text-sm text-blue-600">In Progress (65%)</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center ring-8 ring-white">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Cloud Architecture Certification
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Upcoming goal - Starting next month
                  </p>
                </div>
                <div className="mt-2 text-sm text-gray-500">Not Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Upcoming Sessions
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <Calendar className="h-6 w-6 text-purple-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  System Design Review
                </div>
                <div className="text-sm text-gray-500">Tomorrow, 2:00 PM</div>
              </div>
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-500">
              Join Call
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <Calendar className="h-6 w-6 text-purple-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Leadership Workshop
                </div>
                <div className="text-sm text-gray-500">Friday, 10:00 AM</div>
              </div>
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-500">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Resources & Materials */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Resources & Materials
          </h3>
          <button className="text-sm text-purple-600 hover:text-purple-500">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-purple-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  System Design Guide
                </div>
                <div className="text-xs text-gray-500">PDF • 2.5 MB</div>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-purple-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Leadership Principles
                </div>
                <div className="text-xs text-gray-500">Video • 45 min</div>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-purple-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Case Studies
                </div>
                <div className="text-xs text-gray-500">ZIP • 15 MB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-3">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="text-sm font-medium text-gray-900">
              Fast Learner
            </div>
            <div className="text-xs text-gray-500">
              Completed 5 skills in record time
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-3">
              <Star className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-sm font-medium text-gray-900">
              Top Performer
            </div>
            <div className="text-xs text-gray-500">
              Consistently high progress rates
            </div>
          </div>
          {/* Add more achievements */}
        </div>
      </div>
    </div>
  );
};

export default MentorshipProgress;
