import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-indigo-950 to-indigo-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Links */}
        <div className="flex gap-8 text-xl">
          <a
            href="https://github.com/hritik1234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
            <span className="hidden sm:inline font-semibold">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/hritik-raheja-191ab5259/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
            <span className="hidden sm:inline font-semibold">LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/RITIK6900/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
            aria-label="LeetCode"
          >
            <SiLeetcode size={24} />
            <span className="hidden sm:inline font-semibold">LeetCode</span>
          </a>
          <a
            href="mailto:ritikraheja82@gmail.com"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
            <span className="hidden sm:inline font-semibold">Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-emerald-300 select-none">
          &copy; {new Date().getFullYear()} Hritik Raheja. All rights reserved.
        </p>
      </div>
      {/* Optional thin emerald underline */}
      <div className="max-w-6xl mx-auto mt-6 border-t border-emerald-700 opacity-30"></div>
    </footer>
  );
}
