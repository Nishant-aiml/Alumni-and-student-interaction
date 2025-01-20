import React from 'react';
import { Filter, GraduationCap, Briefcase, MapPin, Award, Users } from 'lucide-react';
import { AlumniFilters } from '../../types/directory';

interface DirectoryFiltersProps {
  filters: AlumniFilters;
  onChange: (filters: AlumniFilters) => void;
}

const DirectoryFilters: React.FC<DirectoryFiltersProps> = ({ filters, onChange }) => {
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
  
  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Consulting',
    'Entertainment',
    'Retail',
  ];

  const skills = [
    'Software Development',
    'Data Science',
    'Product Management',
    'Marketing',
    'Sales',
    'Design',
    'Research',
    'Operations',
  ];

  const locations = [
    'North America',
    'Europe',
    'Asia',
    'Australia',
    'Africa',
    'South America',
  ];

  const roles = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'Designer',
    'Marketing Manager',
    'Sales Executive',
    'Researcher',
    'Founder',
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={() => onChange({
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
          })}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Clear all
        </button>
      </div>

      {/* Batch Filter */}
      <div>
        <div className="flex items-center mb-4">
          <GraduationCap className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Graduation Year</h4>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                const newBatch = filters.batch.includes(year)
                  ? filters.batch.filter((y) => y !== year)
                  : [...filters.batch, year];
                onChange({ ...filters, batch: newBatch });
              }}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                filters.batch.includes(year)
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div>
        <div className="flex items-center mb-4">
          <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Industries</h4>
        </div>
        <div className="space-y-2">
          {industries.map((industry) => (
            <label key={industry} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.industries.includes(industry)}
                onChange={(e) => {
                  const newIndustries = e.target.checked
                    ? [...filters.industries, industry]
                    : filters.industries.filter((i) => i !== industry);
                  onChange({ ...filters, industries: newIndustries });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{industry}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skills Filter */}
      <div>
        <div className="flex items-center mb-4">
          <Award className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Skills</h4>
        </div>
        <div className="space-y-2">
          {skills.map((skill) => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.skills.includes(skill)}
                onChange={(e) => {
                  const newSkills = e.target.checked
                    ? [...filters.skills, skill]
                    : filters.skills.filter((s) => s !== skill);
                  onChange({ ...filters, skills: newSkills });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Locations</h4>
        </div>
        <div className="space-y-2">
          {locations.map((location) => (
            <label key={location} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.locations.includes(location)}
                onChange={(e) => {
                  const newLocations = e.target.checked
                    ? [...filters.locations, location]
                    : filters.locations.filter((l) => l !== location);
                  onChange({ ...filters, locations: newLocations });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <div className="flex items-center mb-4">
          <Users className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Availability</h4>
        </div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.availability.forMentoring}
              onChange={(e) => {
                onChange({
                  ...filters,
                  availability: { ...filters.availability, forMentoring: e.target.checked },
                });
              }}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Available for Mentoring</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.availability.forJobs}
              onChange={(e) => {
                onChange({
                  ...filters,
                  availability: { ...filters.availability, forJobs: e.target.checked },
                });
              }}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Open to Job Opportunities</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.availability.forProjects}
              onChange={(e) => {
                onChange({
                  ...filters,
                  availability: { ...filters.availability, forProjects: e.target.checked },
                });
              }}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Interested in Projects</span>
          </label>
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Sort By</h4>
        </div>
        <select
          value={filters.sortBy}
          onChange={(e) => onChange({ ...filters, sortBy: e.target.value as AlumniFilters['sortBy'] })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="relevance">Relevance</option>
          <option value="name">Name</option>
          <option value="batch">Graduation Year</option>
          <option value="connections">Connections</option>
          <option value="activity">Recent Activity</option>
        </select>
      </div>
    </div>
  );
};

export default DirectoryFilters;
