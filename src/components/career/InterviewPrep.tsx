import React from 'react';
import {
  Video,
  BookOpen,
  MessageSquare,
  Calendar,
  Clock,
  Award,
  Sparkles,
  CheckCircle,
  PlayCircle,
} from 'lucide-react';

const InterviewPrep = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Interview Prep</h2>
          <p className="mt-1 text-sm text-gray-500">
            Prepare for your upcoming interviews with AI-powered tools and resources
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Mock Interview
        </button>
      </div>

      {/* Upcoming Interviews */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Upcoming Interviews
        </h3>
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://via.placeholder.com/48"
                    alt="Company logo"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Technical Interview - TechCorp Inc.
                  </h4>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Tomorrow, 2:00 PM</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>60 minutes</span>
                    <span>•</span>
                    <Video className="h-4 w-4" />
                    <span>Video Call</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                  View Details
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Join Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Interview Coach */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              AI Interview Coach
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Practice with our AI interviewer and get instant feedback on your
              responses
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-purple-200 rounded-md shadow-sm text-sm font-medium text-purple-700 bg-white hover:bg-purple-50">
                <MessageSquare className="h-4 w-4 mr-2" />
                Practice Questions
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-purple-200 rounded-md shadow-sm text-sm font-medium text-purple-700 bg-white hover:bg-purple-50">
                <Video className="h-4 w-4 mr-2" />
                Mock Interview
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-purple-200 rounded-md shadow-sm text-sm font-medium text-purple-700 bg-white hover:bg-purple-50">
                <Award className="h-4 w-4 mr-2" />
                View Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Resources */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Interview Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Resource Cards */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <h4 className="text-lg font-medium text-gray-900">
                Technical Questions
              </h4>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Common technical interview questions and best practices for answering
              them
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>System Design</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Algorithms</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Problem Solving</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Video className="h-6 w-6 text-purple-500" />
              <h4 className="text-lg font-medium text-gray-900">
                Interview Videos
              </h4>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Watch expert interviews and learn from successful candidates
            </p>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center">
                    <PlayCircle className="h-4 w-4 text-purple-500 mr-2" />
                    <span>Interview Tips #{i}</span>
                  </div>
                  <span className="text-gray-500">5:30</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare className="h-6 w-6 text-green-500" />
              <h4 className="text-lg font-medium text-gray-900">
                Behavioral Questions
              </h4>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Practice common behavioral questions using the STAR method
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Leadership Examples</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Conflict Resolution</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Project Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
