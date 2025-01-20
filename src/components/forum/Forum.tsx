import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
  Stack,
  Chip,
  IconButton,
  Badge,
  useTheme,
} from '@mui/material';
import {
  Building2,
  GraduationCap,
  Code2,
  Rocket,
  Users,
  MessageSquare,
  HelpCircle,
  Share2,
  Hash,
  TrendingUp,
  Zap,
  BookOpen,
} from 'lucide-react';
import { styled } from '@mui/material/styles';

// Import all required components
import IndustryForums from './IndustryForums';
import CareerAdvice from './CareerAdvice';
import TechnicalDiscussions from './TechnicalDiscussions';
import StartupCorner from './StartupCorner';
import AlumniExperiences from './AlumniExperiences';
import LiveDiscussions from './LiveDiscussions';
import ExpertQA from './ExpertQA';
import ResourceSharing from './ResourceSharing';
import TopicTracking from './TopicTracking';
import TrendingDiscussions from './TrendingDiscussions';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: '#6B5B95',
  borderRadius: '12px 12px 0 0',
  '& .MuiTabs-indicator': {
    backgroundColor: '#FFB6C1',
    height: '3px',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  '&.Mui-selected': {
    color: '#ffffff',
  },
  '&:hover': {
    color: '#ffffff',
    opacity: 1,
  },
}));

const GradientBackground = styled(Box)({
  background: 'linear-gradient(135deg, #6B5B95 0%, #FF6B6B 100%)',
  padding: '2rem 0',
  minHeight: '100vh',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
}));

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`forum-tabpanel-${index}`}
      aria-labelledby={`forum-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Forum: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [activeDiscussions] = useState(15);
  const [onlineExperts] = useState(8);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <GradientBackground>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: '#ffffff',
              fontWeight: 700,
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: 2,
            }}
          >
            Community Forum
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            Connect, Share, and Learn with the Community
          </Typography>
        </Box>

        <StyledPaper>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="forum sections"
          >
            <StyledTab icon={<Building2 size={18} />} iconPosition="start" label="Industry Forums" />
            <StyledTab icon={<GraduationCap size={18} />} iconPosition="start" label="Career Advice" />
            <StyledTab icon={<Code2 size={18} />} iconPosition="start" label="Technical Discussions" />
            <StyledTab icon={<Rocket size={18} />} iconPosition="start" label="Startup Corner" />
            <StyledTab icon={<Users size={18} />} iconPosition="start" label="Alumni Experiences" />
            <StyledTab icon={<MessageSquare size={18} />} iconPosition="start" label="Live Discussions" />
            <StyledTab icon={<HelpCircle size={18} />} iconPosition="start" label="Expert Q&A" />
            <StyledTab icon={<BookOpen size={18} />} iconPosition="start" label="Resource Sharing" />
            <StyledTab icon={<Hash size={18} />} iconPosition="start" label="Topic Tracking" />
            <StyledTab icon={<TrendingUp size={18} />} iconPosition="start" label="Trending" />
          </StyledTabs>

          <TabPanel value={value} index={0}>
            <IndustryForums />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CareerAdvice />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TechnicalDiscussions />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <StartupCorner />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <AlumniExperiences />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <LiveDiscussions />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <ExpertQA />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <ResourceSharing />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <TopicTracking />
          </TabPanel>
          <TabPanel value={value} index={9}>
            <TrendingDiscussions />
          </TabPanel>
        </StyledPaper>

        {/* Quick Access Features */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mb: 4,
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: 'rgba(0,0,0,0.05)',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'rgba(0,0,0,0.2)',
              borderRadius: 4,
            },
          }}
        >
          <Button
            variant="contained"
            startIcon={<MessageSquare size={18} />}
            sx={{
              bgcolor: '#4ECDC4',
              '&:hover': { bgcolor: '#45B7D1' },
              borderRadius: '12px',
              px: 3,
            }}
          >
            Start Discussion
          </Button>
          <Button
            variant="outlined"
            startIcon={<HelpCircle size={18} />}
            sx={{ borderRadius: '12px', px: 3 }}
          >
            Ask Question
          </Button>
          <Button
            variant="outlined"
            startIcon={<Share2 size={18} />}
            sx={{ borderRadius: '12px', px: 3 }}
          >
            Share Resource
          </Button>
          <Button
            variant="outlined"
            startIcon={<Hash size={18} />}
            sx={{ borderRadius: '12px', px: 3 }}
          >
            Browse Topics
          </Button>
          <Button
            variant="outlined"
            startIcon={<TrendingUp size={18} />}
            sx={{ borderRadius: '12px', px: 3 }}
          >
            Trending Now
          </Button>
        </Stack>

        {/* Forum Header */}
        <Paper
          sx={{
            p: 4,
            mb: 4,
            background: 'linear-gradient(135deg, #6B5B95 0%, #FF6B6B 100%)',
            color: 'white',
            borderRadius: '20px',
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
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Community Forum
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                Connect, Share, and Learn with the Community
              </Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              <Chip
                icon={<Zap size={16} />}
                label={`${activeDiscussions} Active Discussions`}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  '& .MuiChip-icon': { color: '#FFD700' },
                }}
              />
              <Chip
                icon={<Users size={16} />}
                label={`${onlineExperts} Experts Online`}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  '& .MuiChip-icon': { color: '#4ECDC4' },
                }}
              />
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </GradientBackground>
  );
};

export default Forum;
