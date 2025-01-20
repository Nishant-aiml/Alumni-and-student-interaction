import React from 'react';
import {
  Filter,
  Briefcase,
  Star,
  Clock,
  Video,
  MessageSquare,
  Mail,
  Tag,
  Building,
} from 'lucide-react';
import { MentorshipFilters as MentorshipFiltersType } from '../../types/mentorship';

interface MentorshipFiltersProps {
  filters: MentorshipFiltersType;
  onChange: (filters: MentorshipFiltersType) => void;
}

const MentorshipFilters: React.FC<MentorshipFiltersProps> = ({
  filters,
  onChange,
}) => {
  const expertiseAreas = [
    'Full Stack Development',
    'System Design',
    'Machine Learning',
    'Cloud Architecture',
    'DevOps',
    'Mobile Development',
    'Product Management',
    'UI/UX Design',
    'Data Science',
    'Cybersecurity',
  ];

  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'E-commerce',
    'Education',
    'Manufacturing',
    'Consulting',
  ];

  const experienceLevels = [
    { value: [0, 3], label: '0-3 years' },
    { value: [4, 7], label: '4-7 years' },
    { value: [8, 12], label: '8-12 years' },
    { value: [13, 100], label: '13+ years' },
  ];

  const availabilitySlots = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const communicationModes = [
    { value: 'video', label: 'Video Call', icon: Video },
    { value: 'chat', label: 'Chat', icon: MessageSquare },
    { value: 'email', label: 'Email', icon: Mail },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={() =>
            onChange({
              expertise: [],
              industries: [],
              experience: [],
              availability: [],
              rating: 0,
              communicationMode: [],
              search: '',
            })
          }
          className="text-sm text-purple-600 hover:text-purple-500"
        >
          Clear all
        </button>
      </div>

      {/* Expertise */}
      <div>
        <div className="flex items-center mb-4">
          <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
        </div>
        <div className="space-y-2">
          {expertiseAreas.map((area) => (
            <label key={area} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.expertise.includes(area)}
                onChange={(e) => {
                  const newExpertise = e.target.checked
                    ? [...filters.expertise, area]
                    : filters.expertise.filter((a) => a !== area);
                  onChange({ ...filters, expertise: newExpertise });
                }}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{area}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div>
        <div className="flex items-center mb-4">
          <Building className="h-5 w-5 text-gray-400 mr-2" />
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
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{industry}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center mb-4">
          <Clock className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Experience</h4>
        </div>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level.label} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.experience.some(
                  (e) => e[0] === level.value[0] && e[1] === level.value[1]
                )}
                onChange={(e) => {
                  const newExperience = e.target.checked
                    ? [...filters.experience, level.value]
                    : filters.experience.filter(
                        (exp) =>
                          exp[0] !== level.value[0] || exp[1] !== level.value[1]
                      );
                  onChange({ ...filters, experience: newExperience });
                }}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{level.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <div className="flex items-center mb-4">
          <Clock className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Availability</h4>
        </div>
        <div className="space-y-2">
          {availabilitySlots.map((slot) => (
            <label key={slot.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.availability.includes(slot.value)}
                onChange={(e) => {
                  const newAvailability = e.target.checked
                    ? [...filters.availability, slot.value]
                    : filters.availability.filter((a) => a !== slot.value);
                  onChange({ ...filters, availability: newAvailability });
                }}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">{slot.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Communication Mode */}
      <div>
        <div className="flex items-center mb-4">
          <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">
            Communication Mode
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {communicationModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.value}
                onClick={() => {
                  const newModes = filters.communicationMode.includes(mode.value)
                    ? filters.communicationMode.filter((m) => m !== mode.value)
                    : [...filters.communicationMode, mode.value];
                  onChange({ ...filters, communicationMode: newModes });
                }}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm ${
                  filters.communicationMode.includes(mode.value)
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4 mr-1" />
                {mode.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rating */}
      <div>
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-gray-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">Minimum Rating</h4>
        </div>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={(e) =>
            onChange({ ...filters, rating: parseFloat(e.target.value) })
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="mt-2 text-sm text-gray-600">
          {filters.rating} stars and above
        </div>
      </div>
    </div>
  );
};

export default MentorshipFilters;
