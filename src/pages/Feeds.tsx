import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThumbsUp, MessageCircle, Share2, BookmarkIcon, Star, Filter, Image as ImageIcon, Smile, Send } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import ConversationsList from '../components/feeds/ConversationsList';
import ChatModal from '../components/directory/ChatModal';

interface Feed {
  id: string;
  userName: string;
  userAvatar: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
  isBookmarked: boolean;
  createdAt: string;
  likedBy: string[];
  commentsList: any[];
}

const Feeds: React.FC = () => {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [feeds, setFeeds] = useState<Feed[]>([]);
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
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [showChatModal, setShowChatModal] = useState(false);
  const [bookmarkedFeeds, setBookmarkedFeeds] = useState<Feed[]>([]);
  const [starredEvents, setStarredEvents] = useState<any[]>([]);
  const [userProfile, setUserProfile] = useState({
    displayName: '',
    university: ''
  });

  // Initial dummy feeds data
  const initialFeeds: Feed[] = [
    {
      id: '1',
      userName: 'Priya Sharma',
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      content: 'Just completed my internship at Google! Excited to share that I\'ll be joining their ML team full-time. Grateful for this opportunity! 🚀 #TechCareers #WomenInTech',
      images: ['https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format'],
      likes: 245,
      comments: 28,
      shares: 15,
      isBookmarked: false,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      likedBy: [],
      commentsList: []
    },
    {
      id: '2',
      userName: 'Rahul Verma',
      userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
      content: 'Sharing my experience from the recent hackathon at VNIT. Our team built a sustainable energy monitoring system using IoT and won first place! Check out the project demo 👇',
      images: [
        'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&auto=format',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format'
      ],
      likes: 189,
      comments: 42,
      shares: 23,
      isBookmarked: true,
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      likedBy: [],
      commentsList: []
    }
  ];

  // Initialize feeds state with dummy data
  useEffect(() => {
    setFeeds(initialFeeds);
  }, []);

  // Handle navigation
  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  // Handle edit profile
  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  // Handle unstar event
  const handleUnstarEvent = (eventId: string) => {
    setStarredEvents(prev => prev.filter(event => event.id !== eventId));
  };

  // Update userProfile when userData changes
  useEffect(() => {
    if (userData) {
      setUserProfile(prev => ({
        ...prev,
        displayName: `${userData.firstName} ${userData.lastName}`,
        university: userData.company || 'University Name',
        bio: userData.bio || ''
      }));
    }
  }, [userData]);

  // Handle like
  const handleLike = (feedId: string) => {
    setFeeds(feeds.map(feed => {
      if (feed.id === feedId) {
        const isLiked = feed.likedBy.includes(userData?.uid || 'anonymous');
        return {
          ...feed,
          likes: isLiked ? feed.likes - 1 : feed.likes + 1,
          likedBy: isLiked
            ? feed.likedBy.filter(id => id !== userData?.uid)
            : [...feed.likedBy, userData?.uid || 'anonymous']
        };
      }
      return feed;
    }));
  };

  // Handle comment
  const handleComment = (feedId: string, commentText?: string) => {
    const text = commentText || comments[feedId];
    if (!text?.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      userId: userData?.uid || 'anonymous',
      userName: userProfile.displayName,
      userAvatar: userData?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
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

  // Handle bookmark
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

  // Handle share
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

  // Get filtered content
  const getFilteredContent = () => {
    switch (activeSection) {
      case 'feeds':
        return feeds
          .filter(feed => {
            if (filter === 'all') return true;
            if (filter === 'following') return feed.userId === userData?.uid;
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
      case 'events':
        // This would typically fetch from an API
        return [];
      default:
        return feeds
          .filter(feed => {
            if (filter === 'all') return true;
            if (filter === 'following') return feed.userId === userData?.uid;
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

  // Handle post submit
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newFeed: Feed = {
      id: Date.now().toString(),
      userId: userData?.uid || 'anonymous',
      userName: userProfile.displayName,
      userAvatar: userData?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
      content: newPost,
      images: selectedImages ? Array.from(selectedImages).map(file => URL.createObjectURL(file)) : [],
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: new Date().toISOString(),
      likedBy: [],
      commentsList: [],
      isBookmarked: false,
    };

    setFeeds([newFeed, ...feeds]);
    setNewPost('');
    setSelectedImages(null);
  };

  // Render section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'feeds':
        return (
          <div className="space-y-6">
            {/* Create Post Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  {userProfile.displayName.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your thoughts, experiences, or achievements..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                        <ImageIcon className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                        <Smile className="h-5 w-5" />
                      </button>
                    </div>
                    <button 
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium flex items-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed Posts */}
            <div className="space-y-6">
              {feeds.map((feed) => (
                <div key={feed.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Post Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={feed.userAvatar} 
                        alt={feed.userName}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900">{feed.userName}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(feed.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{feed.content}</p>
                  </div>

                  {/* Post Images */}
                  {feed.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-1">
                      {feed.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Post image ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      ))}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(feed.id)}
                          className={`flex items-center space-x-2 ${
                            feed.likedBy.includes(currentUser?.uid || '')
                              ? 'text-indigo-600'
                              : 'text-gray-500 hover:text-indigo-600'
                          }`}
                        >
                          <ThumbsUp className="h-5 w-5" />
                          <span>{feed.likes}</span>
                        </button>
                        <button
                          onClick={() => setShowComments({ ...showComments, [feed.id]: !showComments[feed.id] })}
                          className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span>{feed.comments}</span>
                        </button>
                        <button
                          onClick={() => handleShare(feed.id)}
                          className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600"
                        >
                          <Share2 className="h-5 w-5" />
                          <span>{feed.shares}</span>
                        </button>
                        <button
                          onClick={() => handleBookmark(feed.id)}
                          className={`flex items-center space-x-2 ${
                            feed.isBookmarked
                              ? 'text-indigo-600'
                              : 'text-gray-500 hover:text-indigo-600'
                          }`}
                        >
                          <BookmarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bookmarks':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Bookmarked Posts</h2>
            {bookmarkedFeeds.length > 0 ? (
              bookmarkedFeeds.map((feed) => (
                // Render bookmarked posts similar to regular feeds
                <div key={feed.id} className="bg-white rounded-lg shadow p-6">
                  {/* Post content */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={feed.userAvatar} 
                        alt={feed.userName}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900">{feed.userName}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(feed.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{feed.content}</p>
                  </div>

                  {/* Post Images */}
                  {feed.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-1">
                      {feed.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Post image ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      ))}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                          <ThumbsUp className="h-5 w-5" />
                          <span>{feed.likes}</span>
                        </button>
                        <button 
                          onClick={() => handleOpenCommentsModal(feed)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span>{feed.comments}</span>
                        </button>
                        <button 
                          onClick={() => handleOpenShareModal(feed)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                          <Share2 className="h-5 w-5" />
                          <span>{feed.shares}</span>
                        </button>
                      </div>
                      <button 
                        className={`text-gray-600 hover:text-indigo-600 transition-colors
                          ${feed.isBookmarked ? 'text-indigo-600' : ''}`}
                      >
                        <BookmarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow">
                <BookmarkIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No bookmarks yet</h3>
                <p className="mt-1 text-sm text-gray-500">Start bookmarking posts you'd like to read later.</p>
              </div>
            )}
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Starred Events</h2>
            {starredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {starredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                      </div>
                      <button
                        onClick={() => handleUnstarEvent(event.id)}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        <Star className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow">
                <Star className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No starred events</h3>
                <p className="mt-1 text-sm text-gray-500">Star events you're interested in to keep track of them.</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Profile */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className="inline-block rounded-full bg-indigo-600 p-6 mb-4">
                  <span className="text-3xl font-bold text-white">
                    {userProfile.displayName.charAt(0)}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{userProfile.displayName}</h2>
                <p className="text-gray-500 text-sm">{userProfile.university}</p>
                <button
                  onClick={handleEditProfile}
                  className="mt-4 w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
                >
                  Edit Profile
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                <button
                  onClick={() => handleNavigation('feeds')}
                  className={`flex w-full items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'feeds'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                  <span>My Feeds & Bookmarks</span>
                </button>

                <button
                  onClick={() => handleNavigation('events')}
                  className={`flex w-full items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'events'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Star className="h-5 w-5" />
                  <span>Starred Events</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow">
            {renderSectionContent()}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-96 space-y-6">
            {/* Messages Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages</h2>
              <ConversationsList
                onSelectConversation={(conversation) => {
                  setSelectedConversation(conversation);
                  setShowChatModal(true);
                }}
              />
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-4">
                {/* Add trending topics content */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      {selectedConversation && (
        <ChatModal
          isOpen={showChatModal}
          onClose={() => {
            setShowChatModal(false);
            setSelectedConversation(null);
          }}
          alumni={{
            id: selectedConversation.id,
            name: selectedConversation.user.name,
            avatar: selectedConversation.user.avatar,
            position: 'Alumni',
            company: 'Tech Company'
          }}
        />
      )}
    </div>
  );
};

export default Feeds;
