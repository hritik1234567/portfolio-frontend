// src/sections/ProjectsSection.jsx
import React from 'react';
import ProjectZigZag from '../components/ProjectZigZag';

const projects = [
  {
    id: 1,
    title: "Gallery Gateway (Museum Ticket Booking)",
    description:
      "Full-stack museum ticket booking system with real-time availability, Braintree payments, QR-based verification, and email confirmations using Nodemailer.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Braintree", "Nodemailer"],
    images: [
      "../../images/gallery1.png",
      "../../images/gallery2.png",
      "../../images/gallery3.png"
    ],
    liveLink: "https://booking-frontend-gznv.onrender.com/",
    order: "left"
  },
  {
    id: 2,
    title: "ChatApp (Real-Time Messaging)",
    description:
      "MERN-based real-time chat app with Socket.IO, JWT auth, live status, and private messaging with typing indicators. Built for scalability.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
    images: [
      "../../images/chatapp1.png",
      "../../images/chatapp2.png",
      "../../images/chatapp3.png"
    ],
    liveLink: "https://github.com/hritik1234567/Chat-app-mern",
    order: "right"
  },
  {
    id: 3,
    title: "Sudoku Solver",
    description:
      "Interactive Sudoku solver built in React using optimized backtracking algorithm for solving puzzles manually or via image upload.",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    images: [
      "../../images/sudokosolver1.png",
      "../../images/sudokosolver2.png",
      
    ],
    liveLink: "https://sudoko-solver-kappa.vercel.app/",
    order: "left"
  }
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-5">
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-10 sweep-heading">
            <span className="sweep-bg" />
            Projects
  
            </h2>
            </div>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectZigZag
            key={project.id}
            project={project}
            left={index % 2 === 0}  // Alternate left/right zig-zag and animation direction
          />
        ))}
      </div>
    </section>
  );
}
