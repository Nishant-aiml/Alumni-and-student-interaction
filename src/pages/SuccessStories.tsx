import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Tab,
  Tabs,
  useTheme,
  Stack,
  ImageList,
  ImageListItem,
} from '@mui/material';
import {
  Star,
  Award,
  Rocket,
  Heart,
  Share2,
  MessageSquare,
  Image as ImageIcon,
  Upload,
  Filter,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
} from 'lucide-react';

interface Story {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  impact: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  image: string;
  tags: string[];
}

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Entrepreneurship', value: 'entrepreneurship' },
  { label: 'Career', value: 'career' },
  { label: 'Research', value: 'research' },
  { label: 'Social Impact', value: 'social-impact' },
  { label: 'Innovation', value: 'innovation' },
];

const sampleStories: Story[] = [
  {
    id: 1,
    title: "AI Startup Revolutionizing Healthcare",
    author: "Dr. Sarah Chen",
    category: "entrepreneurship",
    description: "From a college project to a $10M startup, our AI-powered diagnostic tool is now used in over 100 hospitals.",
    impact: "Helped diagnose rare diseases in over 10,000 patients",
    likes: 1256,
    comments: 89,
    shares: 234,
    date: "2024-12-15",
    image: "https://source.unsplash.com/random/800x600?medical",
    tags: ["AI", "Healthcare", "Startup Success"],
  },
  {
    id: 2,
    title: "Breakthrough in Quantum Computing",
    author: "Prof. James Wilson",
    category: "research",
    description: "Our team's quantum algorithm breakthrough could revolutionize cryptography and drug discovery.",
    impact: "Published in Nature, cited by 500+ researchers",
    likes: 892,
    comments: 156,
    shares: 445,
    date: "2024-11-28",
    image: "https://source.unsplash.com/random/800x600?technology",
    tags: ["Quantum Computing", "Research", "Innovation"],
  },
  {
    id: 3,
    title: "Sustainable Energy Solution",
    author: "Maria Rodriguez",
    category: "social-impact",
    description: "Developed a low-cost solar solution bringing electricity to remote villages.",
    impact: "Provided electricity to 50,000+ people in rural areas",
    likes: 2341,
    comments: 167,
    shares: 789,
    date: "2024-12-01",
    image: "https://source.unsplash.com/random/800x600?solar",
    tags: ["Sustainability", "Social Impact", "Energy"],
  },
  {
    id: 4,
    title: "From Intern to Tech Lead at Google",
    author: "Alex Kumar",
    category: "career",
    description: "My journey from summer intern to leading a team of 50+ engineers at Google.",
    impact: "Led development of key Google Cloud features",
    likes: 1567,
    comments: 234,
    shares: 567,
    date: "2024-12-10",
    image: "https://source.unsplash.com/random/800x600?office",
    tags: ["Career Growth", "Leadership", "Tech"],
  },
];

const SuccessStories: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openSubmit, setOpenSubmit] = useState(false);
  const [stories, setStories] = useState(sampleStories);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredStories = selectedCategory === 'all'
    ? stories
    : stories.filter(story => story.category === selectedCategory);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ 
        textAlign: 'center', 
        mb: 6,
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
        p: 6,
        borderRadius: '20px',
        color: 'white',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
        }
      }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 800,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            position: 'relative',
          }}
        >
          Success Stories
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Inspiring journeys of innovation, impact, and achievement
        </Typography>
        <Button
          variant="contained"
          startIcon={<Star />}
          onClick={() => setOpenSubmit(true)}
          sx={{
            bgcolor: 'white',
            color: '#FF6B6B',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Share Your Story
        </Button>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              height: '4px',
              borderRadius: '2px',
            },
            '& .MuiTab-root': {
              minWidth: 120,
              borderRadius: '12px',
              mx: 0.5,
              color: 'text.secondary',
              '&.Mui-selected': {
                color: '#FF6B6B',
                fontWeight: 600,
              },
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.04)',
                color: '#FF6B6B',
              },
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              value={category.value}
              icon={category.icon}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredStories.map((story) => (
          <Grid item xs={12} md={6} key={story.id}>
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
                  height: 240,
                  overflow: 'hidden',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
                  },
                }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
              
              <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 56, 
                      height: 56, 
                      bgcolor: 'primary.main',
                      border: '3px solid white',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      marginTop: '-40px',
                    }}
                  >
                    {story.author.charAt(0)}
                  </Avatar>
                  <Box sx={{ pt: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {story.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      By {story.author} • {new Date(story.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Stack>

                <Typography 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {story.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="subtitle2" 
                    color="primary" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    <Target size={16} />
                    Impact
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {story.impact}
                  </Typography>
                </Box>

                <Stack 
                  direction="row" 
                  spacing={1} 
                  sx={{ 
                    mb: 2, 
                    flexWrap: 'wrap', 
                    gap: 1 
                  }}
                >
                  {story.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        borderRadius: '8px',
                        bgcolor: 'rgba(78,205,196,0.1)',
                        color: '#4ECDC4',
                        '&:hover': {
                          bgcolor: 'rgba(78,205,196,0.2)',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>

              <CardActions 
                sx={{ 
                  justifyContent: 'space-between', 
                  px: 2, 
                  pb: 2,
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  pt: 2,
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    size="small"
                    startIcon={<Heart size={16} />}
                    sx={{
                      color: '#FF6B6B',
                      '&:hover': {
                        bgcolor: 'rgba(255,107,107,0.1)',
                      },
                    }}
                  >
                    {story.likes}
                  </Button>
                  <Button
                    size="small"
                    startIcon={<MessageSquare size={16} />}
                    sx={{
                      color: '#4ECDC4',
                      '&:hover': {
                        bgcolor: 'rgba(78,205,196,0.1)',
                      },
                    }}
                  >
                    {story.comments}
                  </Button>
                </Stack>
                <IconButton 
                  size="small"
                  sx={{
                    color: '#6B5B95',
                    '&:hover': {
                      bgcolor: 'rgba(107,91,149,0.1)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Share2 size={18} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={openSubmit} 
        onClose={() => setOpenSubmit(false)}
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.1)',
          },
        }}
      >
        <DialogTitle sx={{ 
          background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
          color: 'white',
          py: 3,
        }}>
          Share Your Success Story
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Story Title"
              fullWidth
              sx={{ mb: 3 }}
              variant="outlined"
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 3 }}
              variant="outlined"
            />
            <TextField
              label="Impact"
              fullWidth
              multiline
              rows={2}
              sx={{ mb: 3 }}
              variant="outlined"
            />
            <TextField
              label="Tags (comma separated)"
              fullWidth
              sx={{ mb: 3 }}
              variant="outlined"
            />
            <Button
              variant="outlined"
              startIcon={<Upload />}
              fullWidth
              sx={{
                borderRadius: '8px',
                p: 1.5,
                borderStyle: 'dashed',
                '&:hover': {
                  borderStyle: 'dashed',
                },
              }}
            >
              Upload Media
            </Button>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, bgcolor: 'rgba(0,0,0,0.02)' }}>
          <Button 
            onClick={() => setOpenSubmit(false)}
            sx={{ color: 'text.secondary' }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained"
            onClick={() => setOpenSubmit(false)}
            sx={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
              px: 4,
              '&:hover': {
                background: 'linear-gradient(135deg, #FF5252 0%, #45B7D1 100%)',
              },
            }}
          >
            Submit Story
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SuccessStories;
