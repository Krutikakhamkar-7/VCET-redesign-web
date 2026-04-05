import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedDepartments = () => {
  const departments = [
    {
      name: 'Computer Engineering',
      description: 'Cutting-edge computer science education with focus on AI, ML, and software development.',
      bgColor: 'from-blue-500 to-purple-600',
    },
    {
      name: 'Information Technology',
      description: 'Comprehensive IT education covering cybersecurity, data analytics, and cloud computing.',
      bgColor: 'from-green-500 to-teal-600',
    },
    {
      name: 'AI & Data Science',
      description: 'Advanced programs in artificial intelligence, machine learning, and big data analytics.',
      bgColor: 'from-orange-500 to-red-600',
    },
    {
      name: 'Mechanical Engineering',
      description: 'Traditional and modern mechanical engineering with CAD, robotics, and automation.',
      bgColor: 'from-gray-600 to-gray-800',
    },
    {
      name: 'Civil Engineering',
      description: 'Infrastructure development, construction technology, and sustainable engineering.',
      bgColor: 'from-yellow-500 to-orange-600',
    },
    {
      name: 'Electronics & Telecommunication',
      description: 'Electronics design, communication systems, and embedded technology.',
      bgColor: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Featured Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of engineering disciplines designed to shape future innovators.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl h-80 bg-gradient-to-br ${dept.bgColor} shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-4">{dept.name}</h3>
                <p className="mb-6 opacity-90">{dept.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-electric-blue bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit hover:bg-white/30 transition-colors duration-200"
                >
                  Explore Department <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDepartments;