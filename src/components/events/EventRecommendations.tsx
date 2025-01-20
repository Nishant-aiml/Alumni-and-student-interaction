import React from 'react';
import { Sparkles, TrendingUp, Users } from 'lucide-react';
import EventCard from './EventCard';

const EventRecommendations = () => {
  return (
    <div className="space-y-8">
      {/* Personalized Recommendations */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          <h3 className="text-lg font-medium text-gray-900">
            Recommended for You
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      {/* Trending Events */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="h-5 w-5 text-red-500" />
          <h3 className="text-lg font-medium text-gray-900">Trending Events</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      {/* Events from Your Network */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Users className="h-5 w-5 text-indigo-500" />
          <h3 className="text-lg font-medium text-gray-900">
            From Your Network
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      {/* AI-Powered Suggestions */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Why We Recommend These Events
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Our AI analyzes your profile, interests, and past event attendance to
            suggest events that align with your career goals and interests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-indigo-600 font-medium mb-1">
                Industry Match
              </div>
              <div className="text-sm text-gray-600">
                Events from your industry and related fields
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-indigo-600 font-medium mb-1">
                Skill Development
              </div>
              <div className="text-sm text-gray-600">
                Events that help you grow your skillset
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-indigo-600 font-medium mb-1">
                Network Growth
              </div>
              <div className="text-sm text-gray-600">
                Events attended by professionals in your network
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRecommendations;
