import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, GraduationCap, MessageSquare, UserPlus, Award } from 'lucide-react';

const AlumniCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Cover Image */}
      <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      
      {/* Profile Content */}
      <div className="p-6">
        <div className="relative flex justify-between">
          {/* Avatar */}
          <div className="absolute -top-12">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Alumni"
              className="w-20 h-20 rounded-xl border-4 border-white shadow-sm"
            />
            {/* Online Status */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
          </div>

          {/* Quick Actions */}
          <div className="flex-1"></div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
              <UserPlus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-8">
          <Link to="/profile/1" className="group">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
              Sarah Wilson
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mt-1">Product Manager at Google</p>
          
          {/* Location and Batch */}
          <div className="flex items-center mt-2 text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              San Francisco, CA
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-1" />
              Class of 2020
            </div>
          </div>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Product Management
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              UX Design
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Data Analytics
            </span>
          </div>

          {/* Availability Badges */}
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <span className="inline-flex items-center text-green-600">
              <Award className="w-4 h-4 mr-1" />
              Mentor
            </span>
            <span className="inline-flex items-center text-blue-600">
              <Briefcase className="w-4 h-4 mr-1" />
              Hiring
            </span>
          </div>

          {/* Connection Info */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <div className="flex -space-x-2">
                  <img
                    className="w-6 h-6 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="w-6 h-6 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="w-6 h-6 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <span className="ml-2">12 mutual connections</span>
              </div>
              <span className="text-gray-400">Active 2h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
