import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-emerald-50 to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
             I&apos;m always open to discussing new opportunities and interesting projects. Let&apos;s connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-emerald-900/30' : 'bg-emerald-100'
              }`}>
                <Mail className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} size={24} />
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  umuhiregermaine12@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-teal-900/30' : 'bg-teal-100'
              }`}>
                <Phone className={darkMode ? 'text-teal-400' : 'text-teal-600'} size={24} />
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Phone
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  +250 791 593 529
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-cyan-900/30' : 'bg-cyan-100'
              }`}>
                <MapPin className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} size={24} />
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Location
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-xl shadow-lg ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let&apos;s Work Together
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I&apos;m currently available for freelance work and full-time opportunities. 
                 Whether you have a project in mind or just want to chat about web development, 
                 I&apos;d love to hear from you.
              </p>
              <div className="flex space-x-4">
                <span className={`px-3 py-1 text-sm rounded-full ${
                  darkMode 
                    ? 'bg-teal-900/30 text-teal-300' 
                    : 'bg-teal-100 text-teal-800'
                }`}>
                  Remote friendly
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`p-8 rounded-xl shadow-lg ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  }`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 resize-none ${
                    darkMode 
                      ? 'border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;