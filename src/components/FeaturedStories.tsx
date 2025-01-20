import React from 'react';
import type { Story } from '../types';

const stories: Story[] = [
  {
    id: '1',
    userId: 'user1',
    title: 'From Campus to Silicon Valley',
    content: 'How my university project turned into a successful startup...',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
    category: 'Entrepreneurship',
    date: '2024-03-15',
    likes: 245
  },
  {
    id: '2',
    userId: 'user2',
    title: 'Leading Innovation in Healthcare',
    content: 'Revolutionizing patient care through AI...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
    category: 'Healthcare',
    date: '2024-03-10',
    likes: 189
  }
];

export default function FeaturedStories() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Alumni Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={story.image} alt={story.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {story.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{story.title}</p>
                    <p className="mt-3 text-base text-gray-500">{story.content}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Author</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Alumni Name</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={story.date}>{new Date(story.date).toLocaleDateString()}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{story.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}