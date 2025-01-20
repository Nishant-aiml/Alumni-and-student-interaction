import React from 'react';
import { MapPin, Users, Building2 } from 'lucide-react';
import { AlumniMapData } from '../../types/directory';

const mockLocations: AlumniMapData[] = [
  {
    location: 'San Francisco Bay Area',
    coordinates: [37.7749, -122.4194],
    alumniCount: 2500,
    companies: ['Google', 'Apple', 'Meta'],
  },
  {
    location: 'New York City',
    coordinates: [40.7128, -74.0060],
    alumniCount: 1800,
    companies: ['Goldman Sachs', 'JPMorgan', 'Microsoft'],
  },
  // Add more locations
];

const DirectoryMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Map Visualization - Replace with actual map implementation */}
      <div className="h-[600px] bg-gray-100 rounded-t-xl p-6">
        <div className="text-center text-gray-500">
          Map visualization will be implemented using a mapping library (e.g., Mapbox, Google Maps)
        </div>
      </div>

      {/* Location List */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Alumni Hubs</h3>
        <div className="space-y-6">
          {mockLocations.map((location) => (
            <div
              key={location.location}
              className="flex items-start justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">{location.location}</h4>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {location.alumniCount.toLocaleString()} alumni
                  </div>
                  <div className="mt-2">
                    <h5 className="text-sm font-medium text-gray-700 mb-1">Top Companies</h5>
                    <div className="flex flex-wrap gap-2">
                      {location.companies.map((company) => (
                        <span
                          key={company}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          <Building2 className="w-3 h-3 mr-1" />
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-500">
                View Alumni
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Location Stats */}
      <div className="border-t border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">45+</div>
            <div className="text-sm text-gray-500">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">150+</div>
            <div className="text-sm text-gray-500">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">2,500+</div>
            <div className="text-sm text-gray-500">Companies</div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Quick Filters</h4>
        <div className="flex flex-wrap gap-2">
          {['North America', 'Europe', 'Asia Pacific', 'Remote'].map((region) => (
            <button
              key={region}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectoryMap;
