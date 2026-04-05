import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: '1.06 Cr Placement',
      description: 'Highest placement package offered to our student',
      bgColor: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Award,
      title: 'SIH Winners',
      description: 'Smart India Hackathon national champions',
      bgColor: 'from-blue-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'National Sports Medal',
      description: 'Gold medal in inter-college sports championship',
      bgColor: 'from-green-500 to-teal-600',
    },
    {
      icon: Star,
      title: 'Research Excellence',
      description: 'Published 50+ papers in international journals',
      bgColor: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Celebrating excellence in education, research, and innovation.
          </p>
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * achievements.length] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8"
          >
            {[...achievements, ...achievements].map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`flex-shrink-0 w-80 bg-gradient-to-br ${achievement.bgColor} rounded-3xl p-8 shadow-lg text-white`}
              >
                <achievement.icon size={48} className="mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">{achievement.title}</h3>
                <p className="text-white/80">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;