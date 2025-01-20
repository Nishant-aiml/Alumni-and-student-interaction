import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  Users, Sparkles, Calendar, Clock, BarChart,
  BookOpen, MessageSquare, Target, Award
} from 'lucide-react';
import MentorCard from '../components/mentorship/MentorCard';
import MentorshipFilters from '../components/mentorship/MentorshipFilters';
import MentorshipMatches from '../components/mentorship/MentorshipMatches';
import MentorshipProgress from '../components/mentorship/MentorshipProgress';
import { MentorshipFilters as MentorshipFiltersType } from '../types/mentorship';

const Mentorship = () => {
  const [filters, setFilters] = useState<MentorshipFiltersType>({
    expertise: [],
    industries: [],
    experience: [],
    availability: [],
    rating: 0,
    communicationMode: [],
    search: '',
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold leading-7 sm:text-4xl sm:truncate">
                Mentorship Hub
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm">
                  <Users className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  500+ Active Mentors
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <Sparkles className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  AI-Powered Matching
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50">
                Find a Mentor
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-purple-700">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <MentorshipFilters filters={filters} onChange={setFilters} />
          </div>

          {/* Mentorship Content */}
          <div className="flex-1">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Mentorships</p>
                    <p className="text-2xl font-semibold text-gray-900">248</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-2xl font-semibold text-gray-900">92%</p>
                  </div>
                  <BarChart className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Hours</p>
                    <p className="text-2xl font-semibold text-gray-900">1.2K</p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Avg. Rating</p>
                    <p className="text-2xl font-semibold text-gray-900">4.8</p>
                  </div>
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tab.Group>
              <Tab.List className="flex space-x-4 border-b border-gray-200">
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Recommended Matches
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  My Mentorships
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Progress & Goals
                </Tab>
              </Tab.List>

              <Tab.Panels className="mt-8">
                {/* Recommended Matches */}
                <Tab.Panel>
                  <MentorshipMatches />
                </Tab.Panel>

                {/* My Mentorships */}
                <Tab.Panel>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Active Mentorships
                      </h3>
                      <div className="space-y-6">
                        <MentorCard />
                        <MentorCard />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Past Mentorships
                      </h3>
                      <div className="space-y-6">
                        <MentorCard />
                      </div>
                    </div>
                  </div>
                </Tab.Panel>

                {/* Progress & Goals */}
                <Tab.Panel>
                  <MentorshipProgress />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
