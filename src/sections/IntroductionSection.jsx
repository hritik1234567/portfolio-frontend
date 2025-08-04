// sections/IntroductionSection.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// import profileImg from '../public/images/yourphoto.jpg';

export default function IntroductionSection() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between gap-12 py-28"
    >
      <div className="flex-1 text-white space-y-6">
        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-emerald-400">Hritik Raheja</span>
        </h1>
        <TypeAnimation
        sequence={[
            'A passionate Developer.', 2000,
            'Building web apps.', 2000,
            'Lifelong Learner.', 2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl font-semibold"
        style={{ display: 'inline-block' }}
        />
        <p className="text-lg">
          {`Welcome to my portfolio! Here you'll find my work, experience, and how to reach me.`}
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="../../images/image1.png" // Update with your actual image path
          className="rounded-full shadow-xl w-60 h-60 object-cover border-4 border-emerald-300"
          alt="Profile"
        />
      </div>
    </section>
  );
}
