import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
  LinearProgress,
  IconButton,
} from '@mui/material';
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  Building2,
  Briefcase,
  Code2,
  Rocket,
  Lightbulb,
  Clock,
} from 'lucide-react';

interface IndustryPost {
  id: number;
  title: string;
  description: string;
  category: string;
  industry: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  stats: {
    views: number;
    comments: number;
    likes: number;
    shares: number;
  };
  timeAgo: string;
  engagement: number;
}

const industryPosts: IndustryPost[] = [
  {
    id: 1,
    title: "AI's Impact on Healthcare Industry",
    description: "Discussion on how artificial intelligence is transforming healthcare delivery and patient care.",
    category: "Healthcare",
    industry: "Medical Technology",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "Healthcare Innovation Lead"
    },
    stats: {
      views: 1250,
      comments: 48,
      likes: 215,
      shares: 32
    },
    timeAgo: "2h ago",
    engagement: 85
  },
  {
    id: 2,
    title: "Future of Sustainable Manufacturing",
    description: "Exploring green technologies and sustainable practices in modern manufacturing.",
    category: "Manufacturing",
    industry: "Industrial Tech",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=2",
      role: "Sustainability Expert"
    },
    stats: {
      views: 980,
      comments: 35,
      likes: 178,
      shares: 25
    },
    timeAgo: "4h ago",
    engagement: 78
  },
  {
    id: 3,
    title: "Blockchain in Financial Services",
    description: "Analysis of blockchain technology's impact on banking and financial services.",
    category: "Finance",
    industry: "FinTech",
    author: {
      name: "Alex Kumar",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "FinTech Analyst"
    },
    stats: {
      views: 850,
      comments: 42,
      likes: 192,
      shares: 28
    },
    timeAgo: "6h ago",
    engagement: 82
  }
];

const IndustryForums: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight={600}>
          Industry Discussions
        </Typography>
        <Chip
          icon={<Building2 size={16} />}
          label="Industry Insights"
          color="primary"
          sx={{ bgcolor: '#6B5B95', color: 'white' }}
        />
      </Stack>

      <Grid container spacing={3}>
        {industryPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card
              sx={{
                borderRadius: '16px',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[4],
                },
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          bgcolor: '#6B5B95',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                      <Chip
                        label={post.industry}
                        size="small"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Clock size={14} />
                      <Typography variant="caption" color="text.secondary">
                        {post.timeAgo}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography variant="h6" fontWeight={600}>
                    {post.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={post.author.avatar} sx={{ width: 32, height: 32 }} />
                    <Box>
                      <Typography variant="subtitle2">
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.author.role}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box>
                    <Typography variant="caption" color="text.secondary" mb={1} display="block">
                      Engagement Rate
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={post.engagement}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: 'rgba(107, 91, 149, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#6B5B95',
                        },
                      }}
                    />
                  </Box>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ pt: 1 }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <Eye size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {post.stats.views}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <MessageCircle size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {post.stats.comments}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <ThumbsUp size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {post.stats.likes}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <Share2 size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {post.stats.shares}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IndustryForums;
