import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  CardActions,
  Avatar,
  AvatarGroup,
  IconButton,
  Chip,
  LinearProgress,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Rocket,
  ThumbsUp,
  MessageSquare,
  Users,
  GitBranch,
  Star,
  Share2,
  Bookmark,
  TrendingUp,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  team: string[];
  votes: number;
  comments: number;
  progress: number;
  status: 'ideation' | 'in-progress' | 'completed';
  tags: string[];
  thumbnail?: string;
}

const ProjectHub: React.FC = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "AI-Powered Healthcare Assistant",
      description: "Developing an AI assistant to help healthcare professionals with patient diagnosis and treatment recommendations.",
      category: "Healthcare",
      author: "Dr. Smith",
      team: ["user1", "user2", "user3", "user4"],
      votes: 156,
      comments: 45,
      progress: 75,
      status: "in-progress",
      tags: ["AI/ML", "Healthcare", "Innovation"],
      thumbnail: "https://example.com/thumbnail1.jpg"
    },
    {
      id: 2,
      title: "Sustainable Smart City Platform",
      description: "Creating a platform to monitor and optimize city resources using IoT sensors and blockchain technology.",
      category: "Smart Cities",
      author: "Tech Innovator",
      team: ["user1", "user2"],
      votes: 98,
      comments: 32,
      progress: 45,
      status: "ideation",
      tags: ["IoT", "Blockchain", "Sustainability"],
      thumbnail: "https://example.com/thumbnail2.jpg"
    }
  ]);

  const [openNewProject, setOpenNewProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: '',
    tags: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ideation':
        return theme.palette.info.main;
      case 'in-progress':
        return theme.palette.warning.main;
      case 'completed':
        return theme.palette.success.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const handleNewProject = () => {
    const project: Project = {
      id: projects.length + 1,
      title: newProject.title,
      description: newProject.description,
      category: newProject.category,
      author: "Current User",
      team: ["Current User"],
      votes: 0,
      comments: 0,
      progress: 0,
      status: "ideation",
      tags: newProject.tags.split(',').map(tag => tag.trim())
    };
    setProjects([project, ...projects]);
    setOpenNewProject(false);
    setNewProject({
      title: '',
      description: '',
      category: '',
      tags: ''
    });
  };

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4 
      }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Innovation Project Hub
        </Typography>
        <Button
          variant="contained"
          startIcon={<Rocket size={18} />}
          onClick={() => setOpenNewProject(true)}
          color="primary"
        >
          Submit Project
        </Button>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Chip
                    label={project.status}
                    size="small"
                    color={
                      project.status === 'completed' ? 'success' :
                      project.status === 'in-progress' ? 'warning' : 'info'
                    }
                    variant="outlined"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>

                <Box sx={{ mb: 2 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={project.progress}
                    sx={{ 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                    Progress: {project.progress}%
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Tooltip title="Votes">
                      <Chip
                        icon={<ThumbsUp size={14} />}
                        label={project.votes}
                        size="small"
                        variant="outlined"
                      />
                    </Tooltip>
                    <Tooltip title="Comments">
                      <Chip
                        icon={<MessageSquare size={14} />}
                        label={project.comments}
                        size="small"
                        variant="outlined"
                      />
                    </Tooltip>
                  </Box>
                  <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 28, height: 28 } }}>
                    {project.team.map((member, index) => (
                      <Avatar key={index} alt={member} />
                    ))}
                  </AvatarGroup>
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<GitBranch size={16} />}
                >
                  Join Project
                </Button>
                <Box>
                  <IconButton size="small" sx={{ mr: 1 }}>
                    <Bookmark size={18} />
                  </IconButton>
                  <IconButton size="small">
                    <Share2 size={18} />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openNewProject} onClose={() => setOpenNewProject(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Submit New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Title"
            fullWidth
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={newProject.category}
            onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Tags (comma-separated)"
            fullWidth
            value={newProject.tags}
            onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
            helperText="Enter tags separated by commas (e.g., AI, Healthcare, Innovation)"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewProject(false)}>Cancel</Button>
          <Button onClick={handleNewProject} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectHub;
