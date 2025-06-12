import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I&#39;m a passionate front-end developer with a keen eye for design and a love for creating exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              With a strong foundation in modern web technologies, I specialize in building responsive, 
              accessible, and performant web applications. I believe in writing clean, maintainable code 
              and staying up-to-date with the latest industry trends and best practices.
            </p>

            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              When I&#39;m not coding, you&#39;ll find me exploring new design patterns, contributing to open-source 
              projects, or learning about emerging technologies that can enhance user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">2+</div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500 mb-2">15+</div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 border border-emerald-700/30' 
                : 'bg-gradient-to-br from-emerald-50 to-emerald-100'
            }`}>
              <Code className="text-emerald-500 mb-4" size={48} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Clean Code
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Writing maintainable, scalable code following industry best practices and modern standards.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gradient-to-br from-teal-900/30 to-teal-800/30 border border-teal-700/30' 
                : 'bg-gradient-to-br from-teal-50 to-teal-100'
            }`}>
              <Palette className="text-teal-500 mb-4" size={48} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                UI/UX Focus
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Creating intuitive and visually appealing interfaces that provide excellent user experiences.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 border border-cyan-700/30' 
                : 'bg-gradient-to-br from-cyan-50 to-cyan-100'
            }`}>
              <Zap className="text-cyan-500 mb-4" size={48} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Performance
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Optimizing applications for speed and efficiency to ensure the best possible user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
