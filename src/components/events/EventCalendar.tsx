import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

const EventCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get calendar days
  const firstDay = startOfMonth(currentMonth);
  const lastDay = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  // Mock events data
  const events = [
    {
      id: 1,
      title: 'AI Workshop',
      date: new Date(2025, 2, 15),
      type: 'workshop',
      color: 'bg-indigo-600',
    },
    {
      id: 2,
      title: 'Career Fair',
      date: new Date(2025, 2, 20),
      type: 'career_fair',
      color: 'bg-green-600',
    },
    // Add more events
  ];

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getDayEvents = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={previousMonth}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {/* Week day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, dayIdx) => {
          const dayEvents = getDayEvents(day);
          return (
            <div
              key={day.toString()}
              className={`relative bg-white min-h-[120px] p-2 ${
                !isSameMonth(day, currentMonth) ? 'bg-gray-50' : ''
              }`}
            >
              <div
                className={`flex items-center justify-center h-6 w-6 rounded-full text-sm ${
                  isToday(day)
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-500'
                }`}
              >
                {format(day, 'd')}
              </div>
              <div className="mt-2 space-y-1">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`px-2 py-1 text-xs rounded-lg ${event.color} text-white truncate`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
            <span className="text-sm text-gray-600">Workshop</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
            <span className="text-sm text-gray-600">Career Fair</span>
          </div>
          {/* Add more event types */}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
