import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    title: 'Pawnshop Project',
    description: 'An internal web app for managing pawnshop operations, including transactions, customers, loans, and payments.',
    responsibilities: [
      'Developed reusable React components for transaction management, customer dashboards, and loan tracking, improving code maintainability.',
      'Built RESTful APIs using Spring Boot to handle loan processing, payment schedules, and customer data management.',
      'Optimized PostgreSQL queries by implementing indexes and query caching, reducing transaction query times by 30%.',
      'Integrated JWT-based role-based authentication in Spring Security to secure API endpoints and ensure user access control.',
      'Collaborated with UI/UX designers to ensure responsive and accessible frontend interfaces.'
    ],
    link: 'https://nguoibanvang.vn/',
  },
  {
    title: 'Wastelinq',
    description: 'A web platform that automates waste management tasks, including waste tracking, e-manifests, scheduling, and reporting.',
    responsibilities: [
      'Designed and developed responsive React components using Material UI Table for waste tracking dashboards and e-manifest forms, improving user interaction and data visualization.',
      'Utilized React Query for efficient data fetching and caching, and implemented useState and useEffect for robust state management in the frontend.',
      'Applied debounce and throttling techniques to optimize user input handling and event-driven interactions, reducing unnecessary API calls by 25%.',
      'Built and maintained RESTful APIs using Spring Boot to support persistent storage and dynamic updates for waste scheduling and reporting data.',
      'Optimized PostgreSQL database performance by resolving N+1 query issues using Spring Data JPA’s `@EntityGraph` and join fetching, cutting API response times by 20%.',
      'Collaborated with cross-functional teams to debug and resolve critical bugs, enhance code quality, and ensure a seamless user experience.'
    ],
    link: 'https://www.wastelinq.com/',
  },
  {
    title: 'Cleanlinq',
    description: 'A web platform for tanker and material management, featuring enhanced UI/UX and integration with Acumatica for streamlined operations.',
    responsibilities: [
      'Developed reusable React components with Material UI Table for tanker management, material tracking, and reporting dashboards, reducing frontend development time by 15%.',
      'Leveraged React Hooks (useState, useEffect) for efficient state management and React Query for optimized data fetching and caching in the frontend.',
      'Built robust RESTful APIs using Spring Boot to enable seamless data retrieval and integration with Acumatica for real-time data synchronization.',
      'Optimized PostgreSQL database queries by addressing N+1 issues using Spring Data JPA’s join fetching and entity graphs, improving API response times by 25%.',
      'Collaborated with cross-functional teams to identify and fix bugs, enhance code quality, and deliver a reliable and responsive user experience.',
      'Implemented automated UI testing with Cypress to ensure consistent performance and cross-browser compatibility.'
    ],
    link: 'https://ats.efourholdings.com/',
  },
  {
    title: 'Talenthub',
    description: 'A job search platform connecting clients with freelancers.',
    responsibilities: [
      'Designed and developed reusable React components with TailwindCSS for job listings, freelancer profiles, and search filters, enhancing UI consistency.',
      'Built scalable backend services with Spring Boot, implementing REST APIs for job matching, user authentication, and profile management.',
      'Integrated WebSocket using Spring WebSocket for real-time notifications and in-app chat, improving user engagement.',
      'Utilized Cloudinary for efficient storage, optimization, and delivery of user-uploaded media, reducing image load times by 40%.',
      'Wrote integration tests with JUnit to ensure system reliability and API performance.'
    ],
    link: 'https://talenthub.io.vn/',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section className="mt-8">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Highlighted Projects
      </motion.h2>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
              {project.link !== '#' && (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
            </div>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
            <div className="mt-4">
              <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Responsibilities:</h4>
              <ul className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} list-disc pl-5`}>
                {project.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};