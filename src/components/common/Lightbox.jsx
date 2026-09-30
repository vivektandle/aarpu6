import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, images = [], currentIndex = 0, onIndexChange }) {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[95] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-6 right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl max-h-[85vh] rounded-2xl overflow-hidden glass-panel border border-white/20 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={typeof currentImage === 'string' ? currentImage : currentImage?.src || currentImage}
            alt={currentImage?.title || 'Architectural Gallery View'}
            className="w-full h-full object-contain max-h-[80vh]"
          />
          {currentImage?.title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
              <p className="text-white font-medium text-lg">{currentImage.title}</p>
              {currentImage.subtitle && (
                <p className="text-gray-400 text-sm font-mono">{currentImage.subtitle}</p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
