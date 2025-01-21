import React, { useState } from 'react';
import { Users, X } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  memberCount: number;
  category: string;
  image: string;
}

const initialGroups: Group[] = [
  {
    id: '1',
    name: 'Tech Innovators Hub',
    memberCount: 1250,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '2',
    name: 'VNIT Alumni Network',
    memberCount: 5000,
    category: 'Alumni',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '3',
    name: 'AI/ML Enthusiasts',
    memberCount: 850,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '4',
    name: 'Nagpur Engineers Club',
    memberCount: 2300,
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '5',
    name: 'Startup Founders Circle',
    memberCount: 450,
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const JoinedGroups: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [showConfirmLeave, setShowConfirmLeave] = useState<string | null>(null);

  const handleLeaveGroup = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y">
        {groups.map((group) => (
          <div key={group.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {group.name}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Users className="h-4 w-4" />
                      {group.memberCount.toLocaleString()} members
                    </p>
                    <span className="text-xs text-gray-400 mt-1 inline-block">
                      {group.category}
                    </span>
                  </div>
                  {showConfirmLeave === group.id ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleLeaveGroup(group.id)}
                        className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setShowConfirmLeave(null)}
                        className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowConfirmLeave(group.id)}
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-150"
                      title="Leave Group"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {groups.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-gray-500">You haven't joined any groups yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedGroups;
