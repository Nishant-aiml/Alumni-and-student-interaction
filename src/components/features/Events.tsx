import React from 'react';
import { Calendar, MapPin, Users, Star, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
  isStarred: boolean;
  organizer: {
    name: string;
    avatar: string;
  };
}

const Events: React.FC = () => {
  const [events, setEvents] = React.useState<Event[]>([
    {
      id: '1',
      title: 'Tech Conference 2025',
      description: 'Annual technology conference featuring the latest in web development, AI, and more',
      date: '2025-03-15',
      time: '09:00 AM',
      location: 'Convention Center, New York',
      attendees: 500,
      image: 'https://api.dicebear.com/7.x/identicon/svg?seed=tech-conf',
      isStarred: true,
      organizer: {
        name: 'Tech Events Inc',
        avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=tech-events',
      },
    },
    {
      id: '2',
      title: 'AI Workshop',
      description: 'Hands-on workshop on implementing machine learning models',
      date: '2025-03-20',
      time: '10:00 AM',
      location: 'Innovation Hub, San Francisco',
      attendees: 100,
      image: 'https://api.dicebear.com/7.x/identicon/svg?seed=ai-workshop',
      isStarred: false,
      organizer: {
        name: 'AI Learning Group',
        avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=ai-group',
      },
    },
  ]);

  const handleStarEvent = (eventId: string) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        return { ...event, isStarred: !event.isStarred };
      }
      return event;
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Events</h2>

      <div className="grid grid-cols-1 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={event.image}
                  alt={event.title}
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <button
                    onClick={() => handleStarEvent(event.id)}
                    className={`p-1 rounded-full ${
                      event.isStarred ? 'text-yellow-500' : 'text-gray-400'
                    } hover:text-yellow-500`}
                  >
                    <Star className="h-6 w-6" fill={event.isStarred ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={event.organizer.avatar}
                    alt={event.organizer.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Organized by</p>
                    <p className="text-sm text-gray-500">{event.organizer.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
