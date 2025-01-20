import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
  Chip,
} from '@mui/material';
import { Message, Send } from '@mui/icons-material';

interface ChatMessage {
  id: number;
  user: string;
  message: string;
  timestamp: string;
}

const LiveDiscussions: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      user: "John Doe",
      message: "Has anyone implemented GPT-4 in their projects?",
      timestamp: "15:25"
    },
    {
      id: 2,
      user: "Jane Smith",
      message: "Yes, I've used it for text generation and analysis",
      timestamp: "15:26"
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const activeSessions = [
    "AI/ML Implementation Discussion",
    "Career Growth in Tech",
    "Startup Funding Strategies",
    "Technical Architecture Design"
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: messages.length + 1,
        user: "Current User", // In a real app, this would come from auth
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Live Discussions
      </Typography>

      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Active Sessions List */}
        <Paper sx={{ width: '30%', p: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Active Sessions
          </Typography>
          <List>
            {activeSessions.map((session, index) => (
              <ListItem 
                key={index}
                sx={{ 
                  mb: 1, 
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  '&:hover': { backgroundColor: '#f5f5f5' }
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <Message />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={session}
                  secondary="Active now"
                />
                <Chip 
                  label="Join"
                  color="primary"
                  size="small"
                  onClick={() => {}}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Chat Area */}
        <Paper sx={{ width: '70%', p: 2, display: 'flex', flexDirection: 'column', height: '600px' }}>
          <Typography variant="subtitle1" gutterBottom>
            AI/ML Implementation Discussion
          </Typography>

          {/* Messages */}
          <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
            <List>
              {messages.map((msg) => (
                <ListItem key={msg.id}>
                  <ListItemAvatar>
                    <Avatar>{msg.user[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={msg.user}
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="body2">
                          {msg.message}
                        </Typography>
                        <Typography component="span" variant="caption" sx={{ ml: 2 }}>
                          {msg.timestamp}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Message Input */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<Send />}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LiveDiscussions;
