import React from 'react';
import {
  ArrowRightLeft,
  Clock,
  Star,
  Users,
  Award,
  Calendar,
  MessageSquare,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const SkillTradeCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://via.placeholder.com/48"
                alt="User avatar"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Web Development for UI/UX Design
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Verified
                </span>
              </div>
              <div className="mt-1 flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">
                  John Smith
                </span>
                <span className="text-gray-500">•</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-500">4.9</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-500">50+ trades</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Details */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          {/* Offering */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0">
                <div className="p-1 bg-blue-100 rounded">
                  <ArrowRightLeft className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">Offering</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Web Development</h4>
              <p className="mt-1 text-sm text-gray-500">
                Frontend development with React, Next.js, and modern web
                technologies
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Looking For */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0">
                <div className="p-1 bg-purple-100 rounded">
                  <ArrowRightLeft className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                Looking For
              </span>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900">UI/UX Design</h4>
              <p className="mt-1 text-sm text-gray-500">
                Design principles, user research, and prototyping with Figma
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Figma', 'UI Design', 'User Research'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="mr-1.5 h-4 w-4" />
              2 hours/week
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              Flexible schedule
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-1.5 h-4 w-4" />
              Online sessions
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              View Details
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
              Propose Trade
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Match Score */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">
                95% Match with your profile
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="mr-1.5 h-4 w-4" />
                12 interested
              </div>
              <div className="flex items-center">
                <Award className="mr-1.5 h-4 w-4" />
                Top rated trader
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTradeCard;
