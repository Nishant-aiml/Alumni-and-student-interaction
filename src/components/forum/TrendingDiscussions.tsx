import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  IconButton,
} from '@mui/material';
import {
  TrendingUp,
  MessageCircle,
  Eye,
  ThumbsUp,
} from 'lucide-react';

interface TrendingTopic {
  id: number;
  title: string;
  category: string;
  author: string;
  timestamp: string;
  views: number;
  replies: number;
  likes: number;
  trending: number;
}

const TrendingDiscussions: React.FC = () => {
  const trendingTopics: TrendingTopic[] = [
    {
      id: 1,
      title: "The Impact of AI on Future Job Markets",
      category: "Career advice",
      author: "Industry Expert",
      timestamp: "2 hours ago",
      views: 1234,
      replies: 89,
      likes: 345,
      trending: 95
    },
    {
      id: 2,
      title: "Latest Developments in Quantum Computing",
      category: "Technical discussions",
      author: "Tech Researcher",
      timestamp: "4 hours ago",
      views: 987,
      replies: 56,
      likes: 234,
      trending: 87
    },
    {
      id: 3,
      title: "Successful Tech Startup Stories",
      category: "Startup corner",
      author: "Entrepreneur",
      timestamp: "6 hours ago",
      views: 756,
      replies: 45,
      likes: 178,
      trending: 82
    }
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Trending Discussions
      </Typography>

      <List>
        {trendingTopics.map((topic) => (
          <Paper
            key={topic.id}
            sx={{
              mb: 2,
              p: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateX(8px)'
              }
            }}
          >
            <ListItem
              disableGutters
              secondaryAction={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton size="small">
                    <Eye />
                  </IconButton>
                  <Typography variant="caption">{topic.views}</Typography>
                  <IconButton size="small">
                    <MessageCircle />
                  </IconButton>
                  <Typography variant="caption">{topic.replies}</Typography>
                  <IconButton size="small">
                    <ThumbsUp />
                  </IconButton>
                  <Typography variant="caption">{topic.likes}</Typography>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <TrendingUp />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1">
                      {topic.title}
                    </Typography>
                    <Chip
                      size="small"
                      label={`🔥 ${topic.trending}%`}
                      color="error"
                      sx={{ height: 20 }}
                    />
                  </Box>
                }
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Chip
                      size="small"
                      label={topic.category}
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      component="span"
                      variant="caption"
                      color="text.secondary"
                    >
                      Posted by {topic.author} • {topic.timestamp}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );
};

export default TrendingDiscussions;
