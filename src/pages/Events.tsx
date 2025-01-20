import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { 
  Calendar, MapPin, Users, Clock, Filter,
  ChevronLeft, ChevronRight, Search, Globe,
  Laptop, Users2
} from 'lucide-react';
import EventCalendar from '../components/events/EventCalendar';
import EventCard from '../components/events/EventCard';
import EventFilters from '../components/events/EventFilters';
import EventRecommendations from '../components/events/EventRecommendations';
import { Event, EventFilters as EventFilterType } from '../types/events';

const Events = () => {
  const [view, setView] = useState<'grid' | 'calendar'>('grid');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [filters, setFilters] = useState<EventFilterType>({
    search: '',
    types: [],
    formats: [],
    dateRange: {
      start: '',
      end: '',
    },
    tags: [],
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold leading-7 sm:text-4xl sm:truncate">
                Alumni Events
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm">
                  <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  Upcoming Events
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <Users className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  500+ Registered
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50">
                Host an Event
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
            <EventFilters filters={filters} onChange={setFilters} />
          </div>

          {/* Events Content */}
          <div className="flex-1">
            {/* Search and View Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search events by title, speaker, or location..."
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
                  <Users2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setView('calendar')}
                  className={`p-2 rounded-md ${
                    view === 'calendar'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Event Categories */}
            <div className="mb-8">
              <Tab.Group>
                <Tab.List className="flex space-x-4 border-b border-gray-200">
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                    }
                  >
                    All Events
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                    }
                  >
                    My Events
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `${
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                    }
                  >
                    Recommended
                  </Tab>
                </Tab.List>

                <Tab.Panels className="mt-8">
                  {/* All Events */}
                  <Tab.Panel>
                    {view === 'grid' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        {/* Add more EventCards */}
                      </div>
                    ) : (
                      <EventCalendar />
                    )}
                  </Tab.Panel>

                  {/* My Events */}
                  <Tab.Panel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <EventCard />
                      <EventCard />
                      {/* Add more EventCards */}
                    </div>
                  </Tab.Panel>

                  {/* Recommended Events */}
                  <Tab.Panel>
                    <EventRecommendations />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
