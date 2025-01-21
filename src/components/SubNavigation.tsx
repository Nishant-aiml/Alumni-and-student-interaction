import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SubNavigationProps {
  items: {
    name: string;
    path: string;
  }[];
}

const SubNavigation: React.FC<SubNavigationProps> = ({ items }) => {
  const location = useLocation();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <nav className="flex space-x-8 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8" aria-label="Sub Navigation">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base hover:border-gray-300 transition-colors relative group
                  ${isActive 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                {item.name}
                {/* Hover indicator */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                  ${isActive ? 'scale-x-100' : ''}`} />
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SubNavigation;
