import React from 'react';
import {
  Briefcase,
  MapPin,
  Monitor,
  Star,
  Clock,
  Building2,
  DollarSign,
} from 'lucide-react';
import { CareerFilters as CareerFiltersType } from '../../types/career';

interface CareerFiltersProps {
  filters: CareerFiltersType;
  onChange: (filters: CareerFiltersType) => void;
}

const CareerFilters: React.FC<CareerFiltersProps> = ({ filters, onChange }) => {
  const jobTypes = [
    { value: 'full_time', label: 'Full Time' },
    { value: 'part_time', label: 'Part Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'remote', label: 'Remote' },
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level' },
    { value: 'mid', label: 'Mid Level' },
    { value: 'senior', label: 'Senior Level' },
    { value: 'lead', label: 'Lead' },
    { value: 'executive', label: 'Executive' },
  ];

  const skills = [
    'JavaScript',
    'Python',
    'Java',
    'React',
    'Node.js',
    'AWS',
    'DevOps',
    'UI/UX',
    'Product Management',
    'Data Science',
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
              locations: [],
              remote: false,
              experience: [],
              skills: [],
              salary: {},
              companies: [],
              postedWithin: 30,
            })
          }
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          Clear all
        </button>
      </div>

      {/* Job Type */}
      <div>
        <div className="flex items-center mb-4">
          <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Job Type</h4>
        </div>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.types.includes(type.value as any)}
                onChange={(e) => {
                  const newTypes = e.target.checked
                    ? [...filters.types, type.value as any]
                    : filters.types.filter((t) => t !== type.value);
                  onChange({ ...filters, types: newTypes });
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Experience Level</h4>
        </div>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.experience.includes(level.value as any)}
                onChange={(e) => {
                  const newExperience = e.target.checked
                    ? [...filters.experience, level.value as any]
                    : filters.experience.filter((exp) => exp !== level.value);
                  onChange({ ...filters, experience: newExperience });
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{level.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center mb-4">
          <Monitor className="h-5 w-5 text-gray-400 mr-2" />
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
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div>
        <div className="flex items-center mb-4">
          <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Salary Range</h4>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Minimum</label>
            <input
              type="number"
              value={filters.salary.min || ''}
              onChange={(e) =>
                onChange({
                  ...filters,
                  salary: { ...filters.salary, min: Number(e.target.value) },
                })
              }
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Min salary"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Maximum</label>
            <input
              type="number"
              value={filters.salary.max || ''}
              onChange={(e) =>
                onChange({
                  ...filters,
                  salary: { ...filters.salary, max: Number(e.target.value) },
                })
              }
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Max salary"
            />
          </div>
        </div>
      </div>

      {/* Posted Within */}
      <div>
        <div className="flex items-center mb-4">
          <Clock className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Posted Within</h4>
        </div>
        <select
          value={filters.postedWithin}
          onChange={(e) =>
            onChange({ ...filters, postedWithin: Number(e.target.value) })
          }
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value={1}>24 hours</option>
          <option value={7}>Last week</option>
          <option value={14}>Last 2 weeks</option>
          <option value={30}>Last month</option>
          <option value={90}>Last 3 months</option>
        </select>
      </div>
    </div>
  );
};

export default CareerFilters;
