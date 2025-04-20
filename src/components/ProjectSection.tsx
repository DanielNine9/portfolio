import React from 'react';
import { projects } from '../datas/projects';
import ProjectCard from './ProjectCard';
import { FolderKanban } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container ">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;