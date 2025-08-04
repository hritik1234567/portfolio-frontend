import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectZigZag({ project, left }) {
  const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay interval, change image every 4 seconds
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % project.images.length);
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, [project.images]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center ${left ? '' : 'md:flex-row-reverse'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      <div className="md:w-1/2 p-6 relative">
        <img
          src={project.images && project.images[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          className="rounded-md shadow-lg w-full max-h-96 object-cover"
        />
        {project.images && project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-emerald-400 hover:bg-emerald-500 text-indigo-900 rounded-full p-2 shadow"
              aria-label="Previous Image"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-emerald-400 hover:bg-emerald-500 text-indigo-900 rounded-full p-2 shadow"
              aria-label="Next Image"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      <div className="md:w-1/2 p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-emerald-300">{project.title}</h3>
        <p className="text-gray-200">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(t => (
            <span key={t} className="bg-emerald-200 text-emerald-900 px-2 py-1 rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-emerald-400 px-4 py-2 rounded-lg font-bold transition hover:bg-emerald-600 text-indigo-900"
          >
            Live View
          </a>
        )}
      </div>
    </motion.div>
  );
}
