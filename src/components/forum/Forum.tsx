import React, { useState } from 'react';
import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import ForumDiscussions from './ForumDiscussions';
import LiveDiscussions from './LiveDiscussions';
import ExpertQA from './ExpertQA';
import ResourceSharing from './ResourceSharing';
import TrendingDiscussions from './TrendingDiscussions';
import ProjectHub from './ProjectHub';
import TeamCollaboration from './TeamCollaboration';
import IndustryForums from './IndustryForums';
import CareerAdvice from './CareerAdvice';
import TechnicalDiscussions from './TechnicalDiscussions';
import StartupCorner from './StartupCorner';
import AlumniExperiences from './AlumniExperiences';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
}

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5',
    },
    secondary: {
      main: '#EC4899',
      light: '#F472B6',
      dark: '#DB2777',
    },
    background: {
      default: '#F3F4F6',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
          minHeight: 48,
        },
      },
    },
  },
});

const Forum: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Community Forum
          </Typography>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="forum tabs"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab label="Industry Forums" />
              <Tab label="Career Advice" />
              <Tab label="Technical Discussions" />
              <Tab label="Startup Corner" />
              <Tab label="Alumni Experiences" />
              <Tab label="Live Discussions" />
              <Tab label="Expert Q&A" />
              <Tab label="Resource Sharing" />
              <Tab label="Trending Discussions" />
              <Tab label="Project Hub" />
              <Tab label="Team Space" />
            </Tabs>

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
              <TrendingDiscussions />
            </TabPanel>
            <TabPanel value={value} index={9}>
              <ProjectHub />
            </TabPanel>
            <TabPanel value={value} index={10}>
              <TeamCollaboration />
            </TabPanel>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Forum;
