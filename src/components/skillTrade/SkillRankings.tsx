import React from 'react';
import {
  TrendingUp,
  Users,
  Star,
  Award,
  ArrowUp,
  ArrowDown,
  Minus,
} from 'lucide-react';

const SkillRankings = () => {
  const topSkills = [
    {
      name: 'React Development',
      category: 'Programming',
      rank: 1,
      trend: 'up',
      traders: 1250,
      rating: 4.9,
      growth: '+15%',
    },
    {
      name: 'UI/UX Design',
      category: 'Design',
      rank: 2,
      trend: 'up',
      traders: 980,
      rating: 4.8,
      growth: '+12%',
    },
    {
      name: 'Digital Marketing',
      category: 'Marketing',
      rank: 3,
      trend: 'same',
      traders: 850,
      rating: 4.7,
      growth: '0%',
    },
    // Add more skills as needed
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Top Skills</h2>
        <div className="flex items-center space-x-2">
          <select className="text-sm border-gray-300 rounded-md">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Skills Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rank
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Skill
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Traders
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Growth
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topSkills.map((skill) => (
              <tr key={skill.name} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      #{skill.rank}
                    </span>
                    <div className="ml-2">{getTrendIcon(skill.trend)}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {skill.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {skill.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="mr-1.5 h-4 w-4" />
                    {skill.traders.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="mr-1.5 h-4 w-4 text-yellow-400" />
                    {skill.rating}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm font-medium ${
                      skill.growth.startsWith('+')
                        ? 'text-green-600'
                        : skill.growth.startsWith('-')
                        ? 'text-red-600'
                        : 'text-gray-500'
                    }`}
                  >
                    {skill.growth}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Top Categories
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Most popular skill categories
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4 space-y-3">
            {['Programming', 'Design', 'Marketing'].map((category) => (
              <div
                key={category}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-500">{category}</span>
                <span className="font-medium text-gray-900">
                  {Math.floor(Math.random() * 1000)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Fastest Growing
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Skills with highest growth
              </p>
            </div>
            <Award className="h-8 w-8 text-purple-500" />
          </div>
          <div className="mt-4 space-y-3">
            {['AI/ML', 'Blockchain', 'AR/VR'].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-500">{skill}</span>
                <span className="font-medium text-green-600">
                  +{Math.floor(Math.random() * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Most Reviewed
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Skills with most feedback
              </p>
            </div>
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <div className="mt-4 space-y-3">
            {['Web Dev', 'Data Science', 'UX Design'].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-500">{skill}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium text-gray-900">
                    {(4 + Math.random()).toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRankings;
