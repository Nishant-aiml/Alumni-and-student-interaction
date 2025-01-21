import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: number;
}

interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    avatar: string;
  }[];
  messages: Message[];
  lastMessage: string;
  lastMessageTime: number;
}

const Conversations: React.FC = () => {
  const [conversations, setConversations] = React.useState<Conversation[]>([
    {
      id: '1',
      participants: [
        {
          id: '2',
          name: 'Jane Smith',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
        },
      ],
      messages: [],
      lastMessage: 'Hey, how are you?',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '2',
      participants: [
        {
          id: '3',
          name: 'Dr. Sarah Chen',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
        },
      ],
      messages: [],
      lastMessage: 'I can help you with your research methodology',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '3',
      participants: [
        {
          id: '4',
          name: 'Prof. James Wilson',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
        },
      ],
      messages: [],
      lastMessage: 'Let\'s discuss your project progress tomorrow',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '4',
      participants: [
        {
          id: '5',
          name: 'Emma Thompson',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
        },
      ],
      messages: [],
      lastMessage: 'Thanks for sharing the study materials!',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '5',
      participants: [
        {
          id: '6',
          name: 'Dr. Raj Patel',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=raj',
        },
      ],
      messages: [],
      lastMessage: 'The lab results look promising',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '6',
      participants: [
        {
          id: '7',
          name: 'Maria Garcia',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
        },
      ],
      messages: [],
      lastMessage: 'Can you share your notes from today\'s lecture?',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '7',
      participants: [
        {
          id: '8',
          name: 'Alex Kumar',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
        },
      ],
      messages: [],
      lastMessage: 'The team meeting is scheduled for 3 PM',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '8',
      participants: [
        {
          id: '9',
          name: 'Lisa Wang',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
        },
      ],
      messages: [],
      lastMessage: 'I\'ve shared the research papers in the drive',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '9',
      participants: [
        {
          id: '10',
          name: 'David Brown',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
        },
      ],
      messages: [],
      lastMessage: 'Great presentation today!',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '10',
      participants: [
        {
          id: '11',
          name: 'Sophie Anderson',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sophie',
        },
      ],
      messages: [],
      lastMessage: 'Let\'s review the project proposal',
      lastMessageTime: Date.now() - 3600000,
    },
    {
      id: '11',
      participants: [
        {
          id: '12',
          name: 'Michael Zhang',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
        },
      ],
      messages: [],
      lastMessage: 'The workshop starts in 30 minutes',
      lastMessageTime: Date.now() - 3600000,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = React.useState<string | null>(null);
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = (conversationId: string) => {
    if (!newMessage.trim()) return;

    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          messages: [...conv.messages, {
            id: Date.now().toString(),
            senderId: 'currentUser',
            senderName: 'You',
            content: newMessage,
            timestamp: Date.now(),
          }],
          lastMessage: newMessage,
          lastMessageTime: Date.now(),
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setNewMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-white rounded-lg shadow">
      {/* Conversations List */}
      <div className="w-1/3 border-r">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {conversations.map(conversation => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                selectedConversation === conversation.id ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={conversation.participants[0].avatar}
                  alt={conversation.participants[0].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{conversation.participants[0].name}</h3>
                  <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(conversation.lastMessageTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">
              {conversations.find(c => c.id === selectedConversation)?.participants[0].name}
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {conversations
              .find(c => c.id === selectedConversation)
              ?.messages.map(message => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.senderId === 'currentUser'
                      ? 'ml-auto'
                      : 'mr-auto'
                  }`}
                >
                  <div
                    className={`max-w-xs mx-2 p-3 rounded-lg ${
                      message.senderId === 'currentUser'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {message.content}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(selectedConversation);
                  }
                }}
              />
              <button
                onClick={() => handleSendMessage(selectedConversation)}
                className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No conversation selected</h3>
            <p className="mt-1 text-sm text-gray-500">
              Choose a conversation from the list to start chatting
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversations;
