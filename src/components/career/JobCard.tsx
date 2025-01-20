import React from 'react';
import {
  MapPin,
  Building2,
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface JobCardProps {
  isInternship?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ isInternship = false }) => {
  const description = isInternship
    ? "Join our dynamic team for a summer internship opportunity where you'll work on real-world projects using cutting-edge technologies. Mentorship and potential for full-time conversion available."
    : "We are looking for a Senior Software Engineer to join our team and help build scalable solutions. You'll work with modern technologies and lead key initiatives.";

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-md"
                src="https://via.placeholder.com/48"
                alt="Company logo"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {isInternship
                  ? 'Software Development Intern'
                  : 'Senior Software Engineer'}
              </h3>
              <div className="mt-1">
                <span className="text-sm font-medium text-blue-600">
                  TechCorp Inc.
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="mr-1.5 h-4 w-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Building2 className="mr-1.5 h-4 w-4" />
                  {isInternship ? '1000+ employees' : 'Tech'}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4" />
                  {isInternship ? '3 months' : 'Full-time'}
                </div>
                <div className="flex items-center">
                  <Users className="mr-1.5 h-4 w-4" />
                  {isInternship ? '50 applicants' : '120 applicants'}
                </div>
                {isInternship && (
                  <div className="flex items-center">
                    <GraduationCap className="mr-1.5 h-4 w-4" />
                    Mentorship Available
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-1 text-green-600">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">95% Match</span>
            </div>
            <div className="text-sm text-gray-500">Posted 2 days ago</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-gray-500 line-clamp-2">
            {description}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js'].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="font-medium text-gray-900">
                {isInternship ? '$30-40/hr' : '$130k-180k/year'}
              </span>
              <span className="text-gray-500">
                {isInternship ? ' • Paid internship' : ' • Total comp'}
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              Save
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Quick Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
