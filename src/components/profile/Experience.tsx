import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
}

interface ExperienceProps {
  experience?: Experience[];
  isEditing: boolean;
  onInputChange: (field: string, value: any) => void;
}

const Experience: React.FC<ExperienceProps> = ({ experience = [], isEditing, onInputChange }) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    company: '',
    position: '',
    duration: ''
  });

  const handleAddExperience = () => {
    if (newExperience.company && newExperience.position) {
      const updatedExperience = [...experience, newExperience];
      onInputChange('experience', updatedExperience);
      setNewExperience({ company: '', position: '', duration: '' });
    }
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    onInputChange('experience', updatedExperience);
  };

  const handleUpdateExperience = (index: number, field: keyof Experience, value: string) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    onInputChange('experience', updatedExperience);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
        {isEditing && (
          <button
            onClick={handleAddExperience}
            className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </button>
        )}
      </div>

      <div className="space-y-6">
        {isEditing && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Experience</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newExperience.company}
                  onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newExperience.position}
                  onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                  placeholder="Enter position"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newExperience.duration}
                  onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
                  placeholder="e.g., Jan 2020 - Present"
                />
              </div>
            </div>
          </div>
        )}

        {experience.length === 0 ? (
          <div className="text-center py-6">
            <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No experience added</h3>
            <p className="mt-1 text-sm text-gray-500">Add your professional experience to showcase your career journey.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-start">
                  <div>
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Company</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={exp.company}
                            onChange={(e) => handleUpdateExperience(index, 'company', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Position</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={exp.position}
                            onChange={(e) => handleUpdateExperience(index, 'position', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Duration</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={exp.duration}
                            onChange={(e) => handleUpdateExperience(index, 'duration', e.target.value)}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium text-gray-900">{exp.company}</h3>
                        <p className="text-sm text-gray-600">{exp.position}</p>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                      </>
                    )}
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveExperience(index)}
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

export default Experience;
