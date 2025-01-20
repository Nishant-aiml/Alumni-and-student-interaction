import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Rating,
} from '@mui/material';
import { Person, QuestionAnswer } from '@mui/icons-material';

interface Question {
  id: number;
  title: string;
  content: string;
  author: string;
  expertise: string;
  timestamp: string;
  answers: Answer[];
  status: 'open' | 'answered';
}

interface Answer {
  id: number;
  content: string;
  author: string;
  expertise: string;
  timestamp: string;
  rating: number;
}

const ExpertQA: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      title: "Best practices for implementing AI in healthcare",
      content: "What are the key considerations when implementing AI solutions in healthcare applications?",
      author: "Dr. Smith",
      expertise: "Healthcare AI",
      timestamp: "2025-01-20",
      status: 'answered',
      answers: [
        {
          id: 1,
          content: "When implementing AI in healthcare, consider: 1) Data privacy and HIPAA compliance, 2) Model interpretability...",
          author: "AI Expert",
          expertise: "AI/ML Specialist",
          timestamp: "2025-01-20",
          rating: 4.5
        }
      ]
    }
  ]);

  const [openNewQuestion, setOpenNewQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    expertise: ''
  });

  const expertiseAreas = [
    "AI/ML",
    "Healthcare Tech",
    "Data Science",
    "Cloud Architecture",
    "Cybersecurity"
  ];

  const handleNewQuestion = () => {
    const question: Question = {
      id: questions.length + 1,
      title: newQuestion.title,
      content: newQuestion.content,
      author: "Current User", // In a real app, this would come from auth
      expertise: newQuestion.expertise,
      timestamp: new Date().toISOString().split('T')[0],
      status: 'open',
      answers: []
    };
    setQuestions([question, ...questions]);
    setOpenNewQuestion(false);
    setNewQuestion({ title: '', content: '', expertise: '' });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Expert Q&A</Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => setOpenNewQuestion(true)}
          startIcon={<QuestionAnswer />}
        >
          Ask Question
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        {expertiseAreas.map((area) => (
          <Chip 
            key={area}
            label={area}
            onClick={() => {}}
            variant="outlined"
          />
        ))}
      </Box>

      <List>
        {questions.map((question) => (
          <Paper key={question.id} sx={{ mb: 3, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">{question.title}</Typography>
              <Chip 
                label={question.status} 
                color={question.status === 'answered' ? 'success' : 'warning'}
              />
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              {question.content}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 1 }}><Person /></Avatar>
              <Typography variant="body2">
                Asked by {question.author} • {question.expertise} • {question.timestamp}
              </Typography>
            </Box>

            {question.answers.map((answer) => (
              <Paper key={answer.id} sx={{ p: 2, mt: 2, backgroundColor: '#f8f9fa' }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {answer.content}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 1 }}><Person /></Avatar>
                    <Typography variant="body2">
                      Answered by {answer.author} • {answer.expertise} • {answer.timestamp}
                    </Typography>
                  </Box>
                  <Rating value={answer.rating} readOnly precision={0.5} />
                </Box>
              </Paper>
            ))}
          </Paper>
        ))}
      </List>

      <Dialog open={openNewQuestion} onClose={() => setOpenNewQuestion(false)} maxWidth="md" fullWidth>
        <DialogTitle>Ask a Question</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Question Title"
            fullWidth
            value={newQuestion.title}
            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Question Details"
            multiline
            rows={4}
            fullWidth
            value={newQuestion.content}
            onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Expertise Area"
            fullWidth
            value={newQuestion.expertise}
            onChange={(e) => setNewQuestion({ ...newQuestion, expertise: e.target.value })}
            SelectProps={{
              native: true,
            }}
          >
            <option value=""></option>
            {expertiseAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewQuestion(false)}>Cancel</Button>
          <Button onClick={handleNewQuestion} variant="contained">Submit Question</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ExpertQA;
