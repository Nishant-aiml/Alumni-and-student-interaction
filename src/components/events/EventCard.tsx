import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Video, ExternalLink, Edit, Trash2 } from 'lucide-react';
import { Event } from '../../types/events';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

interface EventCardProps {
  event: Event;
  isOwner?: boolean;
  onEventUpdated?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isOwner, onEventUpdated }) => {
  const handleDelete = async () => {
    if (!event.id || !window.confirm('Are you sure you want to delete this event?')) return;
    
    try {
      await deleteDoc(doc(db, 'events', event.id));
      onEventUpdated?.();
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Event Image */}
      <div className="relative">
        <img
          src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <Video className="w-3 h-3 mr-1" />
            {event.format.charAt(0).toUpperCase() + event.format.slice(1)}
          </span>
        </div>
        {isOwner && (
          <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={() => {/* TODO: Add edit functionality */}}
              className="p-1 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Edit className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={handleDelete}
              className="p-1 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-600">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-600">{event.time}</span>
          </div>
        </div>

        <Link to={`/events/${event.id}`} className="block group-hover:text-indigo-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {event.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-600">
              {event.attendees?.length || 0} attending
              {event.maxAttendees && ` / ${event.maxAttendees} max`}
            </span>
          </div>
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
