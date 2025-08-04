import React, { useState } from 'react';
import axios from 'axios';

export default function ScheduleCall() {
  const [formData, setFormData] = useState({ date: '', time: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, time, email } = formData;
    if (!date || !time || !email) {
      setError('Please fill out date, time, and email.');
      return;
    }

    setError(null);
    try {
      // Replace '/api/schedule' with your actual backend endpoint URL
      await axios.post('https://portfolio-web-j5ks.onrender.com/api/schedule', { date, time, email });
      
      setSubmitted(true);
      // Optionally clear inputs:
       setFormData({ date: '', time: '', email: '' });
        setTimeout(() => {
            setSubmitted(false);}, 5000); // Reset after 5 seconds
    } catch (err) {
      setError('Failed to schedule the call. Please try again.');
    }
  };

  return (
    <div className="bg-indigo-900 bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-md mx-auto text-white animate-fade-in-up">
      <h3 className="text-3xl font-extrabold text-emerald-400 mb-6 text-center">
        Schedule a Call
      </h3>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="mb-2 font-semibold text-gray-300">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="rounded px-3 py-2 bg-indigo-800 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-semibold text-gray-300">Choose Date</span>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="rounded px-3 py-2 bg-indigo-800 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-semibold text-gray-300">Choose Time</span>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="rounded px-3 py-2 bg-indigo-800 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
            />
          </label>

          {error && <p className="text-red-400 text-center">{error}</p>}

          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-indigo-900 font-bold py-3 rounded-lg transition shadow-md"
            disabled={submitted}
          >
            Schedule a Call
          </button>
        </form>
      ) : (
        <div className="text-center text-emerald-300">
          <p className="mb-4 text-lg">Thank you! Your call has been scheduled</p>
          
          <p className="mt-2 text-sm">A confirmation email will be sent to you.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ date: '', time: '', email: '' });
            }}
            className="mt-6 inline-block bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition"
          >
            Schedule Another
          </button>
        </div>
      )}
    </div>
  );
}
