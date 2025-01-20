import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface AlumniStory {
  id: number;
  name: string;
  batch: string;
  role: string;
  company: string;
  image: string;
  story: string;
}

const featuredAlumni: AlumniStory[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    batch: '2020',
    role: 'AI Research Scientist',
    company: 'DeepMind',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    story: 'From campus projects to pioneering AI research, my journey has been incredible. Now leading breakthrough projects in machine learning.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    batch: '2019',
    role: 'Startup Founder',
    company: 'TechInnovate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300',
    story: 'Started my tech venture right after graduation. AlumNet mentors helped me navigate the startup ecosystem.',
  },
  {
    id: 3,
    name: 'Priya Patel',
    batch: '2018',
    role: 'Senior Product Manager',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    story: 'The skills I gained through alumni workshops were invaluable. Now leading product strategy at Google.',
  },
];

export default function FeaturedAlumni() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Meet our accomplished alumni who are making waves in their fields
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {featuredAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={alumni.image}
                      alt={alumni.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{alumni.name}</h3>
                    <p className="text-sm text-gray-300">Batch of {alumni.batch}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-300">{alumni.story}</p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{alumni.role}</span>
                    <span className="mx-2">•</span>
                    <span>{alumni.company}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm">
                <a
                  href={`/alumni/${alumni.id}`}
                  className="flex items-center justify-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Read full story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/success-stories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View all success stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
