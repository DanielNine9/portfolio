import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface AwardsProps {
  darkMode: boolean;
}

const awards = [
  { term: 'Spring 2023', award: 'Top 50 outstanding student' },
  { term: 'Summer 2023', award: 'Top 50 outstanding student' },
  { term: 'Fall 2023', award: 'Top 50 outstanding student' },
  { term: 'Spring 2024', award: 'Top 50 outstanding student' },
  { term: 'Summer 2024', award: 'Top 50 outstanding student' },
  { term: 'Fall 2024', award: 'Top 50 outstanding student' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export const Awards: React.FC<AwardsProps> = ({ darkMode }) => {
  return (
    <section>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Honors & Awards
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className={`mt-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300`}
      >
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Award className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
              </motion.div>
              <div className="ml-3">
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{award.term}</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{award.award}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};