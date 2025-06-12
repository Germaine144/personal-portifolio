import React from 'react';
import Image from 'next/image';

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-emerald-50 via-white to-teal-50'
      }`}></div>
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-r from-emerald-600/10 to-teal-600/10' 
          : 'bg-gradient-to-r from-emerald-600/5 to-teal-600/5'
      }`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className={`block mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Hello, I&apos;m</span>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  UMUHIRE Germiane
                </span>
              </h1>
              
              <p className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Front-End Developer crafting beautiful, responsive web experiences with modern technologies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`border-2 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-400' 
                      : 'border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600'
                  }`}
                >
                  Get In Touch
                </button>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${
                    darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
                  }`}
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <Linkedin size={24} className="text-blue-600" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className={`p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <Mail size={24} className="text-emerald-600" />
                </a>
              </div>
            </div>

            {/* Right side - Profile Picture */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                       <Image
                         src="/image/12.jpeg"
                         alt="UMUHIRE Germiane"
                          layout="fill"
                          objectFit="cover"
                         className="rounded-full"
                           />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
      </button>
    </section>
  );
};

export default Hero;