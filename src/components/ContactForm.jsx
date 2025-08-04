// src/components/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('pending');
    try {
      await axios.post('https://portfolio-web-j5ks.onrender.com/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus(null);
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-indigo-800 bg-opacity-80
        p-10 md:p-14
        rounded-2xl shadow-2xl
        w-full
        max-w-2xl
        flex flex-col
        space-y-6
        mx-auto
        min-w-[300px]
        animate-fade-in-up
        mb-10
      "
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="text-lg border border-emerald-400 rounded px-5 py-4 bg-indigo-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="text-lg border border-emerald-400 rounded px-5 py-4 bg-indigo-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        value={formData.message}
        onChange={handleChange}
        className="text-lg border border-emerald-400 rounded px-5 py-4 bg-indigo-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
      />
      <button
        type="submit"
        className="text-lg bg-emerald-400 hover:bg-emerald-500 text-indigo-900 font-bold px-6 py-3 rounded-lg transition"
        disabled={status === 'pending'}
      >
        {status === 'pending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-300 text-center text-lg">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-300 text-center text-lg">There was an error sending your message.</p>}
    </form>
  );
}
