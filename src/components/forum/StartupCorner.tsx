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
  Lightbulb,
  TrendingUp,
  Users,
  MessageSquare,
  Rocket,
  Target,
  Share2,
  Bookmark,
} from 'lucide-react';

const startups = [
  {
    id: 1,
    name: "EcoTech Solutions",
    pitch: "Revolutionizing waste management through AI-powered sorting and recycling systems.",
    stage: "Seed",
    founder: "Alex Chen",
    team: 4,
    seeking: "Technical Co-founder",
    traction: "2 pilot projects",
    interests: 120,
    discussions: 45,
    progress: 65,
    tags: ["CleanTech", "AI", "Sustainability"],
  },
  {
    id: 2,
    name: "HealthBridge",
    pitch: "Connecting rural healthcare providers with specialist doctors through telemedicine.",
    stage: "Pre-seed",
    founder: "Dr. Sarah Johnson",
    team: 3,
    seeking: "CTO",
    traction: "500 consultations",
    interests: 85,
    discussions: 32,
    progress: 40,
    tags: ["HealthTech", "Social Impact", "Telemedicine"],
  },
  {
    id: 3,
    name: "FinLearn",
    pitch: "Gamified financial literacy platform for Gen Z with real-world investment simulations.",
    stage: "Bootstrapped",
    founder: "Mike Williams",
    team: 2,
    seeking: "Marketing Lead",
    traction: "1000+ users",
    interests: 95,
    discussions: 28,
    progress: 30,
    tags: ["FinTech", "EdTech", "Gaming"],
  },
  {
    id: 4,
    name: "AgroSmart",
    pitch: "IoT-based precision farming solutions for small-scale farmers.",
    stage: "Angel",
    founder: "Raj Patel",
    team: 5,
    seeking: "Partnership",
    traction: "3 farm deployments",
    interests: 150,
    discussions: 55,
    progress: 75,
    tags: ["AgriTech", "IoT", "Sustainability"],
  },
];

const StartupCorner: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Startup Corner
        </Typography>
        <Button
          variant="contained"
          startIcon={<Lightbulb size={18} />}
          color="primary"
        >
          Submit Startup
        </Button>
      </Box>

      <Grid container spacing={3}>
        {startups.map((startup) => (
          <Grid item xs={12} md={6} key={startup.id}>
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
                    <Rocket size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h2">
                      {startup.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Founded by {startup.founder} • {startup.stage} Stage
                    </Typography>
                  </Box>
                </Stack>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {startup.pitch}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                  {startup.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <Target size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    Seeking: {startup.seeking}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <Users size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    Team Size: {startup.team} members
                  </Typography>
                  <Typography variant="body2">
                    <TrendingUp size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    Traction: {startup.traction}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={startup.progress}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      bgcolor: (theme) => theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                    Progress: {startup.progress}%
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  <Chip
                    icon={<Users size={16} />}
                    label={`${startup.interests} interested`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<MessageSquare size={16} />}
                    label={`${startup.discussions} discussions`}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Users size={16} />}
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

export default StartupCorner;
