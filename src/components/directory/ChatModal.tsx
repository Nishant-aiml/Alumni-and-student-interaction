import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  alumni: {
    id: string;
    name: string;
    avatar: string;
    position: string;
    company: string;
  };
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, alumni }) => {
  const { userData } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate dummy initial messages
  useEffect(() => {
    const dummyMessages: Message[] = [
      {
        id: '1',
        senderId: alumni.id,
        text: `Hi there! Thanks for reaching out. I'm currently working as a ${alumni.position} at ${alumni.company}.`,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
      }
    ];
    setMessages(dummyMessages);
  }, [alumni]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user's message
    const userMessage: Message = {
      id: Date.now().toString(),
      senderId: userData?.uid || 'current_user',
      text: newMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate alumni response after a delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! I'd be happy to help.",
        "That's an interesting question. Let me share my experience.",
        "I appreciate you reaching out. Let's definitely connect!",
        "Great to hear from you! Yes, I'd be glad to discuss this further."
      ];
      const alumniResponse: Message = {
        id: (Date.now() + 1).toString(),
        senderId: alumni.id,
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, alumniResponse]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <img
              src={alumni.avatar}
              alt={alumni.name}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
              <p className="text-sm text-gray-500">{alumni.position} at {alumni.company}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === alumni.id ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.senderId === alumni.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatModal;
