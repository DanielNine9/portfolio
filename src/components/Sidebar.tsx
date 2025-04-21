import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Code2, Github, Contact } from 'lucide-react';
import { GiSkills } from 'react-icons/gi';

interface SidebarProps {
  darkMode: boolean;
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: BookOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Real Projects', icon: Code2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills & Projects', icon: GiSkills },
  { id: 'github', label: 'Github', icon: Github },
  { id: 'contact', label: 'Contact', icon: Contact },
];

export const Sidebar: React.FC<SidebarProps> = ({ darkMode, activeSection, onSectionClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '240px' }}
      className={`fixed left-0 top-16 bottom-0 ${
        darkMode ? 'bg-slate-800 border-r border-slate-700' : 'bg-white border-r border-gray-200'
      } transition-colors duration-300 z-40 shadow-lg`}
    >
      <nav className="py-8 px-4 h-full">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.li
                key={item.id}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <button
                  onClick={() => onSectionClick(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? darkMode
                        ? 'bg-blue-900/30 text-blue-400'
                        : 'bg-blue-50 text-blue-600'
                      : darkMode
                        ? 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className="ml-3 font-medium whitespace-nowrap overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
className={`absolute right-0 w-1 h-8 rounded-l-full ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}
                    />
                  )}
                </button>
                {/* Tooltip */}
                {isCollapsed && (
                  <span
                    className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 ${
                      darkMode
                        ? 'bg-slate-700 text-gray-200 border border-slate-600'
                        : 'bg-gray-100 text-gray-900 border border-gray-200'
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};
