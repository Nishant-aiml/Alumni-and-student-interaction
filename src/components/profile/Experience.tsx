import React from 'react';
import { UserProfile } from '../../types/profile';
import { Building2, MapPin, Calendar, Plus } from 'lucide-react';

interface ExperienceProps {
  profile: UserProfile;
}

const Experience: React.FC<ExperienceProps> = ({ profile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Professional Experience</h2>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </button>
      </div>

      <div className="space-y-8">
        {profile.experience.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No experience added yet</p>
        ) : (
          profile.experience.map((exp) => (
            <div key={exp.id} className="relative pb-8">
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center ring-8 ring-white">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {exp.position}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span className="font-medium text-gray-700">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={exp.startDate}>
                        {new Date(exp.startDate).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="mx-1">-</span>
                      {exp.current ? (
                        <span className="text-indigo-600 font-medium">Present</span>
                      ) : (
                        <time dateTime={exp.endDate}>
                          {new Date(exp.endDate!).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </time>
                      )}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{exp.description}</p>
                    </div>
                  )}
                  {exp.skills.length > 0 && (
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {exp.highlights.length > 0 && (
                    <div className="mt-2">
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {exp.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Experience;
