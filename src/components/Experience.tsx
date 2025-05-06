import React from 'react';
import { Code, Server, Monitor, Layers, GitBranch, Box } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  darkMode: boolean;
}

const experienceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function Experience({ darkMode }: any) {
  return (
    <section className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} py-16 px-4 sm:px-6 lg:px-8 from-gray-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 min-h-screen rounded-2xl`}>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-extrabold text-center mb-12 ${darkMode ? 'text-blue-300' : 'text-blue-700'
          } tracking-tight`}
      >
        ✨ Work Experience ✨
      </motion.h2>
      <motion.div
        variants={experienceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} max-w-4xl mx-auto`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-8 rounded-2xl shadow-xl border ${darkMode
            ? 'bg-slate-800/90 border-slate-700/50 text-blue-200'
            : 'bg-white/90 border-blue-100 text-blue-800'
            } backdrop-blur-lg transition-all duration-300`}
        >
          <div className="flex items-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Code className={`h-12 w-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </motion.div>
            <div className="ml-4">
              <h3
                className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'
                  }`}
              >
                Fullstack Developer
              </h3>
              <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Phuc Nguyen Informatics Technology • May 2024 - Apr 2025
              </p>
            </div>
          </div>
          <motion.ul
            variants={experienceVariants}
            className="space-y-6 text-base leading-relaxed"
          >
            <motion.li variants={bulletVariants} className="flex items-start group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Monitor className={`h-6 w-6 mr-3 mt-1 group-hover:text-yellow-400 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
              <span>
                Crafted dynamic, responsive user interfaces using <strong>ReactJS</strong> with TypeScript, utilizing hooks, Redux, and Tailwind CSS to deliver intuitive and scalable enterprise-grade frontends. 🚀
              </span>
            </motion.li>
            <motion.li variants={bulletVariants} className="flex items-start group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code className={`h-6 w-6 mr-3 mt-1 group-hover:text-yellow-400 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
              <span>
                Developed high-performance frontend applications with <strong>Angular</strong>, leveraging Angular CLI, RxJS, and NgRx for state management, ensuring maintainability in complex workflows. 🛠️
              </span>
            </motion.li>
            <motion.li variants={bulletVariants} className="flex items-start group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Server className={`h-6 w-6 mr-3 mt-1 group-hover:text-yellow-400 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
              <span>
                Designed and implemented RESTful APIs using <strong>Spring Boot</strong>, integrated with PostgreSQL and Redis, to power scalable backend services for data-driven applications. 🌐
              </span>
            </motion.li>
            <motion.li variants={bulletVariants} className="flex items-start group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Layers className={`h-6 w-6 mr-3 mt-1 group-hover:text-yellow-400 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
              <span>
                Containerized applications with <strong>Docker</strong> and Docker Compose, streamlining development, testing, and production environments for consistent deployments. 📦
              </span>
            </motion.li>
            <motion.li variants={bulletVariants} className="flex items-start group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GitBranch className={`h-6 w-6 mr-3 mt-1 group-hover:text-yellow-400 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
              <span>
                Leveraged <strong>Git</strong> and GitHub Actions for version control and CI/CD pipelines, automating build, test, and deployment processes to accelerate development cycles. ⚡
              </span>
            </motion.li>
            <motion.li variants={bulletVariants} className="flex items-start group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Box className={`h-6 w-6 mr-3 mt-1 group-hover:text-yellow-400 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
              <span>
                Collaborated with cross-functional teams to implement validation logic and user-facing features, enhancing UX and system reliability in material management systems. 🤝
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};