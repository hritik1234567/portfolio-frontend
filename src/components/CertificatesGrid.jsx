// src/components/CertificatesGrid.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';

export default function CertificatesGrid({ certificates }) {
  const [modalIndex, setModalIndex] = useState(null);
  const modalRef = useRef();

  // Keyboard navigation for modal: escape to close, ←/→ to navigate
  useEffect(() => {
    if (modalIndex !== null) {
      const handler = (e) => {
        if (e.key === 'Escape') setModalIndex(null);
        if (e.key === 'ArrowLeft' && modalIndex > 0) setModalIndex((i) => i - 1);
        if (e.key === 'ArrowRight' && modalIndex < certificates.length - 1) setModalIndex((i) => i + 1);
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }
  }, [modalIndex, certificates.length]);

  return (
    <>
      <div className="flex flex-col gap-20">
        {certificates.map((cert, idx) => {
          const left = idx % 2 === 0;
          const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

          return (
            <motion.div
              key={cert.id}
              className={`flex flex-col md:flex-row items-center ${left ? '' : 'md:flex-row-reverse'} group cursor-pointer`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={variants}
              onClick={() => setModalIndex(idx)}
            >
              <div className="md:w-1/2 flex justify-center p-8">
                <div className="relative w-80 h-64 group-hover:scale-105 transition transform shadow-2xl rounded-2xl overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                    <div className="text-emerald-300 text-lg font-bold">{cert.title}</div>
                    <span className="text-white text-base font-semibold">{cert.year}</span>
                  </div>
                </div>
              </div>
              {/* On big screens, add year/title at side for clarity */}
              <div className="md:w-1/2 p-8 hidden md:flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">{cert.title}</h3>
                <span className="bg-emerald-400 text-indigo-900 font-semibold px-4 py-2 rounded-full shadow">{cert.year}</span>
                <span className="text-gray-400 mt-4">Click to view fullscreen</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal: Fullscreen view with transitions + navigation */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90 backdrop-blur-lg"
            initial={false} // <-- prevents initial shifted-out state on load
            animate={{ opacity: 1, transition: { duration: 0.35 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={() => setModalIndex(null)}
            style={{ cursor: 'zoom-out' }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, y: 60, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: 'backOut' } }}
              exit={{ scale: 0.8, y: 60, opacity: 0, transition: { duration: 0.3 } }}
              onClick={e => e.stopPropagation()}
              ref={modalRef}
            >
              <img
                src={certificates[modalIndex].image}
                alt={certificates[modalIndex].title}
                className="max-w-[96vw] max-h-[80vh] rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  aria-label="Close"
                  className="p-2 rounded-full bg-black/60 text-white hover:bg-emerald-400 hover:text-indigo-900 transition"
                  onClick={() => setModalIndex(null)}
                >
                  <IoClose size={26} />
                </button>
              </div>
              {/* Left/Right navigation */}
              {modalIndex > 0 && (
                <button
                  aria-label="Previous"
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-emerald-300 text-white hover:text-indigo-800 transition"
                  onClick={() => setModalIndex(i => i - 1)}
                  style={{ zIndex: 2 }}
                >
                  <IoArrowBack size={28} />
                </button>
              )}
              {modalIndex < certificates.length - 1 && (
                <button
                  aria-label="Next"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-emerald-300 text-white hover:text-indigo-800 transition"
                  onClick={() => setModalIndex(i => i + 1)}
                  style={{ zIndex: 2 }}
                >
                  <IoArrowForward size={28} />
                </button>
              )}
              {/* Modal information overlay */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-black bg-opacity-70 rounded-lg px-6 py-2 text-center">
                <div className="text-lg font-bold text-emerald-300">{certificates[modalIndex].title}</div>
                <div className="text-base text-white font-semibold">{certificates[modalIndex].year}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
