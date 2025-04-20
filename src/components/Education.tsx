import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Education
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className={`mt-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300`}
      >
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <GraduationCap className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </motion.div>
          <div className="ml-4">
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>FPT POLYTECHNIC COLLEGE</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Software Development</p>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4"
        >
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>GPA: 3.93 / 4.0</p>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Dec 2022 - May 2025</p>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className={`mt-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300`}
      >
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <GraduationCap className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </motion.div>
          <div className="ml-4">
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AN GIANG UNIVERSITY</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Literature Education</p>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4"
        >
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Sep 2024 - Jan 2025</p>
        </motion.div>
      </motion.div>
    </section>
  );
};