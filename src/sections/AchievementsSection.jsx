// src/sections/AchievementsSection.jsx
import React from 'react';
import AchievementsGrid from '../components/AchievementsGrid';

const achievements = [
    {
    id: 1,
    title: "DSA Problem Solving Milestone",
    description: "Solved over 1000+ DSA problems across LeetCode, GFG, and other platforms.",
    year: "2024",
    images: [
      '../../images/ach1.png',
      '../../images/ach2.png',
      '../../images/ach3.png',
    ],
  },
  {
    id: 2,
    title: "District Topper – Class 12",
    description: "Scored 98.8% in Class 12 (1st Rank in District).",
    year: "2022",
    images: [
      '../../images/ach4.png'
    ],
  }
  
];


export default function AchievementsSection() {
  return (
    <>
    
    <section id="achievements" className="py-20">
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-10 sweep-heading">
            <span className="sweep-bg" />
            Achievements
  
            </h2>
            </div>
      <AchievementsGrid achievements={achievements} />
    </section>
    </>
  );
}
