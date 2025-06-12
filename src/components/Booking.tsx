import React, { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, CheckCircle, X } from 'lucide-react';

interface BookingProps {
  darkMode: boolean;
}

const Booking: React.FC<BookingProps> = ({ darkMode }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Configuration - Replace with your actual email
  const YOUR_EMAIL = 'umuhiregermaine12@gmail.com'; // Change this to your actual email

  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates.slice(0, 14); // Show next 14 available weekdays
  };

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const services = [
    'Website Development',
    'UI/UX Design Consultation',
    'Code Review',
    'Technical Consultation',
    'Project Planning',
    'Other'
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Create email content
    const bookingData = {
      date: selectedDate,
      time: selectedTime,
      ...formData
    };

    const emailSubject = `New Booking Request: ${formData.service}`;
    const emailBody = `
New Booking Request Details:

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Appointment Details:
- Date: ${new Date(selectedDate).toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}
- Time: ${selectedTime}
- Service: ${formData.service}

Project Details:
${formData.message || 'No additional details provided'}

---
Booking submitted on: ${new Date().toLocaleString()}
    `;

    // Create mailto link
    const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Simulate processing delay
    setTimeout(() => {
      // Open email client
      window.location.href = mailtoLink;
      
      // Show thank you popup
      setShowThankYouPopup(true);
      setIsSubmitting(false);
      setIsBooked(true);
      
      console.log('Booking submitted:', bookingData);
    }, 1500);
  };

  const closeThankYouPopup = () => {
    setShowThankYouPopup(false);
    
    // Reset form after closing popup
    setTimeout(() => {
      setIsBooked(false);
      setSelectedDate('');
      setSelectedTime('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Thank You Popup Component
  const ThankYouPopup = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
      showThankYouPopup ? 'opacity-100 visible' : 'opacity-0 invisible'
    } transition-all duration-300`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeThankYouPopup}
      />
      
      {/* Popup Content */}
      <div className={`relative max-w-md w-full p-8 rounded-2xl shadow-2xl transform transition-all duration-300 ${
        showThankYouPopup ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      } ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
        
        {/* Close Button */}
        <button
          onClick={closeThankYouPopup}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
          }`}
        >
          <X size={20} />
        </button>

        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
            <CheckCircle className="text-white" size={32} />
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Thank You for Working with Us!
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Your booking request has been submitted successfully.  We&rsquo;ll get back to you shortly to confirm your appointment.
          </p>
          
          {/* Booking Details */}
          <div className={`p-4 rounded-xl mb-6 ${
            darkMode ? 'bg-gray-700/50 border border-gray-600' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar size={16} className="text-emerald-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock size={16} className="text-teal-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {selectedTime}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={closeThankYouPopup}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  if (isBooked && !showThankYouPopup) {
    return (
      <section id="booking" className={`py-20 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`p-12 rounded-2xl shadow-2xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <CheckCircle className="mx-auto mb-6 text-emerald-500" size={80} />
            <h2 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Booking Submitted!
            </h2>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Your booking request has been sent. We&apos;ll confirm your appointment shortly.
            </p>
            <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${
              darkMode 
                ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-700/30' 
                : 'bg-emerald-100 text-emerald-800'
            }`}>
              <Calendar size={20} />
              <span>{new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} at {selectedTime}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="booking" className={`py-20 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Book an Appointment
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to discuss your project? Schedule a free consultation to explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar and Time Selection */}
            <div className={`p-8 rounded-2xl shadow-lg ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Calendar className="mr-3 text-emerald-500" size={28} />
                Select Date & Time
              </h3>

              {/* Date Selection */}
              <div className="mb-8">
                <h4 className={`text-lg font-semibold mb-4 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Available Dates
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {generateAvailableDates().map((date) => (
                    <button
                      key={date.value}
                      onClick={() => setSelectedDate(date.value)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedDate === date.value
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                          : darkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {date.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <h4 className={`text-lg font-semibold mb-4 flex items-center ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    <Clock className="mr-2 text-teal-500" size={20} />
                    Available Times
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                            : darkMode
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Form */}
            <div className={`p-8 rounded-2xl shadow-lg ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <User className="mr-3 text-teal-500" size={28} />
                Your Information
              </h3>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange}  required
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                      darkMode 
                       ? 'border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                    placeholder="Enter your full name" />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                      darkMode 
                        ? 'border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                      darkMode 
                        ? 'border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                      darkMode 
                        ? 'border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        :'border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 resize-none ${
                      darkMode 
                        ? 'border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare size={20} />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className={`inline-flex items-center space-x-6 p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 backdrop-blur-sm'
            }`}>
              <div className="flex items-center space-x-2">
                <Clock className="text-emerald-500" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  30-60 min sessions
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-teal-500" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Free consultation
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="text-cyan-500" size={20} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Remote friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Popup */}
      <ThankYouPopup />
    </>
  );
};

export default Booking;