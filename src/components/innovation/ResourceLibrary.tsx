import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Video, FileText, Download, Search, Filter } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'video' | 'guide';
  category: string;
  downloadUrl: string;
  thumbnail?: string;
}

export default function ResourceLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Innovation Best Practices Guide',
      description: 'A comprehensive guide to modern innovation methodologies and frameworks.',
      type: 'document',
      category: 'Methodology',
      downloadUrl: '#',
    },
    {
      id: '2',
      title: 'Project Management for Innovators',
      description: 'Learn how to effectively manage innovative projects from ideation to implementation.',
      type: 'video',
      category: 'Management',
      downloadUrl: '#',
      thumbnail: 'https://example.com/thumbnail1.jpg',
    },
    // Add more resources here
  ];

  const categories = ['Methodology', 'Management', 'Technical', 'Design', 'Business'];
  const types = ['document', 'video', 'guide'];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="h-6 w-6" />;
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'guide':
        return <Book className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resource Library</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {resource.thumbnail && (
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 mb-2">
                  {getIcon(resource.type)}
                  <span className="text-sm">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">{resource.category}</span>
                  <a
                    href={resource.downloadUrl}
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                  >
                    <Download className="h-4 w-4" />
                    <span className="text-sm">Download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
