import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and TypeScript, featuring user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Personal Journal App',
      description: "The Personal Journal App lets users securely write, edit, and organize daily thoughts, goals, and reflections with a clean interface.",
      image: 'https://images.pexels.com/photos/7947699/pexels-photo-7947699.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://journel-o6zl.vercel.app/',
      githubUrl: 'https://github.com/Germaine144/journel',
    },
    {
      title: 'Construction Site App',
      description: 'The Construction Site App helps manage tasks, track progress, and improve team communication, ensuring efficient construction workflows through real-time updates and a mobile-friendly interface.',
      image: '/image/cons.jpg', 
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      liveUrl: 'https://construction-site-ten.vercel.app/',
      githubUrl: 'https://www.figma.com/proto/8VOjyuRM36oEUcho5Z2GX6/E-Commerce-UI-Kit--Community-?node-id=91-75&t=uHinnhRFbUkBy04G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    },
    {
      title: 'Recipe Review',
      description: 'The Recipe Review App lets users explore, review, and share recipes. It features ratings, comments, and personalized collections for easier cooking and discovery.',
      image: '/image/rev.jpg', 
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://review-recipe.vercel.app/',
      githubUrl: 'https://github.com/Germaine144/review-recipe',
    },
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'
              }`}
            >
              {project.image && (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || '/image/fallback.jpg'} // optional fallback
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode
                          ? 'bg-gradient-to-r from-emerald-900/50 to-teal-900/50 text-emerald-300 border border-emerald-700/30'
                          : 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors duration-200 ${
                      darkMode
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-emerald-600 hover:text-emerald-800'
                    }`}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors duration-200 ${
                      darkMode
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
