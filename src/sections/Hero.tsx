import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-electric-blue to-orange-accent opacity-90">
        {/* Animated shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-orange-accent/20 rounded-full blur-xl"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Build the Future with <span className="text-electric-blue">VCET</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Autonomous | NBA & NAAC Accredited | Industry-Ready Engineering Education
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-electric-blue text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Explore Campus
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Apply Now
          </motion.button>
        </motion.div>
        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { number: '5000+', label: 'Students' },
            { number: '95%', label: 'Placement' },
            { number: '100+', label: 'Recruiters' },
            { number: '30+', label: 'Years of Excellence' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-electric-blue">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;