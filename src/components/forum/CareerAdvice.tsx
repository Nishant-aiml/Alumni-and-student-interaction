import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  Stack,
  IconButton,
  LinearProgress,
} from '@mui/material';
import {
  Briefcase,
  GraduationCap,
  Target,
  Award,
  MessageSquare,
  ThumbsUp,
  Bookmark,
  Share2,
  Users,
} from 'lucide-react';

const careerTopics = [
  {
    title: 'Resume Building & Interview Prep',
    description: 'Expert tips on crafting standout resumes and acing interviews.',
    mentor: 'Sarah Chen',
    mentorTitle: 'HR Director, Tech Corp',
    participants: 2800,
    likes: 945,
    responses: 156,
    progress: 85,
  },
  {
    title: 'Career Transition Strategies',
    description: 'Guide to successfully switching careers and industries.',
    mentor: 'Michael Rodriguez',
    mentorTitle: 'Career Coach',
    participants: 1900,
    likes: 723,
    responses: 234,
    progress: 92,
  },
  {
    title: 'Skill Development Roadmaps',
    description: 'Structured paths for developing in-demand professional skills.',
    mentor: 'Dr. Emily Wong',
    mentorTitle: 'Learning & Development Expert',
    participants: 3200,
    likes: 1256,
    responses: 345,
    progress: 78,
  },
  {
    title: 'Networking & Personal Branding',
    description: 'Strategies for building professional networks and personal brand.',
    mentor: 'James Wilson',
    mentorTitle: 'LinkedIn Top Voice',
    participants: 2400,
    likes: 892,
    responses: 167,
    progress: 88,
  },
];

const CareerAdvice: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Career Advice & Guidance
      </Typography>

      <Grid container spacing={3}>
        {careerTopics.map((topic, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <Briefcase size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h2">
                      {topic.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Led by {topic.mentor} • {topic.mentorTitle}
                    </Typography>
                  </Box>
                </Stack>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {topic.description}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <Chip
                    icon={<Users size={16} />}
                    label={`${topic.participants} participants`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<ThumbsUp size={16} />}
                    label={topic.likes}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<MessageSquare size={16} />}
                    label={topic.responses}
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={topic.progress} 
                    sx={{ 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: (theme) => theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                    Course Progress: {topic.progress}%
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GraduationCap size={18} />}
                >
                  Join Discussion
                </Button>
                <Box>
                  <IconButton size="small" sx={{ mr: 1 }}>
                    <Bookmark size={20} />
                  </IconButton>
                  <IconButton size="small">
                    <Share2 size={20} />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CareerAdvice;
