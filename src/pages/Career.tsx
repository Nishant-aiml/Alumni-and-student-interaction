import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  Briefcase,
  Search,
  Building2,
  BarChart,
  FileText,
  Users,
  Sparkles,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import JobCard from '../components/career/JobCard';
import CareerFilters from '../components/career/CareerFilters';
import ApplicationTracker from '../components/career/ApplicationTracker';
import ResumeBuilder from '../components/career/ResumeBuilder';
import InterviewPrep from '../components/career/InterviewPrep';
import { CareerFilters as CareerFiltersType } from '../types/career';

const Career = () => {
  const [filters, setFilters] = useState<CareerFiltersType>({
    search: '',
    types: [],
    locations: [],
    remote: false,
    experience: [],
    skills: [],
    salary: {},
    companies: [],
    postedWithin: 30,
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold leading-7 sm:text-4xl sm:truncate">
                Career Center
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm">
                  <Briefcase className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  1,500+ Open Positions
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <Building2 className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  500+ Companies
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <Sparkles className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  AI-Powered Matching
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50">
                Upload Resume
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700">
                Post a Job
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
            <CareerFilters filters={filters} onChange={setFilters} />
          </div>

          {/* Career Content */}
          <div className="flex-1">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Applications</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                  <Briefcase className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Interviews</p>
                    <p className="text-2xl font-semibold text-gray-900">4</p>
                  </div>
                  <Users className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Profile Views</p>
                    <p className="text-2xl font-semibold text-gray-900">156</p>
                  </div>
                  <BarChart className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Match Score</p>
                    <p className="text-2xl font-semibold text-gray-900">85%</p>
                  </div>
                  <Sparkles className="h-8 w-8 text-yellow-500" />
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
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Job Board
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Applications
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Resume
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Interview Prep
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  Internships
                </Tab>
              </Tab.List>

              <Tab.Panels className="mt-8">
                {/* Job Board */}
                <Tab.Panel>
                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search jobs by title, company, or keywords..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        value={filters.search}
                        onChange={(e) =>
                          setFilters({ ...filters, search: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                  </div>
                </Tab.Panel>

                {/* Applications */}
                <Tab.Panel>
                  <ApplicationTracker />
                </Tab.Panel>

                {/* Resume */}
                <Tab.Panel>
                  <ResumeBuilder />
                </Tab.Panel>

                {/* Interview Prep */}
                <Tab.Panel>
                  <InterviewPrep />
                </Tab.Panel>

                {/* Internships */}
                <Tab.Panel>
                  <div className="space-y-6">
                    <JobCard isInternship />
                    <JobCard isInternship />
                    <JobCard isInternship />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
