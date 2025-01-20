import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  CheckSquare,
  PlusCircle,
  Clock,
  Award,
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  progress: number;
  nextMeeting?: string;
  tasks: {
    completed: number;
    total: number;
  };
}

export default function TeamCollaboration() {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: '1',
      name: 'Innovation Squad Alpha',
      description: 'Working on AI-powered urban solutions',
      members: [
        {
          id: '1',
          name: 'Alex Johnson',
          role: 'Team Lead',
          avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson',
          skills: ['Project Management', 'AI', 'Strategy'],
        },
        // Add more team members
      ],
      progress: 75,
      nextMeeting: '2025-01-21T10:00:00',
      tasks: {
        completed: 15,
        total: 20,
      },
    },
    // Add more teams
  ]);

  const [activeTab, setActiveTab] = useState('teams');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Team Collaboration</h2>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <UserPlus className="h-5 w-5" />
            <span>Create Team</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('teams')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'teams'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Teams
          </button>
          <button
            onClick={() => setActiveTab('meetings')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'meetings'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Meetings
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'tasks'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Tasks
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teams.map((team) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{team.name}</h3>
                  <p className="text-gray-600 mt-1">{team.description}</p>
                </div>
                <div className="flex -space-x-2">
                  {team.members.map((member) => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      title={member.name}
                    />
                  ))}
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                    <PlusCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{team.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${team.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CheckSquare className="h-4 w-4" />
                    <span>
                      {team.tasks.completed}/{team.tasks.total} Tasks
                    </span>
                  </div>
                  {team.nextMeeting && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>
                        Next Meeting:{' '}
                        {new Date(team.nextMeeting).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    <Calendar className="h-4 w-4" />
                    <span>Schedule</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    <Award className="h-4 w-4" />
                    <span>Goals</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
