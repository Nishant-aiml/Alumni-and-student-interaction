import React from 'react';
import { Users, Plus, Settings } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  image: string;
  isJoined: boolean;
}

const Groups: React.FC = () => {
  const [groups, setGroups] = React.useState<Group[]>([
    {
      id: '1',
      name: 'Web Development',
      description: 'A group for web developers to share knowledge and experiences',
      memberCount: 1250,
      image: 'https://api.dicebear.com/7.x/identicon/svg?seed=web',
      isJoined: true,
    },
    {
      id: '2',
      name: 'Machine Learning',
      description: 'Discuss ML algorithms, frameworks, and projects',
      memberCount: 890,
      image: 'https://api.dicebear.com/7.x/identicon/svg?seed=ml',
      isJoined: false,
    },
    {
      id: '3',
      name: 'UI/UX Design',
      description: 'Share design tips, tools, and get feedback',
      memberCount: 750,
      image: 'https://api.dicebear.com/7.x/identicon/svg?seed=design',
      isJoined: true,
    },
  ]);

  const handleJoinGroup = (groupId: string) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          isJoined: !group.isJoined,
          memberCount: group.isJoined ? group.memberCount - 1 : group.memberCount + 1,
        };
      }
      return group;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Create Group Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Groups</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          Create Group
        </button>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(group => (
          <div key={group.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative h-32">
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-full object-cover"
              />
              {group.isJoined && (
                <div className="absolute top-2 right-2">
                  <button className="p-1 bg-white rounded-full shadow hover:bg-gray-50">
                    <Settings className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{group.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{group.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-5 w-5 mr-1" />
                  {group.memberCount.toLocaleString()} members
                </div>
                <button
                  onClick={() => handleJoinGroup(group.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    group.isJoined
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {group.isJoined ? 'Leave' : 'Join'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
