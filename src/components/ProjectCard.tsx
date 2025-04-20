import React, { useState } from 'react';
import { ExternalLink, Github, Info, ChevronRight, ChevronDown } from 'lucide-react';
import { Project } from '../datas/projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const placeholderImages = [
    "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const displayImage = project.images.length > 0 
    ? project.images[0] 
    : placeholderImages[index % placeholderImages.length];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${isEven ? '' : 'md:flex-row-reverse'} md:flex`}
    >
      <div className="md:w-5/12 relative group">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className={`overflow-hidden rounded-lg shadow-lg ${darkMode ? 'shadow-slate-800' : 'shadow-gray-200'}`}
        >
          <img 
            src={displayImage} 
            alt={`${project.title} screenshot`} 
            className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex space-x-4 justify-center">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-white ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} px-3 py-1 rounded-md flex items-center space-x-1 text-sm transition-colors`}
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.repositories.frontend && (
                  <a 
                    href={project.repositories.frontend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-white ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-800 hover:bg-gray-900'} px-3 py-1 rounded-md flex items-center space-x-1 text-sm transition-colors`}
                  >
                    <Github size={14} />
                    <span>Frontend</span>
                  </a>
                )}
                {project.repositories.backend && (
                  <a 
                    href={project.repositories.backend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-white ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-800 hover:bg-gray-900'} px-3 py-1 rounded-md flex items-center space-x-1 text-sm transition-colors`}
                  >
                    <Github size={14} />
                    <span>Backend</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute top-0 left-0 ml-4 mt-4">
          <span 
            className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
              project.status === 'Completed' 
                ? 'bg-green-500 text-white' 
                : 'bg-amber-500 text-white'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className={`md:w-7/12 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="mt-6 md:mt-0">
          <div className="flex items-center mb-2">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {project.title}
            </h3>
            <span className={`text-sm ml-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {project.startTime}
            </span>
          </div>
          
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    darkMode 
                      ? 'bg-slate-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center ${
              darkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-800'
            } transition-colors text-sm font-medium`}
          >
            <Info size={16} className="mr-1" />
            {expanded ? "Less details" : "More details"}
            {expanded ? <ChevronDown size={16} className="ml-1" /> : <ChevronRight size={16} className="ml-1" />}
          </button>

          {expanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 pl-4 border-l-2 ${
                darkMode ? 'border-blue-400' : 'border-blue-200'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Frontend Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.frontend.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          darkMode 
                            ? 'bg-blue-900/30 text-blue-300' 
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.skills.backend.length > 0 && (
                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Backend Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.backend.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            darkMode 
                              ? 'bg-purple-900/30 text-purple-300' 
                              : 'bg-purple-50 text-purple-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Deployment
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {project.deployment.frontend && (
                    <div className="flex items-center">
                      <span className={`text-xs mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Frontend:
                      </span>
                      <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.deployment.frontend}
                      </span>
                    </div>
                  )}
                  {project.deployment.backend && (
                    <div className="flex items-center">
                      <span className={`text-xs mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Backend:
                      </span>
                      <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.deployment.backend}
                      </span>
                    </div>
                  )}
                  {project.deployment.database && (
                    <div className="flex items-center">
                      <span className={`text-xs mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Database:
                      </span>
                      <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.deployment.database}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {project.note && (
                <div className={`mt-4 p-3 rounded-md ${
                  darkMode ? 'bg-amber-900/20 text-amber-300' : 'bg-amber-50 text-amber-800'
                }`}>
                  <p className="text-xs italic">{project.note}</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;