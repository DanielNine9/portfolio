import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaAngular, FaJava, FaCode, FaServer, FaDatabase, FaDocker, FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiMui, SiNestjs, SiDjango, SiMysql,
  SiPostgresql, SiRedis, SiIntellijidea,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaCode className="text-teal-500" />,
    skills: [
      { name: 'ReactJS (TypeScript)', icon: <FaReact className="text-blue-500" /> },
      { name: 'NextJS', icon: <SiNextdotjs className="text-gray-900" /> },
      { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-500" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
      { name: 'Material UI', icon: <SiMui className="text-blue-600" /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaServer className="text-purple-500" />,
    skills: [
      { name: 'Java Spring', icon: <FaJava className="text-orange-600" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
      { name: 'Django Rest Framework', icon: <SiDjango className="text-green-600" /> },
    ],
  },
  {
    title: 'Database',
    icon: <FaDatabase className="text-blue-500" />,
    skills: [
      { name: 'SQL Server', icon: <SiMysql className="text-red-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FaDocker className="text-blue-600" />,
    skills: [
      { name: 'Visual Studio Code', icon: <BiLogoVisualStudio className="text-blue-500" /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-orange-600" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section className="mt-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl sm:text-4xl font-bold text-center ${
          darkMode ? 'text-blue-300' : 'text-blue-700'
        }`}
      >
        Technical Skills
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 mx-auto"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`${
              darkMode 
                ? 'bg-slate-800/80 border-slate-700/50' 
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
          >
            <div className="flex items-center justify-center">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl mr-2"
              >
                {category.icon}
              </motion.span>
              <h3 className={`text-xl sm:text-2xl font-semibold text-center ${
                darkMode ? 'text-blue-300' : 'text-blue-700'
              }`}>
                {category.title}
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className={`flex items-center px-4 py-2 ${
                    darkMode
                      ? 'bg-blue-900/40 text-blue-200 hover:bg-blue-900/60'
                      : 'bg-blue-50/80 text-blue-800 hover:bg-blue-100'
                  } rounded-full text-sm font-medium transition-all duration-300 shadow-sm`}
                >
                  <span className="mr-2 text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};