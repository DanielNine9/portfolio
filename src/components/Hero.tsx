import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles'; // Thư viện để thêm hiệu ứng hạt
import { loadFull } from 'tsparticles';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Biểu tượng mạng xã hội

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  // Khởi tạo particles
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  // Cấu hình particles
  const particlesConfig = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: darkMode ? '#ffffff' : '#4b5eAA' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1, direction: 'none', random: true },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hiệu ứng hạt nền */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`relative text-center py-10 sm:px-6 lg:px-8 mx-auto ${
          darkMode
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-white'
        } rounded-3xl shadow-2xl my-12 border border-opacity-20 ${
          darkMode ? 'border-purple-500' : 'border-blue-200'
        }`}
      >
        {/* Avatar hoặc ảnh cá nhân */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <img
            src="/img/avatar.png" // Thay bằng URL ảnh cá nhân
            alt="Dinh Quoc Huy"
            className="w-24 h-24 rounded-full mx-auto border-4 border-opacity-50 object-cover"
            style={{ borderColor: darkMode ? '#ffffff33' : '#00000020' }}
          />
        </motion.div>

        {/* Tiêu đề chính */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ${
            darkMode
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400'
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600'
          } bg-clip-text text-transparent animate-gradient drop-shadow-xl`}
        >
          Dinh Quoc Huy
        </motion.h1>

        {/* Mô tả nghề nghiệp */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={`mt-4 text-xl sm:text-2xl font-semibold tracking-wide ${
            darkMode ? 'text-slate-200' : 'text-slate-800'
          }`}
        >
          FULLSTACK WEB DEVELOPER
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto"
        >
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Hi, I'm Dinh Quoc Huy, a passionate Fullstack Web Developer with 1 year of experience building dynamic and responsive web applications. I specialize in crafting seamless user experiences and robust server-side solutions with modern technologies.
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: darkMode
                ? '0 0 20px rgba(139, 92, 246, 0.5)'
                : '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block mt-8 px-10 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            Get in Touch
          </motion.a>

          {/* Biểu tượng mạng xã hội */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-6 flex justify-center space-x-4"
          >
            <a
              href="https://github.com/danielnine9" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dinh-huy-80514b2b5/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};