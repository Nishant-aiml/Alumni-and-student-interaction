import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import toast from '../utils/toast';

interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  enrolled: number;
  image: string;
  topics: string[];
}

const DUMMY_COURSES: Course[] = [
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Sarah Johnson',
    description: 'Learn the basics of machine learning algorithms and their applications.',
    price: 499,
    enrolled: 1250,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    topics: ['AI', 'Python', 'Data Science']
  },
  {
    id: '2',
    title: 'Web Development Bootcamp',
    instructor: 'Alex Chen',
    description: 'Complete guide to modern web development with React and Node.js',
    price: 599,
    enrolled: 2100,
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    topics: ['React', 'JavaScript', 'Node.js']
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    instructor: 'Prof. Michael Brown',
    description: 'Master the core concepts of DSA with practical examples.',
    price: 449,
    enrolled: 1800,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    topics: ['DSA', 'Programming', 'Interview Prep']
  },
  {
    id: '4',
    title: 'Cloud Computing with AWS',
    instructor: 'Emily Rodriguez',
    description: 'Learn to build and deploy scalable applications on AWS.',
    price: 699,
    enrolled: 950,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    topics: ['AWS', 'DevOps', 'Cloud']
  }
];

export default function Resources() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>(DUMMY_COURSES);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEnrolled, setShowEnrolled] = useState(false);

  const handleEnroll = (courseId: string) => {
    if (!user) {
      toast.error('Please sign in to enroll in courses');
      return;
    }

    try {
      setEnrolledCourses(prev => [...prev, courseId]);
      setCourses(prev => 
        prev.map(course => 
          course.id === courseId 
            ? { ...course, enrolled: course.enrolled + 1 }
            : course
        )
      );
      toast.success('Successfully enrolled in the course!');
    } catch (error) {
      toast.error('Failed to enroll in the course');
    }
  };

  const handleUnenroll = (courseId: string) => {
    try {
      setEnrolledCourses(prev => prev.filter(id => id !== courseId));
      setCourses(prev => 
        prev.map(course => 
          course.id === courseId 
            ? { ...course, enrolled: course.enrolled - 1 }
            : course
        )
      );
      toast.success('Successfully unenrolled from the course');
    } catch (error) {
      toast.error('Failed to unenroll from the course');
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(topic => 
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      );

    if (showEnrolled) {
      return matchesSearch && enrolledCourses.includes(course.id);
    }
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Resources</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className={`px-4 py-2 rounded-lg ${
              showEnrolled
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setShowEnrolled(!showEnrolled)}
          >
            Enrolled ({enrolledCourses.length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Instructor: {course.instructor}</span>
                <span className="text-blue-600 font-semibold">₹{course.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">{course.enrolled} enrolled</span>
                {enrolledCourses.includes(course.id) ? (
                  <button
                    onClick={() => handleUnenroll(course.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Unenroll
                  </button>
                ) : (
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            {showEnrolled
              ? "You haven't enrolled in any courses yet."
              : "No courses found matching your search."}
          </p>
        </div>
      )}
    </div>
  );
}
