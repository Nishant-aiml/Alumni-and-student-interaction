import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAw6O6Bw1srs-O3nWy9TWgqatXIJ8ZwaQs");

interface Message {
  text: string;
  isUser: boolean;
  timestamp?: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Format the response text with markdown-like syntax
  const formatResponse = (text: string): string => {
    try {
      // Replace **text** with bold styling
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Replace bullet points
      text = text.replace(/•/g, '•');
      
      // Add spacing after periods and line breaks
      text = text.replace(/\. /g, '.\n\n');
      
      // Format lists
      text = text.replace(/(\d+\.) /g, '\n$1 ');
      
      return text;
    } catch (error) {
      console.error('Error formatting response:', error);
      return text;
    }
  };

  const generateSystemPrompt = () => {
    return `You are an AI assistant for a student community platform. Your responses should be:
1. Helpful and informative
2. Concise and well-structured
3. Professional yet friendly
4. Focused on student and academic context

When answering:
- Use bullet points for lists
- Bold important terms using **term**
- Keep responses under 3-4 sentences unless more detail is needed
- Provide specific examples when relevant
- If you're not sure about something, be honest about it

Current context: You're helping with a student platform that includes features for:
- Career guidance
- Skill development
- Event information
- Community networking
- Resource sharing`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    try {
      const userMessage = { 
        text: inputMessage, 
        isUser: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsLoading(true);

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.isUser ? "user" : "assistant",
          parts: msg.text,
        })),
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        },
      });

      const result = await chat.sendMessage(
        generateSystemPrompt() + "\n\nUser Query: " + inputMessage
      );
      const response = await result.response;
      const formattedResponse = formatResponse(response.text());
      
      const botMessage = { 
        text: formattedResponse, 
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in chat interaction:', error);
      const errorMessage = { 
        text: 'I apologize, but I encountered an error. Please try rephrasing your question or ask something else.', 
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTimestamp = (date?: Date) => {
    if (!date) return '';
    try {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return '';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                   text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300 
                   flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col transform transition-all duration-300 animate-slideIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-sm text-blue-100">Always here to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="font-medium">Welcome to our Student Community Assistant!</p>
                <p className="text-sm mt-2">Ask me about careers, skills, events, or any other student-related topics.</p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div className="flex flex-col max-w-[80%] gap-1">
                  <div
                    className={`rounded-2xl p-4 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : 'bg-white text-gray-800 shadow-md'
                    } transform transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div 
                      className="text-sm leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={
                        message.isUser 
                          ? { __html: message.text } 
                          : { __html: message.text.replace(/\n/g, '<br>') }
                      }
                    />
                  </div>
                  {message.timestamp && (
                    <span className={`text-xs ${message.isUser ? 'text-right' : 'text-left'} text-gray-500`}>
                      {formatTimestamp(message.timestamp)}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white rounded-2xl p-4 shadow-md flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-6 bg-white rounded-b-2xl">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 
                         transition-all duration-300 placeholder-gray-400 text-gray-700"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-6 py-3 
                         hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 
                         disabled:cursor-not-allowed transform hover:scale-105 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
