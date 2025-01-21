import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { ThumbsUp, MessageCircle, Share2, Bookmark, Filter, Image as ImageIcon, Smile, Send, 
  BookmarkIcon, MessageSquare, Users, Star, Briefcase, BookOpen, X } from 'lucide-react';

interface Feed {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  likedBy: string[];
  commentsList: {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    content: string;
    createdAt: string;
  }[];
  isBookmarked: boolean;
  tags: string[];
}

const dummyFeeds: Feed[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Chen',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    content: 'Just completed my machine learning project using TensorFlow! 🚀 The model successfully predicts student performance based on various factors. Excited to share more details soon! #MachineLearning #AI #Education',
    images: [
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
      'https://images.unsplash.com/photo-1551434678-e076c223a692'
    ],
    likes: 42,
    comments: 8,
    shares: 5,
    createdAt: '2024-01-20T15:30:00Z',
    likedBy: [],
    commentsList: [],
    isBookmarked: false,
    tags: ['AI', 'Education', 'Technology']
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Alex Kumar',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    content: 'Our team won the first prize at the National Robotics Competition! 🏆 Months of hard work paid off. Special thanks to our mentors and college for the support. Check out our winning robot in action! #Robotics #Innovation',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    ],
    likes: 156,
    comments: 23,
    shares: 18,
    createdAt: '2024-01-19T18:45:00Z',
    likedBy: [],
    commentsList: [],
    isBookmarked: true,
    tags: ['Robotics', 'Competition', 'Engineering']
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Priya Patel',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    content: 'Hosted a successful workshop on "Women in Tech" today! 👩‍💻 Amazing to see so many passionate students interested in tech careers. Together we can bridge the gender gap in tech. Swipe to see highlights! #WomenInTech #Diversity',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998'
    ],
    likes: 89,
    comments: 15,
    shares: 12,
    createdAt: '2024-01-18T12:15:00Z',
    likedBy: [],
    commentsList: [],
    isBookmarked: false,
    tags: ['WomenInTech', 'Workshop', 'Diversity']
  },
  {
    id: '4',
    userId: 'user4',
    userName: 'David Wilson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    content: 'Breakthrough in our renewable energy research! 🌱 Our new solar panel design shows 25% higher efficiency. Proud of what our team has achieved. Details in the attached presentation. #CleanEnergy #Innovation',
    images: [
      'https://images.unsplash.com/photo-1509391366360-e076c223a692',
      'https://images.unsplash.com/photo-1509390836518-c3b785134897'
    ],
    likes: 213,
    comments: 45,
    shares: 67,
    createdAt: '2024-01-17T09:30:00Z',
    likedBy: [],
    commentsList: [],
    isBookmarked: true,
    tags: ['Sustainability', 'Research', 'Innovation']
  }
];

