import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, MessageCircle, Share2, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  votes: number;
  hasVoted: boolean;
  comments: Comment[];
  createdAt: string;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'AI-Powered Smart City Solution',
      description: 'An innovative approach to urban management using artificial intelligence and IoT sensors.',
      category: 'Technology',
      author: 'John Doe',
      votes: 42,
      hasVoted: false,
      comments: [],
      createdAt: '2025-01-20',
    },
    // Add more sample projects here
  ]);

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleVote = (projectId: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              votes: project.hasVoted ? project.votes - 1 : project.votes + 1,
              hasVoted: !project.hasVoted,
            }
          : project
      )
    );
  };

  const handleAddComment = (projectId: string) => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Math.random().toString(),
      author: 'Current User',
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, comments: [...project.comments, comment] }
          : project
      )
    );
    setNewComment('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Innovation Projects</h2>
        <div className="flex space-x-2">
          <select className="rounded-md border-gray-300 text-sm">
            <option>Most Recent</option>
            <option>Most Voted</option>
            <option>Most Discussed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      by {project.author} · {project.category} · {project.createdAt}
                    </p>
                  </div>
                  <button className="text-yellow-500 hover:text-yellow-600">
                    <Star className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-4 text-gray-600">{project.description}</p>

                <div className="mt-6 flex items-center space-x-6">
                  <button
                    onClick={() => handleVote(project.id)}
                    className={`flex items-center space-x-2 ${
                      project.hasVoted ? 'text-blue-600' : 'text-gray-500'
                    } hover:text-blue-600`}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{project.votes}</span>
                  </button>
                  <button
                    onClick={() => setActiveProject(project.id)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-blue-600"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{project.comments.length}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>

                {activeProject === project.id && (
                  <div className="mt-6 border-t pt-6">
                    <div className="space-y-4">
                      {project.comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{comment.author}</span>
                            <span className="text-sm text-gray-500">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-600">{comment.content}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 rounded-md border-gray-300"
                      />
                      <button
                        onClick={() => handleAddComment(project.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
