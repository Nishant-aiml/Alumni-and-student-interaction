import React from 'react';
import { Search, Filter, MapPin, Star, Clock, CheckCircle } from 'lucide-react';
import { SkillTradeFilters as SkillTradeFiltersType } from '../../types/skillTrade';

interface SkillTradeFiltersProps {
  filters: SkillTradeFiltersType;
  onChange: (filters: SkillTradeFiltersType) => void;
}

const SkillTradeFilters: React.FC<SkillTradeFiltersProps> = ({
  filters,
  onChange,
}) => {
  const skillCategories = [
    'Programming',
    'Design',
    'Marketing',
    'Business',
    'Music',
    'Language',
    'Art',
    'Fitness',
  ];

  const skillLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' },
  ];

  const availabilityDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const timeRanges = [
    'Morning (6AM-12PM)',
    'Afternoon (12PM-5PM)',
    'Evening (5PM-10PM)',
    'Night (10PM-6AM)',
  ];

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search skills..."
            value={filters.search}
            onChange={(e) =>
              onChange({ ...filters, search: e.target.value })
            }
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {skillCategories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={filters.categories.includes(category)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category]
                    : filters.categories.filter((c) => c !== category);
                  onChange({ ...filters, categories: newCategories });
                }}
              />
              <span className="ml-2 text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skill Level */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Skill Level</h3>
        <div className="space-y-2">
          {skillLevels.map((level) => (
            <label key={level.value} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={filters.skillLevels.includes(level.value as any)}
                onChange={(e) => {
                  const newLevels = e.target.checked
                    ? [...filters.skillLevels, level.value as any]
                    : filters.skillLevels.filter((l) => l !== level.value);
                  onChange({ ...filters, skillLevels: newLevels });
                }}
              />
              <span className="ml-2 text-sm text-gray-700">{level.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-2">Days</h4>
            <div className="space-y-2">
              {availabilityDays.map((day) => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={filters.availability.days.includes(day)}
                    onChange={(e) => {
                      const newDays = e.target.checked
                        ? [...filters.availability.days, day]
                        : filters.availability.days.filter((d) => d !== day);
                      onChange({
                        ...filters,
                        availability: { ...filters.availability, days: newDays },
                      });
                    }}
                  />
                  <span className="ml-2 text-sm text-gray-700">{day}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-2">Time</h4>
            <div className="space-y-2">
              {timeRanges.map((time) => (
                <label key={time} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={filters.availability.timeRanges.includes(time)}
                    onChange={(e) => {
                      const newTimes = e.target.checked
                        ? [...filters.availability.timeRanges, time]
                        : filters.availability.timeRanges.filter(
                            (t) => t !== time
                          );
                      onChange({
                        ...filters,
                        availability: {
                          ...filters.availability,
                          timeRanges: newTimes,
                        },
                      });
                    }}
                  />
                  <span className="ml-2 text-sm text-gray-700">{time}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Additional Filters
        </h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={filters.verified}
              onChange={(e) =>
                onChange({ ...filters, verified: e.target.checked })
              }
            />
            <span className="ml-2 text-sm text-gray-700">
              Verified Users Only
            </span>
          </label>
        </div>
      </div>

      {/* Reset Filters */}
      <div className="pt-4">
        <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onClick={() =>
            onChange({
              search: '',
              categories: [],
              skillLevels: [],
              availability: {
                days: [],
                timeRanges: [],
              },
              verified: false,
            })
          }
        >
          <Filter className="mr-2 h-4 w-4" />
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SkillTradeFilters;
