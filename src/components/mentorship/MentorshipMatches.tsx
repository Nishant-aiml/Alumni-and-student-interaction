import React from 'react';
import { Sparkles } from 'lucide-react';
import MentorCard from './MentorCard';

const MentorshipMatches = () => {
  return (
    <div className="space-y-8">
      {/* AI Match Explanation */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              AI-Powered Mentor Matching
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Our AI analyzes your profile, goals, and preferences to find the most
              compatible mentors. These recommendations are based on expertise
              alignment, industry experience, and successful mentorship patterns.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="relative rounded-lg border border-purple-200 bg-white px-4 py-3">
                <div className="text-sm font-medium text-purple-600">
                  Skills Match
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  95%
                </div>
              </div>
              <div className="relative rounded-lg border border-purple-200 bg-white px-4 py-3">
                <div className="text-sm font-medium text-purple-600">
                  Industry Alignment
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  92%
                </div>
              </div>
              <div className="relative rounded-lg border border-purple-200 bg-white px-4 py-3">
                <div className="text-sm font-medium text-purple-600">
                  Availability Match
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  88%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Matches */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Best Matches</h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="relative">
            <div className="absolute -left-4 top-4">
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-600">98%</span>
              </div>
            </div>
            <MentorCard />
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-4">
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-600">95%</span>
              </div>
            </div>
            <MentorCard />
          </div>
        </div>
      </div>

      {/* Other Great Matches */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Other Great Matches
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>

      {/* Match Preferences */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Your Match Preferences
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Preferred Industries
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Technology
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Finance
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Key Skills Focus
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Full Stack
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Cloud
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Experience Level
            </div>
            <div className="text-sm text-gray-900">8+ years</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">Availability</div>
            <div className="text-sm text-gray-900">Evenings & Weekends</div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="text-sm text-purple-600 hover:text-purple-500">
            Update Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipMatches;
