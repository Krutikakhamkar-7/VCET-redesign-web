import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, ChevronRight } from 'lucide-react';

const EventsNotices = () => {
  const events = [
    {
      title: 'Tech Fest 2024',
      date: 'March 15, 2024',
      category: 'Cultural',
      description: 'Annual technical festival with competitions and workshops.',
    },
    {
      title: 'Placement Drive - TCS',
      date: 'March 20, 2024',
      category: 'Placements',
      description: 'Campus recruitment drive by Tata Consultancy Services.',
    },
    {
      title: 'AI Workshop',
      date: 'March 25, 2024',
      category: 'Workshop',
      description: 'Hands-on workshop on Artificial Intelligence and Machine Learning.',
    },
  ];

  const notices = [
    { title: 'Exam Schedule Released', category: 'Exams', date: 'March 10, 2024' },
    { title: 'Scholarship Applications Open', category: 'Scholarships', date: 'March 8, 2024' },
    { title: 'Hostel Fee Payment Deadline', category: 'Admissions', date: 'March 5, 2024' },
    { title: 'New Research Grant Awarded', category: 'Research', date: 'March 3, 2024' },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Events & Notices
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings and important announcements.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Events */}
          <div>
            <h3 className="text-2xl font-bold text-deep-navy mb-8 flex items-center">
              <Calendar className="mr-3 text-electric-blue" size={32} />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-deep-navy mb-2">{event.title}</h4>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <span className="inline-block bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{event.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-8 text-electric-blue font-semibold flex items-center hover:text-blue-600 transition-colors duration-200"
            >
              View All Events <ChevronRight size={16} className="ml-1" />
            </motion.button>
          </div>
          {/* Notices */}
          <div>
            <h3 className="text-2xl font-bold text-deep-navy mb-8 flex items-center">
              <Bell className="mr-3 text-orange-accent" size={32} />
              Latest Notices
            </h3>
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-3 h-3 bg-orange-accent rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-deep-navy">{notice.title}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">{notice.date}</span>
                      <span className="inline-block bg-orange-accent/10 text-orange-accent px-2 py-1 rounded-full text-xs font-medium">
                        {notice.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-8 text-orange-accent font-semibold flex items-center hover:text-orange-600 transition-colors duration-200"
            >
              View All Notices <ChevronRight size={16} className="ml-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsNotices;