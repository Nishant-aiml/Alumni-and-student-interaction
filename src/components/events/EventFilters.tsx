import React from 'react';
import { Filter, Calendar, MapPin, Tag, Users, Video } from 'lucide-react';
import { EventFilters as EventFiltersType } from '../../types/events';

interface EventFiltersProps {
  filters: EventFiltersType;
  onChange: (filters: EventFiltersType) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({ filters, onChange }) => {
  const eventTypes = [
    { id: 'workshop', label: 'Workshops', icon: Users },
    { id: 'meetup', label: 'Meetups', icon: Users },
    { id: 'seminar', label: 'Seminars', icon: Users },
    { id: 'career_fair', label: 'Career Fairs', icon: Users },
    { id: 'networking', label: 'Networking', icon: Users },
  ];

  const eventFormats = [
    { id: 'in_person', label: 'In Person', icon: MapPin },
    { id: 'virtual', label: 'Virtual', icon: Video },
    { id: 'hybrid', label: 'Hybrid', icon: Users },
  ];

  const popularTags = [
    'Technology',
    'Career Development',
    'Leadership',
    'Entrepreneurship',
    'Innovation',
    'AI/ML',
    'Blockchain',
    'Web3',
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={() =>
            onChange({
              search: '',
              types: [],
              formats: [],
              dateRange: {
                start: '',
                end: '',
              },
              tags: [],
            })
          }
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Clear all
        </button>
      </div>

      {/* Date Range */}
      <div>
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Date Range</h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">From</label>
            <input
              type="date"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={filters.dateRange.start}
              onChange={(e) =>
                onChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, start: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">To</label>
            <input
              type="date"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={filters.dateRange.end}
              onChange={(e) =>
                onChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, end: e.target.value },
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div>
        <div className="flex items-center mb-4">
          <Users className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Event Type</h4>
        </div>
        <div className="space-y-2">
          {eventTypes.map((type) => (
            <label key={type.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.types.includes(type.id as any)}
                onChange={(e) => {
                  const newTypes = e.target.checked
                    ? [...filters.types, type.id]
                    : filters.types.filter((t) => t !== type.id);
                  onChange({ ...filters, types: newTypes as any[] });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Event Format */}
      <div>
        <div className="flex items-center mb-4">
          <Video className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Event Format</h4>
        </div>
        <div className="space-y-2">
          {eventFormats.map((format) => (
            <label key={format.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.formats.includes(format.id as any)}
                onChange={(e) => {
                  const newFormats = e.target.checked
                    ? [...filters.formats, format.id]
                    : filters.formats.filter((f) => f !== format.id);
                  onChange({ ...filters, formats: newFormats as any[] });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{format.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div>
        <div className="flex items-center mb-4">
          <Tag className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Popular Tags</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                const newTags = filters.tags.includes(tag)
                  ? filters.tags.filter((t) => t !== tag)
                  : [...filters.tags, tag];
                onChange({ ...filters, tags: newTags });
              }}
              className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium ${
                filters.tags.includes(tag)
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventFilters;
