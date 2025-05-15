'use client';
import React from 'react';
import { Dumbbell, ShieldCheck, Clock, Star, Users, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Dumbbell className="w-8 h-8 text-yellow-500" />,
    title: 'Elite Equipment',
    description: 'Train with top-tier machines, free weights, and performance gear trusted by pro athletes.',
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: 'Certified Trainers',
    description: 'Get guidance from experienced, certified trainers who tailor plans to your goals.',
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow-500" />,
    title: '24/7 Access',
    description: 'No time limits here. Train anytime, day or night — whenever it fits your schedule.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
    title: 'Safe & Secure',
    description: 'Biometric access, CCTV coverage, and locker security ensure a worry-free workout.',
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: 'Member-First Experience',
    description: 'From the moment you walk in, everything is designed around your comfort and results.',
  },
  {
  icon:  <Utensils className="w-8 h-8 text-yellow-500" />,
  title: 'Nutrition Guidance',
  description: 'Access expert nutritional advice and personalized meal planning to fuel your fitness journey.',
}
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          WHY CHOOSE <span className="text-yellow-500">TITANFORGE</span>?
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We don’t just build bodies — we forge legends. Here's why our community swears by us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 text-left hover:border-yellow-500 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
