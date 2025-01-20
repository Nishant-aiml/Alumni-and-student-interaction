import React from 'react';
import { Building2, MapPin, Users, TrendingUp, ExternalLink } from 'lucide-react';
import { CompanyInsight } from '../../types/directory';

const mockCompanies: CompanyInsight[] = [
  {
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    industry: 'Technology',
    alumniCount: 150,
    roles: ['Software Engineer', 'Product Manager', 'Data Scientist'],
    locations: ['Mountain View', 'New York', 'London'],
    recentHires: [
      {
        name: 'John Doe',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Senior Software Engineer',
        year: 2023,
      },
      {
        name: 'Jane Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Product Manager',
        year: 2023,
      },
    ],
  },
  // Add more companies here
];

const CompanyInsights = () => {
  return (
    <div className="space-y-8">
      {/* Company Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCompanies.map((company) => (
          <div key={company.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Company Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.industry}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Company Stats */}
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  Alumni
                </div>
                <p className="text-lg font-semibold text-gray-900">{company.alumniCount}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Locations
                </div>
                <p className="text-lg font-semibold text-gray-900">{company.locations.length}</p>
              </div>
            </div>

            {/* Recent Hires */}
            <div className="p-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Recent Hires</h4>
              <div className="space-y-4">
                {company.recentHires.map((hire) => (
                  <div key={hire.name} className="flex items-center space-x-3">
                    <img
                      src={hire.avatarUrl}
                      alt={hire.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{hire.name}</p>
                      <p className="text-xs text-gray-500">
                        {hire.role} • {hire.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Roles */}
            <div className="p-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Popular Roles</h4>
              <div className="flex flex-wrap gap-2">
                {company.roles.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="p-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Locations</h4>
              <div className="flex flex-wrap gap-2">
                {company.locations.map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industry Trends */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Industry Trends</h3>
          <select className="text-sm border-gray-300 rounded-md">
            <option>Last 12 months</option>
            <option>Last 3 years</option>
            <option>All time</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hiring Trends */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Top Hiring Companies</h4>
            <div className="space-y-2">
              {['Google', 'Microsoft', 'Amazon'].map((company) => (
                <div key={company} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{company}</span>
                  <span className="text-sm font-medium text-gray-900">+25 alumni</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growing Industries */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Fastest Growing Industries</h4>
            <div className="space-y-2">
              {['AI/ML', 'Fintech', 'Healthcare'].map((industry) => (
                <div key={industry} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{industry}</span>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">32%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Locations */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Popular Locations</h4>
            <div className="space-y-2">
              {['San Francisco', 'New York', 'London'].map((location) => (
                <div key={location} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{location}</span>
                  <span className="text-sm font-medium text-gray-900">120 alumni</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInsights;
