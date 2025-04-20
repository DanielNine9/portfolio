import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ResumeProps {
  darkMode: boolean;
}

export const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section className="mt-16">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Resume
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mt-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-100'} transition-colors duration-300`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FileText className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`ml-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              My Resume
            </span>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/path-to-your-resume.pdf"
            download
            className={`flex items-center px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } transition-colors duration-300`}
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </motion.a>
        </div>
        
        <div className={`h-[600px] ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg overflow-hidden`}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/path-to-your-resume.pdf"
              plugins={[defaultLayoutPluginInstance]}
              theme={darkMode ? 'dark' : 'light'}
            />
          </Worker>
        </div>
      </motion.div>
    </section>
  );
};