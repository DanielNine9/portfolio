import React, { useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Code } from 'lucide-react';
import { Repository } from '../types';

interface ProjectsProps {
  repositories: Repository[] | null;
  isLoading: boolean;
}

const PersonelProjects: React.FC<ProjectsProps> = ({ repositories, isLoading }) => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredRepos = repositories 
    ? filter 
      ? repositories.filter(repo => repo.language === filter)
      : repositories
    : [];
  
  const languages = repositories 
    ? Array.from(new Set(repositories.filter(repo => repo.language).map(repo => repo.language!)))
    : [];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="inline-block border-b-4 border-blue-500 pb-2">My Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my GitHub repositories and discover the projects I've been working on. Feel free to check out the code and provide feedback.
          </p>
        </div>
        
        {languages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === null 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              } transition-colors`}
            >
              All
            </button>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === lang 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-64 animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
                <div className="flex justify-between mt-8">
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo) => (
              <div 
                key={repo.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {repo.name}
                    </h3>
                    {repo.language && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-14 overflow-hidden">
                    {repo.description || 'No description provided'}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star size={16} className="mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork size={16} className="mr-1" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Repository</span>
                    </a>
                    {repo.homepage && (
                      <a 
                        href={repo.homepage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Code size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No repositories found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {repositories?.length 
                ? 'Try changing the filter or check back later.' 
                : 'Could not load repositories. Please try again later.'}
            </p>
          </div>
        )}
        
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
      </div>
    </section>
  );
};

export default PersonelProjects;