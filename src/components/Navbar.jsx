// components/Navbar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-scroll';
import ThemeSwitcher from './ThemeSwitcher';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'certificates', label: 'Certificates' },
  { to: 'contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-950 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a
        href="/"
        onClick={(e) => {
            e.preventDefault();     // prevent default link navigation
            window.location.reload(); // reload the page
        }}
        className="inline-block"
        >
            <div className="text-2xl font-bold tracking-tight text-emerald-300">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-300 to-pink-400 text-4xl md:text-3xl">
                Hritik <span className="text-emerald-400">Raheja</span>
                </span>
            </div>
        </a>

        <ul className="hidden md:flex gap-6 items-center">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className="text-white hover:text-emerald-400 cursor-pointer font-medium transition"
                spy
                activeClass="border-b-2 border-emerald-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
}
