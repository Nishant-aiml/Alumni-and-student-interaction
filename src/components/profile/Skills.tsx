import React, { useState } from 'react';
import { UserProfile, Skill } from '../../types/profile';
import { PlusCircle, ThumbsUp, Filter, Search } from 'lucide-react';

interface SkillsProps {
  profile: UserProfile;
}

const Skills: React.FC<SkillsProps> = ({ profile }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'technical', name: 'Technical' },
    { id: 'soft', name: 'Soft Skills' },
    { id: 'language', name: 'Languages' },
    { id: 'tool', name: 'Tools' },
  ];

  const mockSkills: Skill[] = [
    {
      id: '1',
      name: 'React',
      category: 'technical',
      level: 5,
      endorsements: [
        { userId: '1', name: 'Jane Smith', timestamp: '2024-01-19T10:00:00Z' },
        { userId: '2', name: 'Mike Johnson', timestamp: '2024-01-18T15:30:00Z' },
      ],
    },
    {
      id: '2',
      name: 'TypeScript',
      category: 'technical',
      level: 4,
      endorsements: [
        { userId: '1', name: 'Jane Smith', timestamp: '2024-01-19T10:00:00Z' },
      ],
    },
    // Add more mock skills as needed
  ];

  const filteredSkills = mockSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSkillLevelColor = (level: number) => {
    const colors = {
      1: 'bg-red-200',
      2: 'bg-orange-200',
      3: 'bg-yellow-200',
      4: 'bg-green-200',
      5: 'bg-blue-200',
    };
    return colors[level as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Skills & Endorsements</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Skill
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="relative inline-block text-left">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{skill.category}</p>
              </div>
              <div className={`h-8 w-8 rounded-full ${getSkillLevelColor(skill.level)} flex items-center justify-center`}>
                <span className="text-sm font-medium">{skill.level}</span>
              </div>
            </div>

            {/* Skill Level Bar */}
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>

            {/* Endorsements */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {skill.endorsements.length} endorsements
                </span>
                <button className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Endorse
                </button>
              </div>
              {skill.endorsements.length > 0 && (
                <div className="mt-2">
                  <div className="flex -space-x-2">
                    {skill.endorsements.slice(0, 3).map((endorsement, index) => (
                      <div
                        key={endorsement.userId}
                        className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      >
                        <img
                          src={`https://ui-avatars.com/api/?name=${endorsement.name}&background=random`}
                          alt={endorsement.name}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                    ))}
                    {skill.endorsements.length > 3 && (
                      <div className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
                        <span className="text-xs text-gray-600">
                          +{skill.endorsements.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
