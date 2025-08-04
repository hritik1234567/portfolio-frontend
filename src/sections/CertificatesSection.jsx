// src/sections/CertificatesSection.jsx
import React from 'react';
import CertificatesGrid from '../components/CertificatesGrid';

const certificates = [
  {
    id: 1,
    title: "Python Programming",
    year: "2024",
    image: "../../images/certi1.png" // Adjust the path as needed
  },
  {
    id: 2,
    title: "Ethical Hacking with Case Studies",
    year: "2024",
    image: "../../images/certi2.png"
  },
  
];


export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-2 max-w-7xl mx-auto px-6">
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-10 sweep-heading">
            <span className="sweep-bg" />
            Certificates
  
            </h2>
            </div>
      <CertificatesGrid certificates={certificates} />
    </section>
  );
}
