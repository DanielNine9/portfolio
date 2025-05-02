import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  darkMode: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, darkMode }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate images when not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length, isHovering]);

  return (
    <div 
      className="relative mx-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main large image display */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto overflow-hidden rounded-2xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={images[activeImage]}
            alt={`Dinh Quoc Huy photo ${activeImage + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        
        {/* Decorative border */}
        <div className={`absolute inset-0 rounded-2xl border-2 pointer-events-none ${
          darkMode ? 'border-purple-500/30' : 'border-blue-400/30'
        }`}></div>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeImage === index 
                ? darkMode 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-blue-600 scale-125'
                : darkMode
                  ? 'bg-slate-500 hover:bg-purple-300'
                  : 'bg-slate-400 hover:bg-blue-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Small thumbnail strip below */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              activeImage === index 
                ? 'ring-2 ring-offset-2 ' + (darkMode ? 'ring-purple-400' : 'ring-blue-500') 
                : 'opacity-70 hover:opacity-100'
            }`}
            whileHover={{ y: -2 }}
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;