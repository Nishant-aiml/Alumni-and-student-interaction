import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar,
  AvatarGroup,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Users,
  Calendar,
  CheckSquare,
  MessageSquare,
  FileText,
  GitBranch,
  Plus,
  UserPlus,
  Target,
  Award,
  Briefcase,
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  avatar: string;
}

interface Task {
  id: number;
  title: string;
  assignee: string;
  dueDate: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

interface Team {
  id: number;
  name: string;
  project: string;
  members: TeamMember[];
  tasks: Task[];
  progress: number;
  nextMeeting: string;
}

const TeamCollaboration: React.FC = () => {
  const theme = useTheme();

  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: "AI Innovation Team",
      project: "Healthcare AI Assistant",
      members: [
        {
          id: "1",
          name: "John Doe",
          role: "Team Lead",
          skills: ["AI/ML", "Project Management"],
          avatar: "https://i.pravatar.cc/150?u=john"
        },
        {
          id: "2",
          name: "Jane Smith",
          role: "ML Engineer",
          skills: ["Python", "TensorFlow"],
          avatar: "https://i.pravatar.cc/150?u=jane"
        }
      ],
      tasks: [
        {
          id: 1,
          title: "Design ML Architecture",
          assignee: "Jane Smith",
          dueDate: "2025-02-01",
          status: "in-progress",
          priority: "high"
        }
      ],
      progress: 65,
      nextMeeting: "2025-01-21 10:00 AM"
    }
  ]);

  const [openNewTeam, setOpenNewTeam] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: '',
    project: '',
    description: ''
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return theme.palette.error.main;
      case 'medium':
        return theme.palette.warning.main;
      case 'low':
        return theme.palette.success.main;
      default:
        return theme.palette.grey[500];
    }
  };

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4 
      }}>
        <Typography variant="h5" sx={{ 
          fontWeight: 600,
          background: 'linear-gradient(45deg, #EC4899 30%, #8B5CF6 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Team Collaboration Space
        </Typography>
        <Button
          variant="contained"
          startIcon={<Users />}
          onClick={() => setOpenNewTeam(true)}
          sx={{
            background: 'linear-gradient(45deg, #EC4899 30%, #8B5CF6 90%)',
            boxShadow: '0 4px 6px rgba(236, 72, 153, 0.25)',
          }}
        >
          Create Team
        </Button>
      </Box>

      <Grid container spacing={3}>
        {teams.map((team) => (
          <Grid item xs={12} key={team.id}>
            <Card 
              sx={{ 
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent>
                <Grid container spacing={3}>
                  {/* Team Info */}
                  <Grid item xs={12} md={4}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {team.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Project: {team.project}
                      </Typography>
                    </Box>

                    <Typography variant="subtitle2" gutterBottom>
                      Team Members
                    </Typography>
                    <List dense>
                      {team.members.map((member) => (
                        <ListItem key={member.id}>
                          <ListItemAvatar>
                            <Avatar src={member.avatar} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={member.name}
                            secondary={
                              <>
                                {member.role}
                                <Box sx={{ mt: 0.5 }}>
                                  {member.skills.map((skill) => (
                                    <Chip
                                      key={skill}
                                      label={skill}
                                      size="small"
                                      sx={{ mr: 0.5, mb: 0.5 }}
                                    />
                                  ))}
                                </Box>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      startIcon={<UserPlus size={18} />}
                      size="small"
                      sx={{ mt: 1 }}
                    >
                      Invite Member
                    </Button>
                  </Grid>

                  {/* Tasks */}
                  <Grid item xs={12} md={8}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Current Tasks
                      </Typography>
                      <List dense>
                        {team.tasks.map((task) => (
                          <Paper
                            key={task.id}
                            sx={{ 
                              p: 2, 
                              mb: 1,
                              bgcolor: alpha(theme.palette.background.paper, 0.5)
                            }}
                          >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="subtitle2">
                                {task.title}
                              </Typography>
                              <Chip
                                label={task.priority}
                                size="small"
                                sx={{
                                  bgcolor: alpha(getPriorityColor(task.priority), 0.1),
                                  color: getPriorityColor(task.priority),
                                }}
                              />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Calendar size={14} />
                                {task.dueDate}
                              </Typography>
                              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Users size={14} />
                                {task.assignee}
                              </Typography>
                              <Chip
                                label={task.status}
                                size="small"
                                sx={{ height: 20 }}
                              />
                            </Box>
                          </Paper>
                        ))}
                      </List>
                      <Button
                        startIcon={<Plus size={18} />}
                        size="small"
                        sx={{ mt: 1 }}
                      >
                        Add Task
                      </Button>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Paper
                          sx={{
                            p: 2,
                            bgcolor: alpha(theme.palette.background.paper, 0.5),
                            height: '100%'
                          }}
                        >
                          <Typography variant="subtitle2" gutterBottom>
                            Next Team Meeting
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Calendar size={18} />
                            <Typography variant="body2">
                              {team.nextMeeting}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Paper
                          sx={{
                            p: 2,
                            bgcolor: alpha(theme.palette.background.paper, 0.5),
                            height: '100%'
                          }}
                        >
                          <Typography variant="subtitle2" gutterBottom>
                            Quick Actions
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small">
                              <MessageSquare size={18} />
                            </IconButton>
                            <IconButton size="small">
                              <FileText size={18} />
                            </IconButton>
                            <IconButton size="small">
                              <GitBranch size={18} />
                            </IconButton>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openNewTeam} onClose={() => setOpenNewTeam(false)} maxWidth="md" fullWidth>
        <DialogTitle>Create New Team</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Team Name"
            fullWidth
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Project Name"
            fullWidth
            value={newTeam.project}
            onChange={(e) => setNewTeam({ ...newTeam, project: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Team Description"
            multiline
            rows={4}
            fullWidth
            value={newTeam.description}
            onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewTeam(false)}>Cancel</Button>
          <Button 
            onClick={() => setOpenNewTeam(false)} 
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #EC4899 30%, #8B5CF6 90%)',
            }}
          >
            Create Team
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TeamCollaboration;
