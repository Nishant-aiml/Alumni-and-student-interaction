import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Button,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  Stack,
  Paper,
} from '@mui/material';
import {
  Trophy,
  Star,
  Gift,
  Award,
  Target,
  TrendingUp,
  Zap,
  Crown,
  Shield,
  Users,
  MessageSquare,
  ThumbsUp,
  Share2,
  BookOpen,
  Rocket,
} from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  points: number;
  progress: number;
  total: number;
  icon: React.ReactNode;
}

interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  image: string;
  category: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Networking Master",
    description: "Connect with 100 community members",
    points: 500,
    progress: 75,
    total: 100,
    icon: <Users size={24} />,
  },
  {
    id: 2,
    title: "Knowledge Sharer",
    description: "Create 50 helpful posts or resources",
    points: 1000,
    progress: 30,
    total: 50,
    icon: <BookOpen size={24} />,
  },
  {
    id: 3,
    title: "Innovation Champion",
    description: "Submit 10 innovative project ideas",
    points: 2000,
    progress: 8,
    total: 10,
    icon: <Rocket size={24} />,
  },
  {
    id: 4,
    title: "Community Leader",
    description: "Receive 1000 likes on your contributions",
    points: 3000,
    progress: 750,
    total: 1000,
    icon: <Crown size={24} />,
  },
];

const rewards: Reward[] = [
  {
    id: 1,
    title: "Premium Mentorship Session",
    description: "1-hour personal mentorship with industry experts",
    cost: 2000,
    image: "https://source.unsplash.com/random/800x600?mentor",
    category: "Learning",
  },
  {
    id: 2,
    title: "Conference Pass",
    description: "Free pass to annual tech conference",
    cost: 5000,
    image: "https://source.unsplash.com/random/800x600?conference",
    category: "Events",
  },
  {
    id: 3,
    title: "Premium Course Access",
    description: "6-month access to premium online courses",
    cost: 3000,
    image: "https://source.unsplash.com/random/800x600?education",
    category: "Learning",
  },
  {
    id: 4,
    title: "Innovation Grant",
    description: "Seed funding for your startup idea",
    cost: 10000,
    image: "https://source.unsplash.com/random/800x600?startup",
    category: "Funding",
  },
];

const Rewards: React.FC = () => {
  const theme = useTheme();
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const userPoints = 4500;
  const userLevel = Math.floor(userPoints / 1000) + 1;
  const pointsToNextLevel = (userLevel * 1000) - userPoints;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* User Stats Section */}
      <Paper
        sx={{
          p: 4,
          mb: 6,
          background: 'linear-gradient(135deg, #6B5B95 0%, #FF6B6B 100%)',
          color: 'white',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
          }
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  border: '4px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                }}
              >
                <Crown size={50} />
              </Avatar>
              <Box>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                  Level {userLevel}
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.9 }}>
                  {userPoints} Points
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
                {pointsToNextLevel} points to Level {userLevel + 1}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(userPoints % 1000) / 10}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: 'white',
                    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                    backgroundSize: '1rem 1rem',
                    animation: 'progress-animation 1s linear infinite',
                  },
                  '@keyframes progress-animation': {
                    '0%': {
                      backgroundPosition: '1rem 0',
                    },
                    '100%': {
                      backgroundPosition: '0 0',
                    },
                  },
                }}
              />
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Chip
                icon={<Star size={16} />}
                label="Gold Member"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '12px',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                  },
                }}
              />
              <Chip
                icon={<Shield size={16} />}
                label="Top Contributor"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '12px',
                  '& .MuiChip-icon': {
                    color: '#4ECDC4',
                  },
                }}
              />
              <Chip
                icon={<Award size={16} />}
                label="Rising Star"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '12px',
                  '& .MuiChip-icon': {
                    color: '#FF6B6B',
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Achievements Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        Your Achievements
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {achievements.map((achievement) => (
          <Grid item xs={12} sm={6} md={3} key={achievement.id}>
            <Card
              sx={{
                height: '100%',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 48,
                      height: 48,
                      mr: 2,
                    }}
                  >
                    {achievement.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                    }}
                  >
                    {achievement.points} pts
                  </Typography>
                </Box>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: 40 }}>
                  {achievement.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: achievement.progress === achievement.total ? '#4ECDC4' : 'text.secondary',
                    }}
                  >
                    <span>Progress</span>
                    <span>{achievement.progress} / {achievement.total}</span>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(achievement.progress / achievement.total) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'rgba(0,0,0,0.04)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: achievement.progress === achievement.total
                          ? 'linear-gradient(45deg, #4ECDC4 30%, #45B7D1 90%)'
                          : 'linear-gradient(45deg, #FF6B6B 30%, #FFB6B6 90%)',
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Rewards Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        Available Rewards
      </Typography>
      <Grid container spacing={3}>
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={3} key={reward.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: 160,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={reward.image}
                  alt={reward.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                <Chip
                  label={reward.category}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    fontWeight: 500,
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {reward.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {reward.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: userPoints >= reward.cost ? '#4ECDC4' : '#FF6B6B',
                  }}
                >
                  <Gift size={18} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {reward.cost} points
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={userPoints < reward.cost}
                  onClick={() => setSelectedReward(reward)}
                  sx={{
                    borderRadius: '12px',
                    py: 1,
                    background: userPoints >= reward.cost
                      ? 'linear-gradient(45deg, #6B5B95 30%, #FF6B6B 90%)'
                      : 'rgba(0,0,0,0.12)',
                    color: userPoints >= reward.cost ? 'white' : 'text.disabled',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5A4F82 30%, #FF5252 90%)',
                    },
                    '&.Mui-disabled': {
                      background: 'rgba(0,0,0,0.12)',
                      color: 'text.disabled',
                    },
                  }}
                >
                  {userPoints >= reward.cost ? 'Redeem Reward' : `Need ${reward.cost - userPoints} more points`}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Redeem Dialog */}
      <Dialog
        open={Boolean(selectedReward)}
        onClose={() => setSelectedReward(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '20px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
          },
        }}
      >
        <DialogTitle
          sx={{
            background: 'linear-gradient(135deg, #6B5B95 0%, #FF6B6B 100%)',
            color: 'white',
            py: 3,
          }}
        >
          Confirm Redemption
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          {selectedReward && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {selectedReward.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedReward.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#4ECDC4',
                  mb: 2,
                }}
              >
                <Gift size={20} />
                <Typography variant="h6">
                  {selectedReward.cost} points
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Your current balance: {userPoints} points
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3, bgcolor: 'rgba(0,0,0,0.02)' }}>
          <Button onClick={() => setSelectedReward(null)} sx={{ color: 'text.secondary' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => setSelectedReward(null)}
            sx={{
              background: 'linear-gradient(135deg, #6B5B95 0%, #FF6B6B 100%)',
              px: 4,
              '&:hover': {
                background: 'linear-gradient(135deg, #5A4F82 0%, #FF5252 100%)',
              },
            }}
          >
            Confirm Redemption
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Rewards;
