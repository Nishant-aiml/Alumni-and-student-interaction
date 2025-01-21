import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const UniversalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m your website assistant. How can I help you navigate or learn more about our platform?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY'; // Replace with your actual API key

  const generateResponse = async (userMessage: string) => {
    try {
      if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
        throw new Error('Gemini API key not configured');
      }

      const siteKnowledge = `
        Site Knowledge Base:

        1. Authentication & Profile:
        - Users can register with email/password or social login
        - Profile customization with personal info, skills, education
        - Privacy settings for profile visibility
        - Profile picture upload and editing
        - Contact information management

        2. Feed Section:
        - Create, edit, and delete posts
        - Like and comment on posts
        - Filter posts by category
        - Share posts with other users
        - Bookmark important posts
        - Privacy controls for posts (public/friends)
        - Rich text editor for post creation
        - Image upload support

        3. Conversations:
        - Direct messaging with other users
        - Group chat functionality
        - Real-time message updates
        - Online status indicators
        - Message read receipts
        - File sharing capabilities
        - Search through chat history

        4. Groups:
        - Create and join student groups
        - Group discussion boards
        - Group event organization
        - Member management
        - Group privacy settings
        - Group resource sharing
        - Group roles and permissions

        5. Events:
        - View upcoming academic events
        - Event registration
        - Event reminders
        - Calendar integration
        - Event categories (workshops, seminars, etc.)
        - Event location and timing details
        - RSVP functionality

        6. Career Guidance:
        - AI-powered career counseling
        - Resume building tips
        - Interview preparation
        - Job market insights
        - Skill assessment tools
        - Industry trends analysis
        - Career path recommendations

        7. Learn with AI:
        - Personalized learning paths
        - Interactive tutorials
        - Progress tracking
        - Quiz and assessment tools
        - Resource recommendations
        - Study group formation
        - Learning analytics

        8. General Features:
        - Search functionality across platform
        - Notification system
        - Mobile responsive design
        - Dark/light theme
        - Accessibility features
        - Data privacy controls
        - Report/feedback system

        Navigation:
        - Top navigation bar for main sections
        - Sidebar for quick access
        - Mobile-friendly menu
        - Breadcrumb navigation
        - Quick action buttons
        - Search bar in header

        User Support:
        - FAQ section
        - Help documentation
        - Contact support
        - Bug reporting
        - Feature requests
        - Community guidelines
        - Terms of service

        User question: ${userMessage}
        
        Please provide a helpful, accurate response based on the above knowledge base. If the question is about navigation or features, be specific about where to find things and how to use them.`;

      const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro/generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: siteKnowledge
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('Gemini API Error:', errorData);
        throw new Error(`Failed to get response from Gemini: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format from Gemini API');
      }

      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof Error && error.message.includes('API key')) {
        return 'The chatbot is currently unavailable due to a configuration issue. Please contact the administrator.';
      }
      return 'I apologize, but I\'m having trouble connecting to my knowledge base right now. Please try again later or contact support if the problem persists.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    const response = await generateResponse(inputMessage);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        id="universal-chatbot"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      id="universal-chatbot"
      className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-xl transition-all duration-200 ${
        isMinimized ? 'w-72 h-16' : 'w-96 h-[600px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-6 w-6 text-indigo-600" />
          <h3 className="font-semibold text-gray-800">Website Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isMinimized ? <Maximize2 className="h-5 w-5" /> : <Minimize2 className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-[calc(100%-8rem)]">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-75">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about the website..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UniversalChatbot;
