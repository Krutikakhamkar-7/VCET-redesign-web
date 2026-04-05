import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, Users, Lightbulb, Heart } from 'lucide-react';

const WhyChooseVCET = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: 'Industry Focused Learning',
      description: 'Curriculum designed with industry experts to ensure students are job-ready from day one.',
    },
    {
      icon: Award,
      title: 'Top Placements',
      description: 'Consistent 95% placement record with top companies offering lucrative packages.',
    },
    {
      icon: Cpu,
      title: 'Modern Labs',
      description: 'State-of-the-art laboratories equipped with latest technology and equipment.',
    },
    {
      icon: Lightbulb,
      title: 'Hackathons & Innovation',
      description: 'Regular hackathons, innovation challenges, and entrepreneurship programs.',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Highly qualified faculty with industry experience and research background.',
    },
    {
      icon: Heart,
      title: 'Vibrant Campus Life',
      description: 'Diverse extracurricular activities, clubs, and cultural events for holistic development.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Choose VCET?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Vidyavardhini's College of Engineering & Technology the perfect choice for your engineering journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mb-6"
              >
                <reason.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVCET;