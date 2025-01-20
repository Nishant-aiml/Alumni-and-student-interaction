import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Star,
  Users,
  Clock,
  Calendar,
  Award,
  MessageSquare,
  Video,
  Mail,
} from 'lucide-react';

const MentorCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* Mentor Avatar */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Mentor"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white" />
          </div>

          {/* Mentor Info */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Sarah Johnson
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-600">4.9</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Senior Software Engineer at Google
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                12 years exp.
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                15 mentees
              </div>
            </div>
          </div>
        </div>

        {/* Expertise & Skills */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Full Stack Development
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              System Design
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Career Growth
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Leadership
            </span>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            Available: Evenings & Weekends
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            Next slot: Tomorrow
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="mt-4 flex items-center space-x-2">
          <span className="inline-flex items-center p-1.5 rounded-lg bg-gray-100 text-gray-500">
            <Video className="w-4 h-4" />
          </span>
          <span className="inline-flex items-center p-1.5 rounded-lg bg-gray-100 text-gray-500">
            <MessageSquare className="w-4 h-4" />
          </span>
          <span className="inline-flex items-center p-1.5 rounded-lg bg-gray-100 text-gray-500">
            <Mail className="w-4 h-4" />
          </span>
        </div>

        {/* Achievements */}
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex -space-x-1">
            <Award className="w-5 h-5 text-yellow-400" />
            <Award className="w-5 h-5 text-purple-400" />
            <Award className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-xs text-gray-500">
            3 Excellence Awards
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
              Request Mentorship
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              View Profile
            </button>
          </div>
          <button className="inline-flex items-center p-2 border border-gray-300 rounded-md text-gray-400 hover:text-gray-500">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
