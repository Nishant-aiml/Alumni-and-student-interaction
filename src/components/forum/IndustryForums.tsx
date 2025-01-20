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
  Building2, 
  MessageSquare, 
  Users, 
  Bookmark,
  Share2,
  TrendingUp,
} from 'lucide-react';

const industries = [
  {
    title: 'Technology & Software',
    description: 'Discussions about latest tech trends, software development, and IT industry insights.',
    participants: 1250,
    posts: 450,
    trending: true,
  },
  {
    title: 'Healthcare & Biotech',
    description: 'Forum for healthcare innovations, biotech research, and medical industry developments.',
    participants: 850,
    posts: 320,
    trending: true,
  },
  {
    title: 'Finance & FinTech',
    description: 'Explore financial markets, fintech innovations, and banking industry trends.',
    participants: 980,
    posts: 410,
    trending: false,
  },
  {
    title: 'Manufacturing & Engineering',
    description: 'Discussions on manufacturing processes, engineering solutions, and industry 4.0.',
    participants: 720,
    posts: 280,
    trending: false,
  },
  {
    title: 'Energy & Sustainability',
    description: 'Forum for renewable energy, sustainability practices, and clean tech innovations.',
    participants: 650,
    posts: 240,
    trending: true,
  },
  {
    title: 'Creative & Digital Media',
    description: 'Explore digital media trends, creative industries, and content creation.',
    participants: 890,
    posts: 380,
    trending: false,
  },
];

const IndustryForums: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Industry Forums
      </Typography>
      
      <Grid container spacing={3}>
        {industries.map((industry, index) => (
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
                    <Building2 size={20} />
                  </Avatar>
                  <Typography variant="h6" component="h2">
                    {industry.title}
                  </Typography>
                  {industry.trending && (
                    <Chip 
                      icon={<TrendingUp size={16} />}
                      label="Trending"
                      size="small"
                      color="secondary"
                    />
                  )}
                </Stack>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {industry.description}
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Chip
                    icon={<Users size={16} />}
                    label={`${industry.participants} members`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<MessageSquare size={16} />}
                    label={`${industry.posts} posts`}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
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

export default IndustryForums;
