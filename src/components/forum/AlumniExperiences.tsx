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
} from '@mui/material';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  MessageSquare,
  ThumbsUp,
  Share2,
  Bookmark,
  Calendar,
} from 'lucide-react';

const alumniStories = [
  {
    id: 1,
    name: "Jennifer Lee",
    batch: "2020",
    role: "Senior Product Manager",
    company: "Google",
    location: "San Francisco, USA",
    story: "Transitioned from engineering to product management. Led the development of key features in Google Maps used by millions.",
    expertise: ["Product Strategy", "Tech Leadership", "Career Transition"],
    likes: 245,
    comments: 56,
    experience: "3 years",
    education: "B.Tech Computer Science",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    batch: "2018",
    role: "Startup Founder",
    company: "TechFlow AI",
    location: "Bangalore, India",
    story: "Built a successful AI startup from scratch. Raised $2M in seed funding and grew team to 25 members.",
    expertise: ["Entrepreneurship", "AI/ML", "Team Building"],
    likes: 189,
    comments: 42,
    experience: "5 years",
    education: "M.Tech AI & ML",
  },
  {
    id: 3,
    name: "Maria Garcia",
    batch: "2019",
    role: "Research Scientist",
    company: "Tesla",
    location: "Austin, USA",
    story: "Working on autonomous driving algorithms. Published 3 papers in top conferences and filed 2 patents.",
    expertise: ["Autonomous Systems", "Research", "Deep Learning"],
    likes: 167,
    comments: 38,
    experience: "4 years",
    education: "PhD Robotics",
  },
  {
    id: 4,
    name: "David Chen",
    batch: "2017",
    role: "Engineering Director",
    company: "Microsoft",
    location: "Seattle, USA",
    story: "Scaled cloud infrastructure team from 10 to 100 engineers. Led major Azure service improvements.",
    expertise: ["Cloud Architecture", "Team Leadership", "Scaling Teams"],
    likes: 213,
    comments: 47,
    experience: "6 years",
    education: "B.Tech Electronics",
  },
];

const AlumniExperiences: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Alumni Experiences & Stories
      </Typography>

      <Grid container spacing={3}>
        {alumniStories.map((alumni) => (
          <Grid item xs={12} md={6} key={alumni.id}>
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
                    <GraduationCap size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h2">
                      {alumni.name}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Calendar size={14} />
                      <Typography variant="caption" color="text.secondary">
                        Batch of {alumni.batch}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Briefcase size={16} />
                    {alumni.role} at {alumni.company}
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MapPin size={16} />
                    {alumni.location}
                  </Typography>
                </Stack>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {alumni.story}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                  {alumni.expertise.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Chip
                    icon={<ThumbsUp size={16} />}
                    label={alumni.likes}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<MessageSquare size={16} />}
                    label={alumni.comments}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<MessageSquare size={16} />}
                >
                  Connect
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
    </Box>
  );
};

export default AlumniExperiences;
