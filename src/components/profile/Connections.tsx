import React, { useState } from 'react';
import { UserProfile } from '../../types/profile';
import { Search, Users, MessageCircle, UserPlus } from 'lucide-react';

interface ConnectionsProps {
  profile: UserProfile;
}

const Connections: React.FC<ConnectionsProps> = ({ profile }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConnections = profile.connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    connection.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    connection.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Connections</h2>
          <p className="text-sm text-gray-500 mt-1">
            {profile.connections.length} total connections
          </p>
        </div>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Users className="h-4 w-4 mr-2" />
          Find Connections
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search connections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Connections Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredConnections.length === 0 ? (
          <p className="text-gray-500 text-center py-4 col-span-full">
            {searchQuery ? 'No connections found' : 'No connections yet'}
          </p>
        ) : (
          filteredConnections.map((connection) => (
            <div
              key={connection.id}
              className="relative group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={connection.imageUrl}
                  alt={connection.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                    {connection.name}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">{connection.role}</p>
                  <p className="text-sm text-gray-500 truncate">{connection.company}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{connection.mutualConnections} mutual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded-full text-gray-400 hover:text-indigo-600">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="p-1 rounded-full text-gray-400 hover:text-indigo-600">
                    <UserPlus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Connected since{' '}
                {new Date(connection.connectionDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Connections;
