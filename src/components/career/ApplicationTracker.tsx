import React from 'react';
import {
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  FileText,
  MessageSquare,
  BarChart,
} from 'lucide-react';

const ApplicationTracker = () => {
  return (
    <div className="space-y-8">
      {/* Application Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Applications</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Interviews</p>
              <p className="text-2xl font-semibold text-gray-900">5</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Offers</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Active Applications */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Active Applications
        </h3>
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {/* Application Item */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/48"
                  alt="Company logo"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Senior Software Engineer
                  </h4>
                  <div className="mt-1 flex items-center space-x-2 text-sm">
                    <span className="text-blue-600">TechCorp Inc.</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  In Review
                </span>
                <button className="text-gray-400 hover:text-gray-500">
                  <AlertCircle className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-6">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-between">
                  <div>
                    <span className="bg-green-500 h-4 w-4 rounded-full flex items-center justify-center ring-4 ring-white">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </span>
                    <span className="mt-2 block text-xs text-gray-500">
                      Applied
                    </span>
                  </div>
                  <div>
                    <span className="bg-green-500 h-4 w-4 rounded-full flex items-center justify-center ring-4 ring-white">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </span>
                    <span className="mt-2 block text-xs text-gray-500">
                      Resume Review
                    </span>
                  </div>
                  <div>
                    <span className="bg-yellow-500 h-4 w-4 rounded-full flex items-center justify-center ring-4 ring-white">
                      <Clock className="h-3 w-3 text-white" />
                    </span>
                    <span className="mt-2 block text-xs text-gray-500">
                      Technical Interview
                    </span>
                  </div>
                  <div>
                    <span className="bg-gray-200 h-4 w-4 rounded-full flex items-center justify-center ring-4 ring-white" />
                    <span className="mt-2 block text-xs text-gray-500">
                      Final Interview
                    </span>
                  </div>
                  <div>
                    <span className="bg-gray-200 h-4 w-4 rounded-full flex items-center justify-center ring-4 ring-white" />
                    <span className="mt-2 block text-xs text-gray-500">
                      Offer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  Schedule Interview
                </button>
                <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <MessageSquare className="mr-1.5 h-4 w-4" />
                  Send Message
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                  View Details
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Prepare
                </button>
              </div>
            </div>
          </div>

          {/* More Application Items */}
          {/* Similar structure repeated for other applications */}
        </div>
      </div>

      {/* Application Analytics */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Application Analytics
        </h3>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Response Rate
              </h4>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  65%
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Interview Success
              </h4>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: '78%' }}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  78%
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Offer Rate
              </h4>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-purple-500 rounded-full"
                      style={{ width: '42%' }}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  42%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;
