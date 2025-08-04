// sections/ExperienceSection.jsx
import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
       <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-10 sweep-heading">
            <span className="sweep-bg" />
            Experience
  
            </h2>
            </div>
      <div className="flex justify-center">
        <ExperienceCard
          title="Full-Stack Web Development Intern"
          company="Eazy Byts"
          period="Aug 2024 – Sep 2024"
          description={[
            "Built a responsive and user-friendly dashboard interface using React and TailwindCSS.",
  "Developed and integrated RESTful APIs using Node.js and Express for health metrics data.",
  "Utilized Git and GitHub for version control and team collaboration."
          ]}
          logo="../../images/intern.png"
        />
      </div>
    </section>
  );
}


