import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: { url: string; alt: string }[];
  autoplaySpeed?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoplaySpeed = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplaySpeed);

    return () => clearInterval(timer);
  }, [images.length, autoplaySpeed, isAutoplay]);

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden group"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 rounded-full px-3 py-2 backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};