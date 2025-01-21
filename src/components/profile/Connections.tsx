import React, { useState } from 'react';
import { UserProfile } from '../../types/auth';
import { Search, Users, MessageCircle, UserPlus } from 'lucide-react';

interface ConnectionsProps {
  profile: UserProfile;
  isEditing?: boolean;
  onUpdate?: (connections: any[]) => void;
}

const Connections: React.FC<ConnectionsProps> = ({ profile, isEditing, onUpdate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const connections = profile?.connections || [];

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    connection.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    connection.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Connections</h2>
          <p className="text-sm text-gray-500 mt-1">
            {connections.length} total connections
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
          <div className="col-span-full text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No connections found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery ? 'Try adjusting your search' : 'Start connecting with other users'}
            </p>
            {!searchQuery && (
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Find Users
                </button>
              </div>
            )}
          </div>
        ) : (
          filteredConnections.map((connection) => (
            <div
              key={connection.id}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={connection.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${connection.id}`}
                    alt={connection.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <p className="text-sm font-medium text-gray-900">{connection.name}</p>
                    <p className="text-sm text-gray-500 truncate">{connection.role}</p>
                    {connection.company && (
                      <p className="text-sm text-gray-500 truncate">{connection.company}</p>
                    )}
                  </a>
                </div>
                <button
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600"
                  onClick={() => {/* Handle message click */}}
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Connections;
