import React from 'react';
import { projects } from '../datas/projects';
import ProjectCard from './ProjectCard';
import { FolderKanban, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  return (
    <section id="projects" className={`pt-10 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container ">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
          <a 
            href="https://github.com/DanielNine9?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <Github size={20} className="mr-2" />
            View All Repositories
          </a>
        </div>
    </section>
  );
};

export default ProjectsSection;