// sections/ContactSection.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import ScheduleCall from '../components/ScheduleCall';

export default function ContactSection() {
  return (
    <section id="contact" className="py-5">
     <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-10 sweep-heading">
            <span className="sweep-bg" />
            Contact Me
  
            </h2>
            </div>
      <div className="md:flex md:gap-16 md:justify-center">
        <ContactForm />
        <ScheduleCall />
      </div>
    </section>
  );
}

// For ScheduleCall, you can integrate Calendly or similar widget, or just display your availability.

