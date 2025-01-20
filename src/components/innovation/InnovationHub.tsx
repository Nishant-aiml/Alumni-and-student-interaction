import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ProjectSubmission from './ProjectSubmission';
import ProjectList from './ProjectList';
import ResourceLibrary from './ResourceLibrary';
import TeamCollaboration from './TeamCollaboration';
import { Sparkles, BookOpen, Users, Trophy } from 'lucide-react';

export default function InnovationHub() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-10">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Innovation Hub
          </motion.h1>
          <p className="mt-3 text-gray-600">
            Where ideas transform into impactful solutions
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-4 gap-4 bg-white/50 p-1 rounded-lg">
            <TabsTrigger
              value="projects"
              className="flex items-center space-x-2 data-[state=active]:bg-white"
            >
              <Sparkles className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="flex items-center space-x-2 data-[state=active]:bg-white"
            >
              <BookOpen className="h-4 w-4" />
              <span>Resources</span>
            </TabsTrigger>
            <TabsTrigger
              value="collaboration"
              className="flex items-center space-x-2 data-[state=active]:bg-white"
            >
              <Users className="h-4 w-4" />
              <span>Collaboration</span>
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="flex items-center space-x-2 data-[state=active]:bg-white"
            >
              <Trophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProjectList />
              </div>
              <div className="lg:col-span-1">
                <ProjectSubmission />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <ResourceLibrary />
          </TabsContent>

          <TabsContent value="collaboration">
            <TeamCollaboration />
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">Top Innovators</h3>
              {/* Leaderboard content will be implemented */}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
