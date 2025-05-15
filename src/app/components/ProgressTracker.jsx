'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  Flame,
  Trophy,
  Star,
} from 'lucide-react'; // You can swap icons to match your theme better

const milestones = [
  {
    title: 'Day 1',
    description: 'Joined TitanForge with a mission to transform.',
    icon: <Dumbbell size={32} className="text-yellow-500" />,
    stat: 'Start: 92kg',
  },
  {
    title: '1 Month',
    description: 'Down 6kg. Improved energy, consistency in workouts.',
    icon: <Flame size={32} className="text-yellow-500" />,
    stat: 'Weight: 86kg',
  },
  {
    title: '3 Months',
    description: 'Visible muscle definition. PRs achieved in squats & deadlifts.',
    icon: <Trophy size={32} className="text-yellow-500" />,
    stat: 'Squat: 120kg',
  },
  {
    title: 'Today',
    description: 'Complete transformation. Confident, strong, and proud.',
    icon: <Star size={32} className="text-yellow-500" />,
    stat: 'Final: 72kg',
  },
];

const ProgressTracker = () => {
  return (
    <section className="bg-black text-white py-24 px-4" id="progress">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          YOUR <span className="text-yellow-500">JOURNEY</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Milestones that define progress. Your effort, our guidance.
        </p>

        <div className="relative border-l-4 border-yellow-500 pl-6 space-y-14">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500 shadow-md flex-shrink-0">
                {m.icon}
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-yellow-500">{m.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{m.description}</p>
                <div className="mt-2 text-sm text-gray-400 italic">{m.stat}</div>
              </div>
              <div className="absolute -left-[1.15rem] top-3 w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
