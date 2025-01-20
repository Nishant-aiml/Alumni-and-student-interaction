import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  Lightbulb,
  Users,
  Library,
  FileText,
  Star,
  MessageSquare,
  PlusCircle,
  TrendingUp,
  Rocket,
  Target,
  Award,
  Zap,
} from 'lucide-react';
import ProjectSubmission from '../components/innovation/ProjectSubmission';
import ProjectList from '../components/innovation/ProjectList';
import ResourceLibrary from '../components/innovation/ResourceLibrary';
import TeamFormation from '../components/innovation/TeamFormation';
import ProjectManagement from '../components/innovation/ProjectManagement';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const gradientBg = 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500';

export default function InnovationHub() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      name: 'Projects',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-400',
      component: (
        <div className="space-y-6">
          <ProjectSubmission />
          <ProjectList />
        </div>
      ),
    },
    {
      name: 'Teams',
      icon: Users,
      color: 'from-green-500 to-emerald-400',
      component: <TeamFormation />,
    },
    {
      name: 'Resources',
      icon: Library,
      color: 'from-purple-500 to-violet-400',
      component: <ResourceLibrary />,
    },
    {
      name: 'Management',
      icon: FileText,
      color: 'from-orange-500 to-amber-400',
      component: <ProjectManagement />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`${gradientBg} text-white py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">
                Innovation Hub
                <span className="ml-2 inline-block animate-bounce">
                  <Rocket className="h-8 w-8 inline" />
                </span>
              </h1>
              <p className="mt-4 text-xl text-indigo-100">
                Where ideas take flight and innovation knows no bounds
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/innovation-graphic.svg"
                alt="Innovation"
                className="h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Active Projects',
              stat: '45',
              icon: Target,
              color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
              trend: '+12% this month',
            },
            {
              name: 'Teams Formed',
              stat: '28',
              icon: Users,
              color: 'bg-gradient-to-br from-green-500 to-emerald-400',
              trend: '+5 this week',
            },
            {
              name: 'Success Rate',
              stat: '78%',
              icon: Award,
              color: 'bg-gradient-to-br from-purple-500 to-violet-400',
              trend: '↑ 8% increase',
            },
            {
              name: 'Innovation Score',
              stat: '92',
              icon: Zap,
              color: 'bg-gradient-to-br from-orange-500 to-amber-400',
              trend: 'Top 10%',
            },
          ].map((item) => (
            <div
              key={item.name}
              className="relative group overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <div className={`${item.color} p-6`}>
                <div className="flex justify-between items-center">
                  <div className="text-white">
                    <item.icon className="h-8 w-8 mb-4 animate-pulse" />
                    <p className="text-lg font-medium opacity-90">{item.name}</p>
                    <p className="text-3xl font-bold mt-2">{item.stat}</p>
                    <p className="text-sm opacity-75 mt-2">{item.trend}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-4 p-2 bg-gray-100 rounded-xl">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-400 focus:ring-white',
                      selected
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                        : 'text-gray-700 hover:bg-white/[0.12] hover:text-gray-900'
                    )
                  }
                >
                  <div className="flex items-center justify-center space-x-2">
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-6">
              {tabs.map((tab, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-6',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
                  )}
                >
                  {tab.component}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Featured Section */}
        <div className="mt-12 mb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Featured Innovations</h2>
              <p className="opacity-90">Discover trending projects and breakthrough ideas</p>
            </div>
            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-indigo-100 rounded-full p-2">
                        <Star className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Top Innovation {i}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Innovative solution revolutionizing the way we approach problems.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((j) => (
                          <img
                            key={j}
                            className="h-8 w-8 rounded-full ring-2 ring-white"
                            src={`https://ui-avatars.com/api/?name=User${j}&background=random`}
                            alt=""
                          />
                        ))}
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
