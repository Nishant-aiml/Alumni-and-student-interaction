import React from 'react';
import { Star, Award } from 'lucide-react';

interface FeaturedStory {
  id: string;
  title: string;
  content: string;
  userName: string;
  userAvatar: string;
  category: string;
  rating: number;
  image: string;
}

const featuredStories: FeaturedStory[] = [
  {
    id: '1',
    title: 'From Beginner to Full-Stack Developer',
    content: 'Through skill trading on this platform, I learned web development from experienced mentors. Now I\'m working as a full-stack developer at a startup!',
    userName: 'Alex Kumar',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    category: 'Web Development',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    id: '2',
    title: 'Mastering Machine Learning',
    content: 'I traded my graphic design skills for ML expertise. The peer-to-peer learning experience was incredible and helped me transition into AI development.',
    userName: 'Priya Sharma',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    category: 'Machine Learning',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb'
  },
  {
    id: '3',
    title: 'UI/UX Design Journey',
    content: 'By exchanging programming lessons for design mentorship, I developed a strong design portfolio. Now I work with top tech companies as a freelance designer.',
    userName: 'David Chen',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    category: 'Design',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd'
  }
];

const SuccessStories: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
            <p className="text-sm text-gray-500 mt-1">
              Inspiring journeys through skill trading
            </p>
          </div>
          <a
            href="/success-stories"
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all stories
            <span className="ml-2" aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex-shrink-0 h-48">
                <img
                  className="w-full h-full object-cover"
                  src={story.image}
                  alt={story.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={story.userAvatar}
                      alt={story.userName}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {story.userName}
                      </p>
                      <p className="text-sm text-gray-500">{story.category}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-base text-gray-500 line-clamp-3">
                    {story.content}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {story.rating.toFixed(1)}
                    </span>
                  </div>
                  <Award className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
