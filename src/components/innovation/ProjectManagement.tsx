import React, { useState } from 'react';
import {
  Calendar,
  CheckSquare,
  Clock,
  Users,
  BarChart2,
  AlertCircle,
} from 'lucide-react';
import { Project, Milestone } from '../../types/innovation';

export default function ProjectManagement() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Mock data - replace with actual data from your backend
  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered Learning Assistant',
      description:
        'Developing an AI assistant that helps students learn more effectively by adapting to their learning style and pace.',
      category: 'education',
      createdBy: {
        id: '1',
        name: 'Sarah Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
      },
      team: [
        {
          id: '2',
          name: 'Alex Chen',
          role: 'Developer',
          avatar: 'https://ui-avatars.com/api/?name=Alex+Chen',
          skills: ['React', 'Node.js'],
          joinedAt: new Date('2024-12-15'),
        },
      ],
      votes: 42,
      status: 'inProgress',
      timeline: {
        startDate: new Date('2025-01-01'),
        milestones: [
          {
            id: '1',
            title: 'Project Planning',
            description: 'Define project scope and requirements',
            dueDate: new Date('2025-01-15'),
            status: 'completed',
            assignedTo: ['1'],
          },
          {
            id: '2',
            title: 'MVP Development',
            description: 'Develop core AI features',
            dueDate: new Date('2025-03-01'),
            status: 'inProgress',
            assignedTo: ['2'],
          },
        ],
        endDate: new Date('2025-06-01'),
      },
      resources: [],
      feedback: [],
      tags: ['AI', 'Education', 'Machine Learning'],
      createdAt: new Date('2024-12-15'),
      updatedAt: new Date('2025-01-20'),
    },
  ];

  const getProjectProgress = (project: Project) => {
    const completedMilestones = project.timeline.milestones.filter(
      (m) => m.status === 'completed'
    ).length;
    return Math.round(
      (completedMilestones / project.timeline.milestones.length) * 100
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'inProgress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Overview Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'Active Projects',
            value: projects.length,
            icon: BarChart2,
            color: 'text-blue-600',
          },
          {
            name: 'Team Members',
            value: projects.reduce((acc, p) => acc + p.team.length, 0),
            icon: Users,
            color: 'text-green-600',
          },
          {
            name: 'Completed Milestones',
            value: projects.reduce(
              (acc, p) =>
                acc +
                p.timeline.milestones.filter((m) => m.status === 'completed').length,
              0
            ),
            icon: CheckSquare,
            color: 'text-indigo-600',
          },
          {
            name: 'Upcoming Deadlines',
            value: projects.reduce(
              (acc, p) =>
                acc +
                p.timeline.milestones.filter(
                  (m) =>
                    m.status !== 'completed' &&
                    new Date(m.dueDate).getTime() - new Date().getTime() <
                      7 * 24 * 60 * 60 * 1000
                ).length,
              0
            ),
            icon: AlertCircle,
            color: 'text-red-600',
          },
        ].map((stat) => (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      {/* Project Timeline */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Project Timeline
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-hidden">
            {projects.map((project) => (
              <div key={project.id} className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="relative">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                    <div
                      style={{ width: `${getProjectProgress(project)}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {project.timeline.milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className="flex items-start space-x-4 border-l-2 border-indigo-200 pl-4"
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${
                          milestone.status === 'completed'
                            ? 'bg-green-100'
                            : 'bg-gray-100'
                        }`}
                      >
                        <CheckSquare
                          className={`h-5 w-5 ${
                            milestone.status === 'completed'
                              ? 'text-green-600'
                              : 'text-gray-400'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="text-sm font-medium text-gray-900">
                            {milestone.title}
                          </h5>
                          <span className="text-sm text-gray-500">
                            {new Date(milestone.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
