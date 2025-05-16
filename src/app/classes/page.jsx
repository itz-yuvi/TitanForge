'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Clock4, Users, Move, HeartPulse, Mountain, Bolt } from 'lucide-react';

const classes = [
  {
    name: 'Strength Training',
    icon: <Dumbbell className="w-8 h-8 text-yellow-500" />,
    description: 'Build muscle and boost power with our progressive strength-focused sessions.',
    schedule: 'Mon, Wed, Fri – 6:00 PM',
  },
  {
    name: 'HIIT Blast',
    icon: <Flame className="w-8 h-8 text-yellow-500" />,
    description: 'High-intensity interval training to burn fat and increase stamina quickly.',
    schedule: 'Tue, Thu – 7:00 AM & 6:30 PM',
  },
  {
    name: 'Endurance Circuit',
    icon: <Clock4 className="w-8 h-8 text-yellow-500" />,
    description: 'Challenge your limits with endurance-based training in circuit style.',
    schedule: 'Mon – Fri – 8:00 AM',
  },
  {
    name: 'Group Conditioning',
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    description: 'Fun, community-driven sessions with full-body workouts.',
    schedule: 'Sat & Sun – 10:00 AM',
  },
  {
    name: 'Mobility & Flexibility',
    icon: <Move className="w-8 h-8 text-yellow-500" />,
    description: 'Improve your range of motion and recover better with our stretch and mobility classes.',
    schedule: 'Sat – 12:00 PM',
  },
  {
    name: 'Cardio Core',
    icon: <HeartPulse className="w-8 h-8 text-yellow-500" />,
    description: 'Get your heart racing while strengthening your abs and core.',
    schedule: 'Tue & Thu – 5:30 PM',
  },
  {
    name: 'Functional Fitness',
    icon: <Mountain className="w-8 h-8 text-yellow-500" />,
    description: 'Train for real-world movement and strength in dynamic ways.',
    schedule: 'Wed & Fri – 7:00 PM',
  },
  {
    name: 'Explosive Power',
    icon: <Bolt className="w-8 h-8 text-yellow-500" />,
    description: 'Focus on speed, agility, and explosive power with plyometrics.',
    schedule: 'Sun – 9:00 AM',
  },
];

const ClassesPage = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">OUR CLASSES</h2>
        <p className="text-yellow-500 text-lg font-semibold mb-12">PUSH LIMITS. LEVEL UP.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-yellow-500/10 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {cls.icon}
                <h3 className="text-xl font-bold">{cls.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{cls.description}</p>
              <p className="text-yellow-500 font-semibold text-sm">{cls.schedule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesPage;
