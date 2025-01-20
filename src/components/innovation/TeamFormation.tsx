import React, { useState } from 'react';
import { Users, Search, Filter, UserPlus, MessageSquare } from 'lucide-react';
import { TeamMember } from '../../types/innovation';

export default function TeamFormation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Mock data - replace with actual data from your backend
  const availableMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alex Chen',
      role: 'Full Stack Developer',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Chen',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      joinedAt: new Date('2024-12-01'),
    },
    // Add more mock members
  ];

  const skills = [
    'React',
    'Node.js',
    'Python',
    'Data Science',
    'UI/UX',
    'Project Management',
    'Marketing',
    'Business Development',
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="relative">
          <select
            multiple
            value={selectedSkills}
            onChange={(e) =>
              setSelectedSkills(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {availableMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-6"
          >
            <div className="flex items-start space-x-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700">Skills</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Joined {new Date(member.joinedAt).toLocaleDateString()}
              </div>
              <div className="flex space-x-2">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <MessageSquare className="h-4 w-4 mr-1.5" />
                  Message
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <UserPlus className="h-4 w-4 mr-1.5" />
                  Invite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
