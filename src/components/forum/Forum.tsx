import React from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MessageSquare,
  HelpCircle,
  Share2,
  Hash,
  TrendingUp,
} from 'lucide-react';
import IndustryForums from './IndustryForums';
import TopicTracking from './TopicTracking';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: '#6B5B95',
  borderRadius: theme.breakpoints.down('sm') ? '8px 8px 0 0' : '12px 12px 0 0',
  '& .MuiTabs-indicator': {
    backgroundColor: '#FFB6C1',
    height: '3px',
  },
  '& .MuiTabs-scrollButtons': {
    '&.Mui-disabled': {
      opacity: 0.3,
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontWeight: 600,
  fontSize: theme.breakpoints.down('sm') ? '0.875rem' : '1rem',
  textTransform: 'none',
  minHeight: theme.breakpoints.down('sm') ? 48 : 56,
  '&.Mui-selected': {
    color: '#ffffff',
  },
  '&:hover': {
    color: '#ffffff',
    opacity: 1,
  },
}));

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6B5B95 0%, #FF6B6B 100%)',
  padding: theme.breakpoints.down('sm') ? '1rem 0' : '2rem 0',
  minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: theme.breakpoints.down('sm') ? '8px' : '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  margin: theme.breakpoints.down('sm') ? '0 8px' : 0,
}));

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`forum-tabpanel-${index}`}
      aria-labelledby={`forum-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: isMobile ? 2 : 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Forum = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <GradientBackground>
      <Container maxWidth="lg" sx={{ pt: { xs: 4, sm: 8 } }}>
        <Box sx={{ mb: { xs: 2, sm: 4 } }}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h1"
            sx={{
              color: '#ffffff',
              fontWeight: 700,
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: { xs: 1, sm: 2 },
              px: { xs: 2, sm: 0 },
            }}
          >
            Community Forum
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            sx={{
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              px: { xs: 2, sm: 0 },
            }}
          >
            Connect, Share, and Learn with Fellow Tech Enthusiasts
          </Typography>
        </Box>

        <StyledPaper>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="forum sections"
          >
            <StyledTab label="Industry" />
            <StyledTab label="Topics" />
            <StyledTab label="Career" />
            <StyledTab label="Technical" />
          </StyledTabs>

          <TabPanel value={value} index={0}>
            <IndustryForums />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TopicTracking />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h5" sx={{ color: '#6B5B95', fontWeight: 600, mb: 3 }}>
              Career Advice
            </Typography>
            {/* Career Advice content will go here */}
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography variant="h5" sx={{ color: '#6B5B95', fontWeight: 600, mb: 3 }}>
              Technical Discussions
            </Typography>
            {/* Technical Discussions content will go here */}
          </TabPanel>
        </StyledPaper>

        {/* Quick Action Buttons - Mobile Optimized */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2 }}
          sx={{
            mt: 2,
            px: { xs: 2, sm: 0 },
          }}
        >
          <Button
            fullWidth={isMobile}
            variant="contained"
            startIcon={<MessageSquare size={18} />}
            sx={{
              bgcolor: '#4ECDC4',
              '&:hover': { bgcolor: '#45B7D1' },
              borderRadius: '8px',
              py: isMobile ? 1.5 : 1,
            }}
          >
            Start Discussion
          </Button>
          <Button
            fullWidth={isMobile}
            variant="outlined"
            startIcon={<HelpCircle size={18} />}
            sx={{ borderRadius: '8px', py: isMobile ? 1.5 : 1 }}
          >
            Ask Question
          </Button>
          {!isMobile && (
            <>
              <Button
                variant="outlined"
                startIcon={<Share2 size={18} />}
                sx={{ borderRadius: '8px' }}
              >
                Share Resource
              </Button>
              <Button
                variant="outlined"
                startIcon={<Hash size={18} />}
                sx={{ borderRadius: '8px' }}
              >
                Browse Topics
              </Button>
              <Button
                variant="outlined"
                startIcon={<TrendingUp size={18} />}
                sx={{ borderRadius: '8px' }}
              >
                Trending Now
              </Button>
            </>
          )}
        </Stack>

        {/* Mobile Action Buttons */}
        {isMobile && (
          <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 10 }}>
            <IconButton
              sx={{
                bgcolor: '#6B5B95',
                color: 'white',
                '&:hover': { bgcolor: '#5A4A84' },
                width: 56,
                height: 56,
                boxShadow: 3,
              }}
            >
              <MessageSquare />
            </IconButton>
          </Box>
        )}
      </Container>
    </GradientBackground>
  );
};

export default Forum;
