import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center py-20 sm:px-6 lg:px-8 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900' 
          : 'bg-gradient-to-br from-blue-100 via-purple-100 to-white'
      } rounded-2xl shadow-2xl my-8`}
    >
      <motion.h1 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ${
          darkMode
            ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400'
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600'
        } bg-clip-text text-transparent animate-gradient drop-shadow-lg`}
      >
        Dinh Quoc Huy
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`mt-4 text-xl sm:text-2xl font-medium tracking-wide ${
          darkMode ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        FULLSTACK WEB DEVELOPER
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 mx-auto"
      >
        <p className={`text-base sm:text-lg leading-relaxed ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Hi, I'm Dinh Quoc Huy, a passionate Fullstack Web Developer with 1 year of experience building dynamic and responsive web applications. Skilled in both frontend and backend technologies, I specialize in creating seamless user experiences and robust server-side solutions.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-block mt-6 px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          }`}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
};