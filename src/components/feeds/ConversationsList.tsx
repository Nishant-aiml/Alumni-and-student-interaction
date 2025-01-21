import React, { useState } from 'react';
import { Search, MoreVertical, Circle } from 'lucide-react';

interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
    isOnline: boolean;
    lastSeen?: string;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    unread: boolean;
  };
}

const dummyConversations: Conversation[] = [
  {
    id: '1',
    user: {
      name: 'Priya Sharma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      isOnline: true,
    },
    lastMessage: {
      text: 'Thanks for sharing the project details! Looking forward to collaborating.',
      timestamp: '10:30 AM',
      unread: true,
    },
  },
  {
    id: '2',
    user: {
      name: 'Rahul Verma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
      isOnline: false,
      lastSeen: '2 hours ago',
    },
    lastMessage: {
      text: 'The hackathon was amazing! We should participate again next time.',
      timestamp: 'Yesterday',
      unread: false,
    },
  },
  {
    id: '3',
    user: {
      name: 'Neha Gupta',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
      isOnline: true,
    },
    lastMessage: {
      text: 'Can you share your experience about the internship at Google?',
      timestamp: '2 days ago',
      unread: true,
    },
  },
  {
    id: '4',
    user: {
      name: 'Aditya Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aditya',
      isOnline: false,
      lastSeen: '1 day ago',
    },
    lastMessage: {
      text: 'The ML workshop was really insightful. Here are some resources...',
      timestamp: '3 days ago',
      unread: false,
    },
  },
  {
    id: '5',
    user: {
      name: 'Sneha Reddy',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha',
      isOnline: true,
    },
    lastMessage: {
      text: 'Would love to connect and discuss tech opportunities!',
      timestamp: '4 days ago',
      unread: false,
    },
  },
];

interface ConversationsListProps {
  onSelectConversation: (conversation: Conversation) => void;
}

const ConversationsList: React.FC<ConversationsListProps> = ({ onSelectConversation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = dummyConversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Search Bar */}
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Conversations List */}
      <div className="divide-y">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="h-12 w-12 rounded-full"
                />
                {conversation.user.isOnline && (
                  <Circle className="absolute bottom-0 right-0 h-3 w-3 text-green-500 fill-current" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {conversation.user.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">
                      {conversation.lastMessage.timestamp}
                    </span>
                    {conversation.lastMessage.unread && (
                      <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {conversation.lastMessage.text}
                </p>
                {!conversation.user.isOnline && conversation.user.lastSeen && (
                  <p className="text-xs text-gray-400 mt-1">
                    Last seen {conversation.user.lastSeen}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
