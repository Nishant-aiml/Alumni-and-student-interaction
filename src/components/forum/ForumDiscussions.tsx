import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

interface Post {
  id: number;
  title: string;
  author: string;
  category: string;
  content: string;
  timestamp: string;
  replies: number;
  views: number;
}

const ForumDiscussions: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Latest Industry Trends in AI/ML",
      author: "John Doe",
      category: "Industry forums",
      content: "Discussion about the latest trends in AI/ML industry...",
      timestamp: "2025-01-20",
      replies: 15,
      views: 234
    },
    {
      id: 2,
      title: "Career Transition to Data Science",
      author: "Jane Smith",
      category: "Career advice",
      content: "Tips for transitioning into a data science role...",
      timestamp: "2025-01-19",
      replies: 8,
      views: 156
    }
  ]);

  const [openNewPost, setOpenNewPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    content: ''
  });

  const categories = [
    "Industry forums",
    "Career advice",
    "Technical discussions",
    "Startup corner",
    "Alumni experiences"
  ];

  const handleNewPost = () => {
    const post: Post = {
      id: posts.length + 1,
      title: newPost.title,
      author: "Current User", // In a real app, this would come from auth
      category: newPost.category,
      content: newPost.content,
      timestamp: new Date().toISOString().split('T')[0],
      replies: 0,
      views: 0
    };
    setPosts([post, ...posts]);
    setOpenNewPost(false);
    setNewPost({ title: '', category: '', content: '' });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Discussion Forums</Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => setOpenNewPost(true)}
        >
          New Discussion
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        {categories.map((category) => (
          <Chip 
            key={category}
            label={category}
            onClick={() => {}}
            variant="outlined"
          />
        ))}
      </Box>

      <List>
        {posts.map((post) => (
          <ListItem 
            key={post.id}
            alignItems="flex-start"
            sx={{ 
              mb: 2, 
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1">{post.title}</Typography>
                  <Chip size="small" label={post.category} />
                </Box>
              }
              secondary={
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Posted by {post.author} on {post.timestamp}
                  </Typography>
                  <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
                    <Typography variant="body2">
                      {post.replies} replies
                    </Typography>
                    <Typography variant="body2">
                      {post.views} views
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>

      <Dialog open={openNewPost} onClose={() => setOpenNewPost(false)} maxWidth="md" fullWidth>
        <DialogTitle>Start New Discussion</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={newPost.category}
              label="Category"
              onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Content"
            multiline
            rows={4}
            fullWidth
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewPost(false)}>Cancel</Button>
          <Button onClick={handleNewPost} variant="contained">Post</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ForumDiscussions;