const Feeds: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [feeds, setFeeds] = useState<Feed[]>(dummyFeeds);
  const [newPost, setNewPost] = useState('');
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [activeSection, setActiveSection] = useState('feeds');
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState<Feed | null>(null);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [userProfile, setUserProfile] = useState({
    displayName: user?.displayName || 'Demo User',
    university: 'XYZ University',
    bio: '',
    interests: [] as string[],
    skills: [] as string[],
    bookmarks: [] as string[]
  });

  useEffect(() => {
    const path = location.pathname.split('/')[1] || 'feeds';
    setActiveSection(path);
  }, [location]);

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleProfileUpdate = (updatedProfile: typeof userProfile) => {
    setUserProfile(updatedProfile);
    setShowEditProfile(false);
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    navigate(`/${section}`);
  };

  const handleOpenCommentsModal = (feed: Feed) => {
    setSelectedFeed(feed);
    setShowCommentsModal(true);
  };

  const handleCloseCommentsModal = () => {
    setSelectedFeed(null);
    setShowCommentsModal(false);
    setComments({});
  };

  const handleOpenShareModal = (feed: Feed) => {
    setSelectedFeed(feed);
    setShowShareModal(true);
  };

  const handleShare = (platform: string) => {
    if (!selectedFeed) return;
    
    // Implement sharing logic based on platform
    const shareUrl = `https://yourapp.com/feed/${selectedFeed.id}`;
    const shareText = selectedFeed.content;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        // Show a toast notification
        break;
    }
    
    setShowShareModal(false);
    
    // Update share count
    setFeeds(feeds.map(feed => 
      feed.id === selectedFeed.id 
        ? { ...feed, shares: feed.shares + 1 }
        : feed
    ));
  };

  const handleBookmark = (feedId: string) => {
    // Update the feed's bookmark status
    setFeeds(feeds.map(feed => 
      feed.id === feedId 
        ? { ...feed, isBookmarked: !feed.isBookmarked }
        : feed
    ));

    // Update user's bookmarks
    setUserProfile(prev => {
      const currentFeed = feeds.find(f => f.id === feedId);
      const newBookmarks = currentFeed?.isBookmarked
        ? prev.bookmarks.filter(id => id !== feedId)
        : [...prev.bookmarks, feedId];
      return { ...prev, bookmarks: newBookmarks };
    });
  };

  const handleComment = (feedId: string, commentText?: string) => {
    const text = commentText || comments[feedId];
    if (!text?.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      userId: user?.uid || 'anonymous',
      userName: userProfile.displayName,
      userAvatar: user?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
      content: text.trim(),
      createdAt: new Date().toISOString(),
    };

    setFeeds(feeds.map(feed => {
      if (feed.id === feedId) {
        return {
          ...feed,
          comments: feed.comments + 1,
          commentsList: [newComment, ...feed.commentsList]
        };
      }
      return feed;
    }));

    setComments({ ...comments, [feedId]: '' });
  };

  const handleLike = (feedId: string) => {
    setFeeds(feeds.map(feed => {
      if (feed.id === feedId) {
        const isLiked = feed.likedBy.includes(user?.uid || 'anonymous');
        return {
          ...feed,
          likes: isLiked ? feed.likes - 1 : feed.likes + 1,
          likedBy: isLiked
            ? feed.likedBy.filter(id => id !== user?.uid)
            : [...feed.likedBy, user?.uid || 'anonymous']
        };
      }
      return feed;
    }));
  };

  const getFilteredContent = () => {
    switch (activeSection) {
      case 'feeds':
        return feeds
          .filter(feed => {
            if (filter === 'all') return true;
            if (filter === 'following') return feed.userId === user?.uid;
            if (filter === 'trending') return feed.likes > 50;
            return true;
          })
          .sort((a, b) => {
            if (sortBy === 'recent') {
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
            return b.likes - a.likes;
          });
      case 'bookmarks':
        return feeds.filter(feed => feed.isBookmarked);
      case 'groups':
        // This would typically fetch from an API
        return [];
      case 'events':
        // This would typically fetch from an API
        return [];
      default:
        return feeds
          .filter(feed => {
            if (filter === 'all') return true;
            if (filter === 'following') return feed.userId === user?.uid;
            if (filter === 'trending') return feed.likes > 50;
            return true;
          })
          .sort((a, b) => {
            if (sortBy === 'recent') {
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
            return b.likes - a.likes;
          });
    }
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newFeed: Feed = {
      id: Date.now().toString(),
      userId: user?.uid || 'anonymous',
      userName: user?.displayName || 'Anonymous User',
      userAvatar: user?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
      content: newPost,
      images: selectedImages ? Array.from(selectedImages).map(file => URL.createObjectURL(file)) : [],
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: new Date().toISOString(),
      likedBy: [],
      commentsList: [],
      isBookmarked: false,
      tags: extractTags(newPost),
    };

    setFeeds([newFeed, ...feeds]);
    setNewPost('');
    setSelectedImages(null);
  };

  const extractTags = (content: string): string[] => {
    const tags = content.match(/#\w+/g);
    return tags ? tags.map(tag => tag.slice(1)) : [];
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg fixed h-full overflow-y-auto">
        {/* Profile Section */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
              {userProfile.displayName.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{userProfile.displayName}</h2>
              <p className="text-gray-600">Student at {userProfile.university}</p>
            </div>
          </div>
          <button 
            onClick={handleEditProfile}
            className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Edit Profile
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => handleNavigation('feeds')}
            className={`flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 ${
              activeSection === 'feeds' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
            }`}
          >
            <BookmarkIcon className="w-5 h-5" />
            <span className="font-medium">My Feeds & Bookmarks</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('conversations')}
            className={`flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 ${
              activeSection === 'conversations' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Conversations</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('groups')}
            className={`flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 ${
              activeSection === 'groups' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Groups Joined</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('events')}
            className={`flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 ${
              activeSection === 'events' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
            }`}
          >
            <Star className="w-5 h-5" />
            <span className="font-medium">Starred Events</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('career-guidance')}
            className={`flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 ${
              activeSection === 'career-guidance' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Career Guidance AI</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('learn')}
            className={`flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 ${
              activeSection === 'learn' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Learn with AI</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-80">
        <div className="max-w-4xl mx-auto p-4 space-y-6">
          {/* Edit Profile Modal */}
          {showEditProfile && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleProfileUpdate(userProfile);
                }}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        value={userProfile.displayName}
                        onChange={(e) => setUserProfile({ ...userProfile, displayName: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">University</label>
                      <input
                        type="text"
                        value={userProfile.university}
                        onChange={(e) => setUserProfile({ ...userProfile, university: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Bio</label>
                      <textarea
                        value={userProfile.bio}
                        onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowEditProfile(false)}
                      className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Conditional Content Based on Active Section */}
          {activeSection === 'feeds' && (
            <>
              {/* Post Creation Form */}
              <div className="bg-white rounded-lg shadow p-4">
                <form onSubmit={handlePostSubmit} className="space-y-4">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your thoughts, achievements, or ask for help..."
                    className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={3}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <label className="cursor-pointer flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
                        <ImageIcon className="w-5 h-5" />
                        <span>Add Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={(e) => setSelectedImages(e.target.files)}
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>

              {/* Feed Content */}
              <div className="space-y-4 mt-6">
                {getFilteredContent().map((feed) => (
                  <div key={feed.id} className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={feed.userAvatar}
                        alt={feed.userName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{feed.userName}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(feed.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-800 mb-4">{feed.content}</p>
                    
                    {feed.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {feed.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Post image ${index + 1}`}
                            className="rounded-lg w-full h-48 object-cover"
                          />
                        ))}
                      </div>
                    )}

                    {feed.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {feed.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t pt-4">
                      <button
                        onClick={() => handleLike(feed.id)}
                        className={`flex items-center space-x-2 ${
                          feed.likedBy.includes(user?.uid || '') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                        }`}
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <span>{feed.likes}</span>
                      </button>

                      <button
                        onClick={() => handleOpenCommentsModal(feed)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>{feed.comments}</span>
                      </button>

                      <button
                        onClick={() => handleOpenShareModal(feed)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                      >
                        <Share2 className="w-5 h-5" />
                        <span>{feed.shares}</span>
                      </button>

                      <button
                        onClick={() => handleBookmark(feed.id)}
                        className={`flex items-center space-x-2 ${
                          feed.isBookmarked ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                        }`}
                      >
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === 'conversations' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Conversations</h2>
              <div className="bg-white rounded-lg shadow divide-y">
                {[
                  {
                    id: '1',
                    name: 'Sarah Chen',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                    lastMessage: 'Hey, I saw your post about the ML project. Would love to collaborate!',
                    time: '2 min ago',
                    unread: true
                  },
                  {
                    id: '2',
                    name: 'Alex Kumar',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
                    lastMessage: 'The AI workshop was amazing! Thanks for recommending it.',
                    time: '1 hour ago',
                    unread: false
                  },
                  {
                    id: '3',
                    name: 'Maria Garcia',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
                    lastMessage: 'Can you share those research papers we discussed?',
                    time: '2 hours ago',
                    unread: true
                  }
                ].map(chat => (
                  <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-900">{chat.name}</p>
                          <p className="text-sm text-gray-500">{chat.time}</p>
                        </div>
                        <p className={`text-sm truncate ${chat.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                          {chat.lastMessage}
                        </p>
                      </div>
                      {chat.unread && (
                        <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'groups' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Groups</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: '1',
                    name: 'AI/ML Research Group',
                    members: 128,
                    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=AI',
                    active: true
                  },
                  {
                    id: '2',
                    name: 'Web Development Hub',
                    members: 95,
                    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Web',
                    active: true
                  },
                  {
                    id: '3',
                    name: 'Robotics Club',
                    members: 76,
                    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Robotics',
                    active: false
                  },
                  {
                    id: '4',
                    name: 'Competitive Programming',
                    members: 152,
                    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=CP',
                    active: true
                  }
                ].map(group => (
                  <div key={group.id} className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center space-x-4">
                      <img src={group.avatar} alt={group.name} className="w-16 h-16 rounded-lg" />
                      <div>
                        <h3 className="font-semibold text-lg">{group.name}</h3>
                        <p className="text-gray-500">{group.members} members</p>
                        <div className="flex items-center mt-2">
                          <div className={`w-2 h-2 rounded-full ${group.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="ml-2 text-sm text-gray-500">{group.active ? 'Active now' : 'Inactive'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'career-guidance' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Career Guidance AI</h2>
              
              {/* Career Assessment */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Personalized Career Path Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Take our AI-powered assessment to discover career paths that match your skills, interests, and goals.
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Start Assessment
                </button>
              </div>

              {/* Industry Insights */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Machine Learning Engineer',
                      growth: '25%',
                      demand: 'High',
                      skills: ['Python', 'TensorFlow', 'Data Analysis']
                    },
                    {
                      title: 'Full Stack Developer',
                      growth: '22%',
                      demand: 'Very High',
                      skills: ['JavaScript', 'React', 'Node.js']
                    },
                    {
                      title: 'Cloud Architect',
                      growth: '20%',
                      demand: 'High',
                      skills: ['AWS', 'Azure', 'DevOps']
                    }
                  ].map((career, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{career.title}</h4>
                        <span className="text-green-600">+{career.growth} growth</span>
                      </div>
                      <p className="text-sm text-gray-500">Demand: {career.demand}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {career.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Builder */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">AI Resume Builder</h3>
                <p className="text-gray-600 mb-4">
                  Create a professional resume tailored to your target role with our AI-powered builder.
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Build Resume
                </button>
              </div>
            </div>
          )}

          {activeSection === 'learn' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Learn with AI</h2>
              
              {/* Personalized Learning Paths */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Your Learning Path</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Machine Learning Fundamentals',
                      progress: 75,
                      nextTopic: 'Neural Networks',
                      timeLeft: '2 hours'
                    },
                    {
                      title: 'Web Development Bootcamp',
                      progress: 45,
                      nextTopic: 'React Hooks',
                      timeLeft: '3 hours'
                    },
                    {
                      title: 'Data Structures & Algorithms',
                      progress: 60,
                      nextTopic: 'Graph Algorithms',
                      timeLeft: '1.5 hours'
                    }
                  ].map((course, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{course.title}</h4>
                        <span className="text-sm text-gray-500">{course.progress}% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Next: {course.nextTopic}</span>
                        <span>{course.timeLeft} left</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Study Assistant */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">AI Study Assistant</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Ask anything about your courses</h4>
                      <p className="text-sm text-gray-500">Get instant help with concepts, problems, or projects</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask a question..."
                      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                      Ask AI
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">12</div>
                    <div className="text-sm text-gray-500">Courses Completed</div>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">48</div>
                    <div className="text-sm text-gray-500">Hours Learned</div>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">89%</div>
                    <div className="text-sm text-gray-500">Average Score</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showCommentsModal && selectedFeed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Comments</h2>
              <button 
                onClick={handleCloseCommentsModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedFeed.commentsList.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img
                    src={comment.userAvatar}
                    alt={comment.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{comment.userName}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-800">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-3">
                <img
                  src={user?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.uid}`}
                  alt={userProfile.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 flex space-x-2">
                  <input
                    type="text"
                    value={comments[selectedFeed.id] || ''}
                    onChange={(e) => setComments({ ...comments, [selectedFeed.id]: e.target.value })}
                    placeholder="Write a comment..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleComment(selectedFeed.id);
                      }
                    }}
                  />
                  <button
                    onClick={() => handleComment(selectedFeed.id)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showShareModal && selectedFeed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Share Post</h2>
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleShare('twitter')}
                className="w-full p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-100"
              >
                <span className="text-blue-400">Twitter</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-100"
              >
                <span className="text-blue-500">LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-full p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-100"
              >
                <span className="text-blue-600">Facebook</span>
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="w-full p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-100"
              >
                <span className="text-gray-600">Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feeds;
