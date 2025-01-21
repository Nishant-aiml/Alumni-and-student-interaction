import React, { useState } from 'react';
import { Plus, Edit2, Trash2, GraduationCap } from 'lucide-react';

interface Education {
  school: string;
  degree: string;
  year: string;
}

interface EducationProps {
  education?: Education[];
  isEditing: boolean;
  onInputChange: (field: string, value: any) => void;
}

const Education: React.FC<EducationProps> = ({ education = [], isEditing, onInputChange }) => {
  const [newEducation, setNewEducation] = useState<Education>({
    school: '',
    degree: '',
    year: ''
  });

  const handleAddEducation = () => {
    if (newEducation.school && newEducation.degree) {
      const updatedEducation = [...education, newEducation];
      onInputChange('education', updatedEducation);
      setNewEducation({ school: '', degree: '', year: '' });
    }
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    onInputChange('education', updatedEducation);
  };

  const handleUpdateEducation = (index: number, field: keyof Education, value: string) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    onInputChange('education', updatedEducation);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        {isEditing && (
          <button
            onClick={handleAddEducation}
            className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </button>
        )}
      </div>

      <div className="space-y-6">
        {isEditing && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Education</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">School/University</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newEducation.school}
                  onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
                  placeholder="Enter school or university name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newEducation.degree}
                  onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                  placeholder="Enter degree or field of study"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newEducation.year}
                  onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
                  placeholder="e.g., 2018 - 2022"
                />
              </div>
            </div>
          </div>
        )}

        {education.length === 0 ? (
          <div className="text-center py-6">
            <GraduationCap className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No education added</h3>
            <p className="mt-1 text-sm text-gray-500">Add your educational background to showcase your academic journey.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-start">
                  <div>
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">School/University</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={edu.school}
                            onChange={(e) => handleUpdateEducation(index, 'school', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Degree</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={edu.degree}
                            onChange={(e) => handleUpdateEducation(index, 'degree', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Year</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={edu.year}
                            onChange={(e) => handleUpdateEducation(index, 'year', e.target.value)}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium text-gray-900">{edu.school}</h3>
                        <p className="text-sm text-gray-600">{edu.degree}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </>
                    )}
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveEducation(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
