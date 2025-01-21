import React, { useState } from 'react';
import { Users, MapPin, Briefcase, GraduationCap, Search } from 'lucide-react';

interface Connection {
  id: string;
  name: string;
  avatar: string;
  role: string;
  batch: string;
  branch: string;
  company: string;
  location: string;
  isAlumni: boolean;
  skills: string[];
  mutualConnections: number;
}

interface ConnectionsProps {
  connections: Connection[];
}

const Connections: React.FC<ConnectionsProps> = ({ connections }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // all, alumni, students

  const filteredConnections = connections.filter(connection => {
    const matchesSearch = 
      connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter =
      filter === 'all' ||
      (filter === 'alumni' && connection.isAlumni) ||
      (filter === 'students' && !connection.isAlumni);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Your Network</h2>
        <p className="mt-1 text-sm text-gray-500">
          Connect with alumni and students from your college
        </p>
      </div>

      {/* Search and Filters */}
      <div className="p-6 border-b border-gray-200 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search connections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('alumni')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'alumni'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Alumni
          </button>
          <button
            onClick={() => setFilter('students')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'students'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Students
          </button>
        </div>
      </div>

      {/* Connections Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConnections.map((connection) => (
          <div
            key={connection.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={connection.avatar}
                  alt={connection.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {connection.name}
                  </h3>
                  <p className="text-sm text-gray-600">{connection.role}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {connection.company}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {connection.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  {connection.branch} ({connection.batch})
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {connection.mutualConnections} mutual connections
                </div>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {connection.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
