// src/sections/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Your skills array
const skills = [
  { name: "C++", level: 90 },
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 90 },
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "Bootstrap", level: 80 },
  { name: "Tailwind", level: 80 },
  { name: "DaisyUI", level: 70 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "REST APIs", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "Postman", level: 75 },
  { name: "VS Code", level: 80 },
  { name: "Zustand", level: 65 }
];

// Animation variants - fade-in only (same as in AchievementsGrid)
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      
    >
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-10 sweep-heading relative">
          <span className="sweep-bg" />
          Skills
        </h2>
      </div>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 px-4">
        {skills.map(({ name, level }) => (
          <motion.div
            key={name}
            className="
              bg-indigo-800 hover:bg-emerald-400/90 text-white hover:text-indigo-900
              rounded-lg p-3 shadow-md w-40 cursor-pointer select-none
              transition-transform duration-200 ease-in-out
              hover:scale-105
              flex flex-col
              "
            title={`${name} - ${level}%`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
          >
            <span className="font-semibold text-center mb-2">{name}</span>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-2 rounded-full transition-all"
                style={{ width: `${level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
