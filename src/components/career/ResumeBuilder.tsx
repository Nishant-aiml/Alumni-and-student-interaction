import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Download,
  Edit,
  Trash2,
  Eye,
  Share2,
  Sparkles,
} from 'lucide-react';

const ResumeBuilder = () => {
  const [activeTemplate, setActiveTemplate] = useState('modern');

  const templates = [
    { id: 'modern', name: 'Modern Professional' },
    { id: 'creative', name: 'Creative Design' },
    { id: 'minimal', name: 'Minimal Clean' },
    { id: 'executive', name: 'Executive' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resume Builder</h2>
          <p className="mt-1 text-sm text-gray-500">
            Create and manage your professional resumes
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Resume
        </button>
      </div>

      {/* AI Assistant */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              AI Resume Assistant
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get personalized suggestions to improve your resume and match job
              requirements
            </p>
            <div className="mt-4">
              <button className="text-sm text-purple-600 hover:text-purple-500 font-medium">
                Analyze My Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Templates */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Resume Templates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`relative rounded-lg border-2 p-4 cursor-pointer ${
                activeTemplate === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveTemplate(template.id)}
            >
              <div className="aspect-w-8.5 aspect-h-11 bg-white rounded shadow-sm mb-2">
                {/* Template preview would go here */}
              </div>
              <div className="text-sm font-medium text-gray-900">
                {template.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Resumes */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">My Resumes</h3>
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {/* Resume Item */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Software Engineer Resume
                  </h4>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span>Last edited: 2 days ago</span>
                    <span>•</span>
                    <span>Modern Professional template</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Eye className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Download className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 text-green-500 mr-1.5" />
                  <span className="text-sm text-gray-500">
                    95% match for saved jobs
                  </span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 text-blue-500 mr-1.5" />
                  <span className="text-sm text-gray-500">
                    Viewed by 12 recruiters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* More resume items would go here */}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
