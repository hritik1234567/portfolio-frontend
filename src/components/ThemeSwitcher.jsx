import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // npm install react-icons

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="ml-4 rounded-full p-2 bg-slate-700 hover:bg-emerald-400 transition
                 border border-emerald-300 shadow-lg flex items-center justify-center"
    >
      {theme === 'dark'
        ? <FaSun className="text-emerald-300" size={20} />
        : <FaMoon className="text-indigo-800" size={20} />
      }
    </button>
  );
}
