import React from 'react';
import { Users, Building2, MapPin, Code } from 'lucide-react';

interface DirectoryStatsProps {
  stats: {
    totalAlumni: number;
    companies: number;
    locations: number;
    skills: number;
  };
}

const DirectoryStats: React.FC<DirectoryStatsProps> = ({ stats }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Alumni Network Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Alumni */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-100">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Alumni</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalAlumni}</h3>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-100">
              <Building2 className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Companies</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.companies}</h3>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-100">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Locations</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.locations}</h3>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-100">
              <Code className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Unique Skills</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.skills}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryStats;
