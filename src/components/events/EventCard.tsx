import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Video, ExternalLink } from 'lucide-react';

const EventCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Event Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Event"
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            Workshop
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <Video className="w-3 h-3 mr-1" />
            Hybrid
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-600">Mar 15, 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-600">2:00 PM PST</span>
          </div>
        </div>

        <Link to="/events/1" className="block group-hover:text-indigo-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            AI in Software Engineering: Future Trends
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          Join industry experts as they discuss the future of AI in software engineering and its impact on development practices.
        </p>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          San Francisco + Virtual
        </div>

        {/* Speakers */}
        <div className="mb-4">
          <div className="flex items-center -space-x-2">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center">
              <span className="text-xs font-medium text-indigo-600">+2</span>
            </div>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            125 registered
          </div>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Register Now
            </button>
            <button className="inline-flex items-center px-2 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Spots remaining</span>
            <span>125/150</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: '83%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
