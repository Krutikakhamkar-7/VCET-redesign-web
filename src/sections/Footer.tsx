import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Departments', 'Placements', 'Campus Life', 'Events', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-electric-blue transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-6">Departments</h3>
            <ul className="space-y-3">
              {['Computer Engineering', 'Information Technology', 'AI & Data Science', 'Mechanical Engineering', 'Civil Engineering', 'Electronics & Telecom'].map((dept) => (
                <li key={dept}>
                  <a href={`#${dept.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-electric-blue transition-colors duration-200">
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin size={20} className="mr-3 text-electric-blue" />
                <span className="text-gray-300">Vasai Road, Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-electric-blue" />
                <span className="text-gray-300">+91 12345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-electric-blue" />
                <span className="text-gray-300">info@vcet.edu.in</span>
              </div>
            </div>
          </div>
          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-electric-blue transition-colors duration-200"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-electric-blue px-4 py-2 rounded-r-full hover:bg-blue-600 transition-colors duration-200"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        {/* Google Maps placeholder */}
        <div className="bg-white/10 rounded-2xl p-8 mb-8">
          <div className="aspect-video bg-gray-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-lg">Google Maps Embed</span>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Vidyavardhini's College of Engineering & Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;