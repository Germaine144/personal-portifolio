import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700' 
          : 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            Germiane
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'booking', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors duration-200 capitalize font-medium ${
                  darkMode 
                    ? 'text-gray-300 hover:text-emerald-400' 
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:text-emerald-400' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={darkMode ? 'text-gray-300' : 'text-gray-700'}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden rounded-lg mt-2 p-4 shadow-lg ${
            darkMode ? 'bg-gray-800/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
          }`}>
            {['home', 'about', 'skills', 'projects', 'booking', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2 transition-colors duration-200 capitalize ${
                  darkMode 
                    ? 'text-gray-300 hover:text-emerald-400' 
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;