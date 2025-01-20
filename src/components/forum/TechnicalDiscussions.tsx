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
  AvatarGroup,
} from '@mui/material';
import {
  Code2,
  MessageSquare,
  ThumbsUp,
  Bookmark,
  Share2,
  Users,
  Star,
  Clock,
} from 'lucide-react';

const technicalTopics = [
  {
    title: 'Full Stack Development',
    description: 'Discussions on modern web development, frameworks, and best practices.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    participants: 1560,
    likes: 423,
    responses: 89,
    lastActive: '2 hours ago',
    experts: 5,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Explore ML algorithms, deep learning, and AI applications.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Data Science'],
    participants: 2100,
    likes: 567,
    responses: 134,
    lastActive: '1 hour ago',
    experts: 7,
  },
  {
    title: 'Cloud Architecture',
    description: 'Cloud platforms, microservices, and distributed systems.',
    tags: ['AWS', 'Azure', 'Kubernetes', 'Docker'],
    participants: 1890,
    likes: 489,
    responses: 112,
    lastActive: '30 minutes ago',
    experts: 6,
  },
  {
    title: 'Mobile Development',
    description: 'Mobile app development for iOS, Android, and cross-platform.',
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    participants: 1450,
    likes: 378,
    responses: 95,
    lastActive: '4 hours ago',
    experts: 4,
  },
];

const TechnicalDiscussions: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Technical Discussions
      </Typography>

      <Grid container spacing={3}>
        {technicalTopics.map((topic, index) => (
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
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <Code2 size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h2">
                      {topic.title}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Clock size={14} />
                      <Typography variant="caption" color="text.secondary">
                        Active {topic.lastActive}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {topic.description}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                  {topic.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      label={tag}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={2}>
                    <Chip
                      icon={<Users size={16} />}
                      label={`${topic.participants}`}
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
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Star size={16} color="gold" />
                    <Typography variant="caption">
                      {topic.experts} Experts
                    </Typography>
                  </Stack>
                </Stack>

                <AvatarGroup max={4} sx={{ justifyContent: 'flex-end' }}>
                  {[...Array(topic.experts)].map((_, idx) => (
                    <Avatar
                      key={idx}
                      sx={{ width: 28, height: 28 }}
                      alt={`Expert ${idx + 1}`}
                    />
                  ))}
                </AvatarGroup>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MessageSquare size={18} />}
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

export default TechnicalDiscussions;
