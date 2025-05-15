'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const HeroSection = ({ showHero }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (showHero) {
      controls.start('visible');
    }
  }, [showHero]);

  return (
    <section className="relative bg-black text-white min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-32 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/heroImage.jpg"
          alt="TitanForge Gym"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg"
        >
          Forge Your Strength <br />
          At <span className="text-yellow-500">TitanForge</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-base md:text-xl text-gray-300"
        >
          Where discipline meets intensity. Train with elite coaches, world-class equipment, and a community that pushes limits.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="#membership"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
>
  Join the Forge
</motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#tour"
            className="border border-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-full transition"
          >
            Book a Free Tour
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
