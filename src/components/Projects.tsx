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
      'Developed reusable Angular components for transaction management, customer dashboards, and loan tracking, improving code maintainability.',
      'Built RESTful APIs with Django Rest Framework to handle loan processing, payment schedules, and customer data management.',
      'Optimized PostgreSQL queries by implementing indexes and query caching, reducing transaction query times by 30%.',
      'Integrated JWT-based role-based authentication to secure API endpoints and ensure user access control.',
      'Wrote unit tests for backend APIs using Pytest, achieving 85% code coverage.',
      'Collaborated with UI/UX designers to ensure responsive and accessible frontend interfaces.'
    ],
    link: 'https://nguoibanvang.vn/',
  },
  {
    title: 'Wastelinq',
    description: 'A web platform that automates waste management tasks such as tracking, e-manifests, scheduling, and reporting.',
    responsibilities: [
      'Created responsive React components with Material UI for waste tracking dashboards and e-manifest forms, enhancing user experience.',
      'Developed and optimized REST APIs using Django Rest Framework to manage waste scheduling and reporting functionalities.',
      'Improved PostgreSQL performance by resolving N+1 query issues and implementing batch processing, reducing API response times by 20%.',
      'Debugged and fixed critical frontend bugs related to state management with Redux, improving system stability.',
      'Integrated third-party APIs for real-time waste tracking data, ensuring seamless data flow.',
      'Wrote integration tests for APIs using Postman and Pytest to validate end-to-end functionality.'
    ],
    link: 'https://www.wastelinq.com/',
  },
  {
    title: 'Cleanlinq',
    description: 'Revamps the tanker and material management software, enhancing UI/UX, integrating with Acumatica.',
    responsibilities: [
      'Built reusable React components with Material UI for tanker management, material tracking, and reporting dashboards, reducing development time by 15%.',
      'Developed robust REST APIs with Django Rest Framework to integrate with Acumatica for real-time data synchronization.',
      'Optimized PostgreSQL database performance using advanced indexing and stored procedures, cutting API response times by 25%.',
      'Ensured cross-platform compatibility for web and iOS interfaces by implementing responsive design and testing on multiple devices.',
      'Integrated analytics tracking with Google Analytics to monitor user interactions and improve UX.',
      'Collaborated with QA team to automate UI testing using Cypress, ensuring consistent performance across browsers.'
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
      'Implemented Elasticsearch for fast and accurate job search functionality, supporting complex queries.',
      'Wrote integration tests with JUnit and Jest to ensure system reliability and API performance.'
    ],
    link: '#',
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
        className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2"
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