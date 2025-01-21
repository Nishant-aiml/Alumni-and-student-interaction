import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PlusCircle, Star, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface Story {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  title: string;
  content: string;
  images: string[];
  category: string;
  likes: number;
  comments: number;
  shares: number;
  rating: number;
  createdAt: string;
  tags: string[];
  likedBy: string[];
  commentsList: {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    content: string;
    createdAt: string;
  }[];
}

const dummyStories: Story[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Chen',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    title: 'From College Project to Startup Success',
    content: 'What started as a final year project in our college turned into a successful startup. Our team developed an AI-powered waste management system that is now being used by several municipalities. The journey wasn\'t easy, but the support from our college mentors and the startup ecosystem made it possible.',
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
    ],
    category: 'Entrepreneurship',
    likes: 234,
    comments: 45,
    shares: 23,
    rating: 4.8,
    createdAt: '2024-01-15T10:30:00Z',
    tags: ['startup', 'technology', 'sustainability'],
    likedBy: [],
    commentsList: []
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Rahul Sharma',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
    title: 'Landing My Dream Job Through College Network',
    content: 'The college\'s placement cell and alumni network played a crucial role in helping me land a position at Google. The mock interviews, resume workshops, and mentoring sessions prepared me well for the technical interviews. I\'m now working on cutting-edge AI projects!',
    images: [
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984'
    ],
    category: 'Career',
    likes: 456,
    comments: 89,
    shares: 67,
    rating: 4.9,
    createdAt: '2024-01-10T15:45:00Z',
    tags: ['career', 'technology', 'placement'],
    likedBy: [],
    commentsList: []
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Priya Patel',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    title: 'Winning the National Innovation Challenge',
    content: 'Our team\'s project on renewable energy solutions won the National Innovation Challenge 2024. The mentorship from our professors and the resources provided by the college innovation lab were instrumental in our success. The prize money is now helping us patent our technology.',
    images: [
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998'
    ],
    category: 'Innovation',
    likes: 345,
    comments: 56,
    shares: 34,
    rating: 4.7,
    createdAt: '2024-01-05T09:15:00Z',
    tags: ['innovation', 'renewable-energy', 'competition'],
    likedBy: [],
    commentsList: []
  }
];

const SuccessStories: React.FC = () => {
  const { user } = useAuth();
  const [stories, setStories] = useState<Story[]>(dummyStories);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [newComment, setNewComment] = useState('');
  const [newStory, setNewStory] = useState<Partial<Story>>({
    title: '',
    content: '',
    images: [],
    category: '',
    tags: []
  });

  const handleLike = (storyId: string) => {
    if (!user) return;

    setStories(prevStories => prevStories.map(story => {
      if (story.id === storyId) {
        const isLiked = story.likedBy.includes(user.id);
        return {
          ...story,
          likes: isLiked ? story.likes - 1 : story.likes + 1,
          likedBy: isLiked 
            ? story.likedBy.filter(id => id !== user.id)
            : [...story.likedBy, user.id]
        };
      }
      return story;
    }));
  };

  const handleComment = () => {
    if (!user || !selectedStory || !newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      userId: user.id,
      userName: user.firstName + ' ' + user.lastName,
      userAvatar: user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`,
      content: newComment.trim(),
      createdAt: new Date().toISOString()
    };

    setStories(prevStories => prevStories.map(story => {
      if (story.id === selectedStory.id) {
        return {
          ...story,
          comments: story.comments + 1,
          commentsList: [comment, ...story.commentsList]
        };
      }
      return story;
    }));

    setNewComment('');
  };

  const openComments = (story: Story) => {
    setSelectedStory(story);
    setShowCommentsModal(true);
  };

  const handleCreateStory = () => {
    if (newStory.title && newStory.content) {
      const story: Story = {
        id: Date.now().toString(),
        userId: user?.id || '',
        userName: user?.firstName + ' ' + user?.lastName || '',
        userAvatar: user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}`,
        title: newStory.title,
        content: newStory.content,
        images: newStory.images || [],
        category: newStory.category || 'General',
        likes: 0,
        comments: 0,
        shares: 0,
        rating: 0,
        createdAt: new Date().toISOString(),
        tags: newStory.tags || [],
        likedBy: [],
        commentsList: []
      };

      setStories([story, ...stories]);
      setShowCreateModal(false);
      setNewStory({
        title: '',
        content: '',
        images: [],
        category: '',
        tags: []
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Success Stories</h1>
            <p className="mt-2 text-sm text-gray-600">
              Inspiring journeys of students and alumni
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Share Your Story
          </button>
        </div>

        <div className="space-y-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={story.userAvatar}
                    alt={story.userName}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {story.userName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {new Date(story.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-700 mb-4">{story.content}</p>

                {story.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {story.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Story image ${index + 1}`}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleLike(story.id)}
                      className={`flex items-center ${
                        user && story.likedBy.includes(user.id)
                          ? 'text-indigo-600'
                          : 'text-gray-500 hover:text-indigo-600'
                      }`}
                    >
                      <ThumbsUp className="h-5 w-5 mr-1" />
                      {story.likes}
                    </button>
                    <button 
                      onClick={() => openComments(story)}
                      className="flex items-center text-gray-500 hover:text-indigo-600"
                    >
                      <MessageCircle className="h-5 w-5 mr-1" />
                      {story.comments}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-indigo-600">
                      <Share2 className="h-5 w-5 mr-1" />
                      {story.shares}
                    </button>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900">
                      {story.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Story Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Share Your Success Story
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={newStory.title}
                  onChange={(e) =>
                    setNewStory({ ...newStory, title: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Story
                </label>
                <textarea
                  value={newStory.content}
                  onChange={(e) =>
                    setNewStory({ ...newStory, content: e.target.value })
                  }
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={newStory.category}
                  onChange={(e) =>
                    setNewStory({ ...newStory, category: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select a category</option>
                  <option value="Entrepreneurship">Entrepreneurship</option>
                  <option value="Career">Career</option>
                  <option value="Innovation">Innovation</option>
                  <option value="Academic">Academic</option>
                  <option value="Personal Growth">Personal Growth</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g., startup, technology, innovation"
                  onChange={(e) =>
                    setNewStory({
                      ...newStory,
                      tags: e.target.value.split(',').map((tag) => tag.trim())
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateStory}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Share Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comments Modal */}
      {showCommentsModal && selectedStory && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
              <button
                onClick={() => setShowCommentsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-start space-x-4">
                <img
                  src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}`}
                  alt={user?.firstName}
                  className="h-10 w-10 rounded-full"
                />
                <div className="min-w-0 flex-1">
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Add a comment..."
                    />
                    <div className="absolute bottom-0 right-0 p-2">
                      <button
                        onClick={handleComment}
                        disabled={!newComment.trim()}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {selectedStory.commentsList.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={comment.userAvatar}
                      alt={comment.userName}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">
                        {comment.userName}
                      </span>
                      <span className="text-gray-500 ml-2">
                        {new Date(comment.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                      {comment.content}
                    </div>
                  </div>
                </div>
              ))}
              {selectedStory.commentsList.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No comments yet. Be the first to comment!
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
