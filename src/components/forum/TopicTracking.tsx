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
  Hash,
  Clock,
  Bell,
  Tag,
} from 'lucide-react';

interface Topic {
  id: number;
  title: string;
  description: string;
  tags: string[];
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
  isFollowing: boolean;
}

const topics: Topic[] = [
  {
    id: 1,
    title: "Machine Learning in Practice",
    description: "Real-world applications and case studies of machine learning in industry.",
    tags: ["AI/ML", "Data Science", "Industry"],
    author: {
      name: "Dr. Emily Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "ML Engineer"
    },
    stats: {
      views: 1500,
      comments: 45,
      likes: 230,
      shares: 28
    },
    timeAgo: "2h ago",
    engagement: 85,
    isFollowing: true
  },
  {
    id: 2,
    title: "Cloud Architecture Patterns",
    description: "Best practices and patterns for cloud-native applications.",
    tags: ["Cloud", "Architecture", "DevOps"],
    author: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=2",
      role: "Cloud Architect"
    },
    stats: {
      views: 980,
      comments: 32,
      likes: 185,
      shares: 15
    },
    timeAgo: "4h ago",
    engagement: 78,
    isFollowing: false
  },
  {
    id: 3,
    title: "Web3 Development",
    description: "Latest trends and developments in Web3 and blockchain technology.",
    tags: ["Blockchain", "Web3", "DApps"],
    author: {
      name: "Alex Kumar",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "Blockchain Developer"
    },
    stats: {
      views: 850,
      comments: 28,
      likes: 160,
      shares: 22
    },
    timeAgo: "6h ago",
    engagement: 72,
    isFollowing: true
  }
];

const TopicTracking: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight={600}>
          Topic Tracking
        </Typography>
        <Chip
          icon={<Hash size={16} />}
          label="Topics You Follow"
          color="primary"
          sx={{ bgcolor: '#6B5B95', color: 'white' }}
        />
      </Stack>

      <Grid container spacing={3}>
        {topics.map((topic) => (
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
                    <Stack direction="row" spacing={1}>
                      {topic.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          icon={<Tag size={14} />}
                          sx={{
                            bgcolor: topic.isFollowing ? '#6B5B95' : 'transparent',
                            color: topic.isFollowing ? 'white' : 'inherit',
                            borderColor: '#6B5B95',
                            '& .MuiChip-icon': {
                              color: topic.isFollowing ? 'white' : '#6B5B95',
                            },
                          }}
                          variant={topic.isFollowing ? "filled" : "outlined"}
                        />
                      ))}
                    </Stack>
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
                    <Box>
                      <Typography variant="subtitle2">
                        {topic.author.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {topic.author.role}
                      </Typography>
                    </Box>
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
                          {topic.stats.views}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <MessageCircle size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {topic.stats.comments}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <ThumbsUp size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {topic.stats.likes}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton size="small">
                          <Share2 size={16} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {topic.stats.shares}
                        </Typography>
                      </Stack>
                    </Stack>
                    <IconButton
                      color={topic.isFollowing ? "primary" : "default"}
                      sx={{
                        bgcolor: topic.isFollowing ? 'rgba(107, 91, 149, 0.1)' : 'transparent',
                      }}
                    >
                      <Bell size={16} />
                    </IconButton>
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

export default TopicTracking;
