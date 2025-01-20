import React from 'react';
import { GraduationCap, Users, Calendar, Briefcase, ArrowRight } from 'lucide-react';

export default function WelcomeHero() {
  return (
    <div className="relative bg-indigo-800 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
          alt="University campus"
        />
        <div className="absolute inset-0 bg-indigo-800/75 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Connect. Learn. Grow.
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Join AlumNet, where alumni and students come together to create meaningful connections,
          share valuable experiences, and build successful futures.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-start">
          <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
            >
              Join Now
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Users className="h-10 w-10 text-indigo-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-base text-gray-500">Alumni Network</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Calendar className="h-10 w-10 text-indigo-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-base text-gray-500">Events Yearly</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Briefcase className="h-10 w-10 text-indigo-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">2,000+</p>
                <p className="text-base text-gray-500">Job Opportunities</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <GraduationCap className="h-10 w-10 text-indigo-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">1,000+</p>
                <p className="text-base text-gray-500">Mentorship Connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}