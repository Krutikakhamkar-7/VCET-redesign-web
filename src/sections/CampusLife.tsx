import React from 'react';import React, { useState, useEffect } from 'react';






















































export default CampusLife;};  );    </section>      </div>        </div>          ))}            </motion.div>              </div>                </div>                  <p className="text-sm opacity-90">{activity.description}</p>                  <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>                <div className="text-center text-white">              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>            >              className={`relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br ${activity.bgColor} shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer break-inside-avoid`}              whileHover={{ scale: 1.05 }}              transition={{ duration: 0.8, delay: index * 0.1 }}              whileInView={{ opacity: 1, scale: 1 }}              initial={{ opacity: 0, scale: 0.8 }}              key={index}            <motion.div          {activities.map((activity, index) => (        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">        </motion.div>          </p>            Experience a vibrant campus life filled with opportunities for growth, fun, and learning.          <p className="text-xl text-gray-600 max-w-2xl mx-auto">          </h2>            Life Beyond the Classroom          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>        >          className="text-center mb-16"          transition={{ duration: 0.8 }}          whileInView={{ opacity: 1, y: 0 }}          initial={{ opacity: 0, y: 50 }}        <motion.div      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    <section id="campus-life" className="py-20 bg-white">  return (  ];    { title: 'Workshops', description: 'Regular technical workshops and seminars', bgColor: 'from-indigo-500 to-blue-600' },    { title: 'NSS Activities', description: 'National Service Scheme community service', bgColor: 'from-yellow-500 to-orange-600' },    { title: 'Cultural Fest', description: 'Annual cultural festival with performances', bgColor: 'from-pink-500 to-rose-600' },    { title: 'Hackathons', description: 'Monthly coding competitions and challenges', bgColor: 'from-orange-500 to-red-600' },    { title: 'Sports Complex', description: 'Basketball, football, cricket facilities', bgColor: 'from-green-500 to-teal-600' },    { title: 'Technical Clubs', description: 'IEEE, ACM, CSI student chapters', bgColor: 'from-blue-500 to-purple-600' },  const activities = [const CampusLife = () => {import { motion } from 'framer-motion';import { motion, useAnimation } from 'framer-motion';
import { TrendingUp, Users, Award, Star } from 'lucide-react';

const Placements = () => {
  const [counters, setCounters] = useState({ highest: 0, average: 0, percentage: 0, recruiters: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        highest: Math.min(prev.highest + 1, 24),
        average: Math.min(prev.average + 0.5, 8.5),
        percentage: Math.min(prev.percentage + 1, 95),
        recruiters: Math.min(prev.recruiters + 2, 100),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const companies = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Tech Mahindra', 'Cognizant', 'IBM', 'Microsoft', 'Google'
  ];

  return (
    <section id="placements" className="py-20 bg-deep-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/10 to-orange-accent/10"></div>
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-0 w-px h-32 bg-electric-blue/30"
        />
        <motion.div
          animate={{ x: [100, 0, 100] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-0 w-px h-32 bg-orange-accent/30"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Placement Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our students achieve remarkable career success with top companies worldwide.
          </p>
        </motion.div>
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: TrendingUp, label: 'Highest Package', value: `${counters.highest} LPA`, color: 'text-green-400' },
            { icon: Award, label: 'Average Package', value: `${counters.average} LPA`, color: 'text-blue-400' },
            { icon: Users, label: 'Placement %', value: `${counters.percentage}%`, color: 'text-orange-400' },
            { icon: Star, label: 'Recruiters', value: `${counters.recruiters}+`, color: 'text-purple-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center"
            >
              <stat.icon size={48} className={`${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        {/* Company marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-8 text-white text-2xl font-bold opacity-60">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
        {/* Success story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-electric-blue/20 to-orange-accent/20 backdrop-blur-md rounded-3xl p-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <Users size={48} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Student Success Story</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "VCET provided me with the perfect platform to launch my career. The industry-focused curriculum and placement support helped me secure a position at Google with a package of 24 LPA."
              </blockquote>
              <cite className="text-electric-blue font-semibold">- Rahul Sharma, Computer Engineering 2023</cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Placements;