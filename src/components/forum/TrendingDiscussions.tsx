import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  IconButton,
  Avatar,
  Grid,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp,
  MessageCircle,
  Eye,
  ThumbsUp,
  Share2,
  Clock,
} from 'lucide-react';

interface TrendingTopic {
  id: number;
  title: string;
  description: string;
  category: string;
  views: number;
  comments: number;
  likes: number;
  shares: number;
  timeAgo: string;
  author: {
    name: string;
    avatar: string;
  };
  engagement: number;
}

const trendingTopics: TrendingTopic[] = [
  {
    id: 1,
    title: "Latest AI Breakthroughs in Industry",
    description: "Discussion about recent developments in AI and their impact on various industries.",
    category: "Industry",
    views: 1200,
    comments: 45,
    likes: 230,
    shares: 28,
    timeAgo: "2h ago",
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    engagement: 85,
  },
  {
    id: 2,
    title: "Career Transition Success Stories",
    description: "Members sharing their experiences of successful career transitions.",
    category: "Career",
    views: 980,
    comments: 32,
    likes: 185,
    shares: 15,
    timeAgo: "4h ago",
    author: {
      name: "Mike Johnson",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    engagement: 75,
  },
  {
    id: 3,
    title: "Emerging Tech Stack 2025",
    description: "Discussion about the most in-demand technical skills for 2025.",
    category: "Technical",
    views: 850,
    comments: 28,
    likes: 160,
    shares: 22,
    timeAgo: "6h ago",
    author: {
      name: "Alex Kumar",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    engagement: 70,
  },
];

const TrendingDiscussions: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight={600}>
          Trending Discussions
        </Typography>
        <Chip
          icon={<TrendingUp size={16} />}
          label="Real-time updates"
          color="primary"
          sx={{ bgcolor: '#6B5B95', color: 'white' }}
        />
      </Stack>

      <Grid container spacing={3}>
        {trendingTopics.map((topic) => (
          <Grid item xs={12} key={topic.id}>
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
                    <Chip
                      label={topic.category}
                      size="small"
                      sx={{
                        bgcolor: '#6B5B95',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Clock size={14} />
                      <Typography variant="caption" color="text.secondary">
                        {topic.timeAgo}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography variant="h6" fontWeight={600}>
                    {topic.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {topic.description}
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={topic.author.avatar} sx={{ width: 32, height: 32 }} />
                    <Typography variant="subtitle2">
                      {topic.author.name}
                    </Typography>
                  </Stack>

                  <Box>
                    <Typography variant="caption" color="text.secondary" mb={1} display="block">
                      Engagement Rate
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={topic.engagement}
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
                    spacing={3}
                    sx={{ pt: 1 }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Eye size={16} />
                      <Typography variant="body2" color="text.secondary">
                        {topic.views}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <MessageCircle size={16} />
                      <Typography variant="body2" color="text.secondary">
                        {topic.comments}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <ThumbsUp size={16} />
                      <Typography variant="body2" color="text.secondary">
                        {topic.likes}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Share2 size={16} />
                      <Typography variant="body2" color="text.secondary">
                        {topic.shares}
                      </Typography>
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

export default TrendingDiscussions;
