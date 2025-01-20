import React from 'react';
import { UserProfile } from '../../types/profile';
import { GraduationCap, Calendar, Plus } from 'lucide-react';

interface EducationProps {
  profile: UserProfile;
}

const Education: React.FC<EducationProps> = ({ profile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Education</h2>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </button>
      </div>

      <div className="space-y-8">
        {profile.education.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No education added yet</p>
        ) : (
          profile.education.map((edu) => (
            <div key={edu.id} className="relative pb-8">
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center ring-8 ring-white">
                    <GraduationCap className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {edu.degree} in {edu.field}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span className="font-medium text-gray-700">{edu.institution}</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.startYear}</span>
                      <span className="mx-1">-</span>
                      {edu.current ? (
                        <span className="text-indigo-600 font-medium">Present</span>
                      ) : (
                        <span>{edu.endYear}</span>
                      )}
                      {edu.gpa && (
                        <>
                          <span className="mx-2">•</span>
                          <span>GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {edu.achievements.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-gray-900">Achievements</h4>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-700">
                        {edu.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
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

export default Education;
