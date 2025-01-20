import React from 'react';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import type { Event, Story, Job } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2024',
    description: 'Join industry leaders for insights into emerging technologies...',
    date: '2024-04-15',
    type: 'hybrid',
    category: 'Technology',
    location: 'San Francisco, CA',
    attendees: [],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800'
  },
  {
    id: '2',
    title: 'Alumni Networking Night',
    description: 'Connect with fellow alumni in a casual networking setting...',
    date: '2024-04-20',
    type: 'offline',
    category: 'Networking',
    location: 'New York, NY',
    attendees: [],
    image: 'https://images.unsplash.com/photo-1511795409834-432f7b1728b2?auto=format&fit=crop&w=800'
  }
];

const stories: Story[] = [
  {
    id: '1',
    userId: 'user1',
    title: 'From Campus to Silicon Valley',
    content: 'How my university project turned into a successful startup...',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
    category: 'Entrepreneurship',
    date: '2024-03-15',
    likes: 245,
    tags: ['startup', 'tech', 'success']
  },
  {
    id: '2',
    userId: 'user2',
    title: 'Leading Innovation in Healthcare',
    content: 'Revolutionizing patient care through AI...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
    category: 'Healthcare',
    date: '2024-03-10',
    likes: 189,
    tags: ['healthcare', 'innovation', 'AI']
  }
];

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'full-time',
    description: 'Looking for an experienced software engineer...',
    requirements: ['5+ years experience', 'React', 'Node.js'],
    postedBy: 'user3',
    postedDate: '2024-03-01'
  },
  {
    id: '2',
    title: 'Marketing Intern',
    company: 'GrowthCo',
    location: 'New York, NY',
    type: 'internship',
    description: 'Join our marketing team for a summer internship...',
    requirements: ['Current student', 'Marketing major', 'Creative mindset'],
    postedBy: 'user4',
    postedDate: '2024-03-05'
  }
];

export default function FeaturedContent() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Events */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center">
              View all <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    {event.location}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {event.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Stories */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center">
              View all <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <img src={story.image} alt={story.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Alumni Name</p>
                        <p className="text-sm text-gray-500">{new Date(story.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{story.likes} likes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Opportunities</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center">
              View all <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    job.type === 'full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {job.company}
                  <MapPin className="h-4 w-4 ml-4 mr-2" />
                  {job.location}
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}