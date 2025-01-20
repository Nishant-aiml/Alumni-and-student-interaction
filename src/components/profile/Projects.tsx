import React from 'react';
import { UserProfile } from '../../types/profile';
import { Code, ExternalLink, Github, Plus, Star } from 'lucide-react';

interface ProjectsProps {
  profile: UserProfile;
}

const Projects: React.FC<ProjectsProps> = ({ profile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Projects</h2>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.projects.length === 0 ? (
          <p className="text-gray-500 text-center py-4 col-span-full">No projects added yet</p>
        ) : (
          profile.projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              {project.featured && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                    {project.title}
                  </h3>
                  
                  <p className="mt-2 text-sm text-gray-500">{project.description}</p>

                  {/* Technologies */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Images */}
                  {project.imageUrls.length > 0 && (
                    <div className="mt-4">
                      <div className="grid grid-cols-2 gap-2">
                        {project.imageUrls.slice(0, 2).map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="h-24 w-full object-cover rounded-md"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Collaborators */}
                  {project.collaborators.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-xs font-medium text-gray-500 mb-2">Collaborators</h4>
                      <div className="flex -space-x-2">
                        {project.collaborators.map((collaborator, index) => (
                          <div
                            key={index}
                            className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          >
                            <img
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                collaborator
                              )}&background=random`}
                              alt={collaborator}
                              className="h-full w-full rounded-full"
                              title={collaborator}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </a>
                  )}
                </div>

                {/* Timeline */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-1" />
                    <time dateTime={project.startDate}>
                      {new Date(project.startDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="mx-1">-</span>
                    {project.current ? (
                      <span className="text-indigo-600 font-medium">Present</span>
                    ) : (
                      <time dateTime={project.endDate}>
                        {new Date(project.endDate!).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
