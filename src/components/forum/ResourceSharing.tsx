import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  IconButton,
  Link,
} from '@mui/material';
import {
  FileText,
  Link as LinkIcon,
  ThumbsUp,
  Download,
  Share2,
  BookOpen,
  Video,
  File,
} from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'document' | 'link' | 'video' | 'book';
  url: string;
  author: string;
  timestamp: string;
  likes: number;
  downloads: number;
  tags: string[];
}

const ResourceSharing: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      title: "Complete AI/ML Roadmap 2025",
      description: "A comprehensive guide to becoming an AI/ML engineer",
      type: "document",
      url: "#",
      author: "Tech Expert",
      timestamp: "2025-01-20",
      likes: 45,
      downloads: 123,
      tags: ["AI/ML", "Career Guide", "Learning"]
    },
    {
      id: 2,
      title: "Top Tech Interview Questions",
      description: "Collection of most asked technical interview questions",
      type: "book",
      url: "#",
      author: "Career Coach",
      timestamp: "2025-01-19",
      likes: 32,
      downloads: 89,
      tags: ["Interview", "Career", "Preparation"]
    }
  ]);

  const [openNewResource, setOpenNewResource] = useState(false);
  const [newResource, setNewResource] = useState({
    title: '',
    description: '',
    type: 'document',
    url: '',
    tags: ''
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText />;
      case 'link':
        return <LinkIcon />;
      case 'video':
        return <Video />;
      case 'book':
        return <BookOpen />;
      default:
        return <File />;
    }
  };

  const handleNewResource = () => {
    const resource: Resource = {
      id: resources.length + 1,
      title: newResource.title,
      description: newResource.description,
      type: newResource.type as Resource['type'],
      url: newResource.url,
      author: "Current User", // In a real app, this would come from auth
      timestamp: new Date().toISOString().split('T')[0],
      likes: 0,
      downloads: 0,
      tags: newResource.tags.split(',').map(tag => tag.trim())
    };
    setResources([resource, ...resources]);
    setOpenNewResource(false);
    setNewResource({
      title: '',
      description: '',
      type: 'document',
      url: '',
      tags: ''
    });
  };

  const handleLike = (id: number) => {
    setResources(resources.map(resource =>
      resource.id === id
        ? { ...resource, likes: resource.likes + 1 }
        : resource
    ));
  };

  const handleDownload = (id: number) => {
    setResources(resources.map(resource =>
      resource.id === id
        ? { ...resource, downloads: resource.downloads + 1 }
        : resource
    ));
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Resource Sharing</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenNewResource(true)}
          startIcon={<Share2 />}
        >
          Share Resource
        </Button>
      </Box>

      <List>
        {resources.map((resource) => (
          <Paper key={resource.id} sx={{ mb: 2, p: 2 }}>
            <ListItem
              disableGutters
              secondaryAction={
                <Box>
                  <IconButton onClick={() => handleLike(resource.id)}>
                    <ThumbsUp />
                  </IconButton>
                  <IconButton onClick={() => handleDownload(resource.id)}>
                    <Download />
                  </IconButton>
                </Box>
              }
            >
              <ListItemIcon>
                {getIcon(resource.type)}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link href={resource.url} underline="hover" color="inherit">
                    {resource.title}
                  </Link>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {resource.description}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      Shared by {resource.author} • {resource.timestamp}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {resource.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {resource.likes} likes • {resource.downloads} downloads
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>

      <Dialog open={openNewResource} onClose={() => setOpenNewResource(false)} maxWidth="md" fullWidth>
        <DialogTitle>Share a Resource</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Resource Title"
            fullWidth
            value={newResource.title}
            onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            multiline
            rows={3}
            fullWidth
            value={newResource.description}
            onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Resource Type"
            fullWidth
            value={newResource.type}
            onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
            SelectProps={{
              native: true,
            }}
            sx={{ mb: 2 }}
          >
            <option value="document">Document</option>
            <option value="link">Link</option>
            <option value="video">Video</option>
            <option value="book">Book</option>
          </TextField>
          <TextField
            label="Resource URL"
            fullWidth
            value={newResource.url}
            onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Tags (comma-separated)"
            fullWidth
            value={newResource.tags}
            onChange={(e) => setNewResource({ ...newResource, tags: e.target.value })}
            helperText="Enter tags separated by commas (e.g., AI/ML, Career, Learning)"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewResource(false)}>Cancel</Button>
          <Button onClick={handleNewResource} variant="contained">Share Resource</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResourceSharing;
