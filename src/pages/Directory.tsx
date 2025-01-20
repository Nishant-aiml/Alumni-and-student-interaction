import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { 
  Search, Filter, MapPin, Users, Building2, 
  Briefcase, GraduationCap, Award, Globe,
  TrendingUp, UserPlus, MessageSquare
} from 'lucide-react';
import DirectoryMap from '../components/directory/DirectoryMap';
import DirectoryFilters from '../components/directory/DirectoryFilters';
import AlumniCard from '../components/directory/AlumniCard';
import CompanyInsights from '../components/directory/CompanyInsights';
import AlumniGroups from '../components/directory/AlumniGroups';
import DirectoryStats from '../components/directory/DirectoryStats';
import { AlumniFilters, AlumniStats } from '../types/directory';

const mockStats: AlumniStats = {
  totalAlumni: 15000,
  totalCompanies: 2500,
  totalCountries: 45,
  topIndustries: [
    { name: 'Technology', count: 5000 },
    { name: 'Finance', count: 3000 },
    { name: 'Healthcare', count: 2000 },
  ],
  topSkills: [
    { name: 'Software Development', count: 4000 },
    { name: 'Data Science', count: 3000 },
    { name: 'Product Management', count: 2500 },
  ],
  batchDistribution: [
    { year: 2023, count: 500 },
    { year: 2022, count: 480 },
    { year: 2021, count: 450 },
  ],
};

const Directory = () => {
  const [filters, setFilters] = useState<AlumniFilters>({
    search: '',
    batch: [],
    industries: [],
    skills: [],
    locations: [],
    roles: [],
    availability: {
      forMentoring: false,
      forJobs: false,
      forProjects: false,
    },
    sortBy: 'relevance',
  });

  const [view, setView] = useState<'grid' | 'map'>('grid');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Stats Overview */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DirectoryStats stats={mockStats} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <DirectoryFilters filters={filters} onChange={setFilters} />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search and View Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search alumni by name, company, role, or skills..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-md ${
                    view === 'grid'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Users className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setView('map')}
                  className={`p-2 rounded-md ${
                    view === 'map'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Globe className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <Tab.Group>
              <Tab.List className="flex space-x-4 border-b border-gray-200 mb-6">
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`
                  }
                >
                  <Users className="h-5 w-5 mr-2" />
                  All Alumni
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`
                  }
                >
                  <Building2 className="h-5 w-5 mr-2" />
                  Company Insights
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${
                      selected
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`
                  }
                >
                  <Users className="h-5 w-5 mr-2" />
                  Alumni Groups
                </Tab>
              </Tab.List>

              <Tab.Panels>
                {/* All Alumni */}
                <Tab.Panel>
                  {view === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AlumniCard />
                      <AlumniCard />
                      <AlumniCard />
                      {/* Add more AlumniCards */}
                    </div>
                  ) : (
                    <DirectoryMap />
                  )}
                </Tab.Panel>

                {/* Company Insights */}
                <Tab.Panel>
                  <CompanyInsights />
                </Tab.Panel>

                {/* Alumni Groups */}
                <Tab.Panel>
                  <AlumniGroups />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
