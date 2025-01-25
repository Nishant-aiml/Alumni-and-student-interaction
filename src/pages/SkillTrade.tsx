import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  Sparkles,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Star,
  BarChart,
  Clock,
} from 'lucide-react';
import SkillTradeCard from '../components/skillTrade/SkillTradeCard';
import SkillTradeFilters from '../components/skillTrade/SkillTradeFilters';
import SkillRankings from '../components/skillTrade/SkillRankings';
import LearningPaths from '../components/skillTrade/LearningPaths';
import SuccessStories from '../components/skillTrade/SuccessStories';
import { SkillTradeFilters as SkillTradeFiltersType } from '../types/skillTrade';

const SkillTrade = () => {
  const [filters, setFilters] = useState<SkillTradeFiltersType>({
    search: '',
    categories: [],
    skillLevels: [],
    availability: {
      days: [],
      timeRanges: [],
    },
    verified: false,
  });

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold leading-7 sm:text-4xl sm:truncate">
                Skill Trade Marketplace
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm">
                  <Users className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  2,500+ Active Users
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <Award className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  1,000+ Skills Available
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <Sparkles className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  AI-Powered Matching
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-800 text-white hover:bg-gray-700">
                List a Skill
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-800">
                Find a Trade
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
            <SkillTradeFilters filters={filters} onChange={setFilters} />
          </div>

          {/* Skill Trade Content */}
          <div className="flex-1">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Active Trades</p>
                    <p className="text-2xl font-semibold text-white">28</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Skills Learned</p>
                    <p className="text-2xl font-semibold text-white">15</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-green-400" />
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Rating</p>
                    <p className="text-2xl font-semibold text-white">4.8</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Hours Traded</p>
                    <p className="text-2xl font-semibold text-white">120</p>
                  </div>
                  <Clock className="h-8 w-8 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tab.Group>
              <div className="border-b border-gray-200 overflow-x-auto">
                <Tab.List className="flex space-x-4 min-w-max">
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } flex items-center whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm`
                    }
                  >
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="hidden md:inline">Available Trades</span>
                    <span className="md:hidden">Trades</span>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } flex items-center whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm`
                    }
                  >
                    <BarChart className="h-5 w-5 mr-2" />
                    <span className="hidden md:inline">Skill Rankings</span>
                    <span className="md:hidden">Rankings</span>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } flex items-center whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm`
                    }
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span className="hidden md:inline">Learning Paths</span>
                    <span className="md:hidden">Learning</span>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } flex items-center whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm`
                    }
                  >
                    <Star className="h-5 w-5 mr-2" />
                    <span className="hidden md:inline">Success Stories</span>
                    <span className="md:hidden">Success</span>
                  </Tab>
                </Tab.List>
              </div>

              <Tab.Panels className="mt-8">
                {/* Available Trades */}
                <Tab.Panel>
                  <div className="space-y-6">
                    <SkillTradeCard />
                    <SkillTradeCard />
                    <SkillTradeCard />
                  </div>
                </Tab.Panel>

                {/* Skill Rankings */}
                <Tab.Panel>
                  <SkillRankings />
                </Tab.Panel>

                {/* Learning Paths */}
                <Tab.Panel>
                  <LearningPaths />
                </Tab.Panel>

                {/* Success Stories */}
                <Tab.Panel>
                  <SuccessStories />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTrade;
