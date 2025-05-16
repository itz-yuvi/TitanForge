'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className="text-white bg-black">
      {/* Hero Parallax */}
      <section
        className="relative h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/aboutHeroImage.jpg')" }}
      >
        <div className="bg-black/60 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl">
            The Story of <span className="text-yellow-500">TitanForge</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            From a single squat rack to a fortress of transformation — forged by grit, passion, and purpose.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Our Mission
        </motion.h2>
        <p className="text-gray-400 text-lg">
          At TitanForge, we believe strength is earned — not given. We're more than a gym. We are a movement that empowers people to rise above limits and sculpt the strongest version of themselves, mentally and physically.
        </p>
      </section>

      {/* Parallax Core Values */}
      <section
        className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/aboutCoreImage.jpg')" }}
      >
        <div className="bg-black/70 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Values</h2>
          <p className="text-gray-300 text-lg">
            Discipline. Intensity. Community. Integrity. We forge these into everything we do — because real results are built on real values.
          </p>
        </motion.div>
      </section>

      {/* Team / Coaches Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Meet the Titans
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Our elite coaches are forged from experience — ready to mentor, motivate, and mold you into your best self.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Coach Cards */}
          {['Coach Alex', 'Coach Mira', 'Coach Sam'].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6"
            >
              <div className="w-full h-60 mb-4 relative rounded-xl overflow-hidden">
                <Image
                  src={`/assets/trainer${i + 1}.jpg`}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Strength & Conditioning • Nutrition • Motivation
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 24/7 Culture Section */}
<section
  className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: "url('/assets/gallery7.jpg')" }}
>
  <div className="bg-black/75 absolute inset-0" />
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-2xl"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-4">The Grind Never Sleeps</h2>
    <p className="text-gray-300 text-lg">
      Whether it’s 2 AM or 6 PM, the Forge is open — because greatness isn’t confined to business hours.
    </p>
  </motion.div>
</section>

{/* Forging Legends Section */}
<section
  className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: "url('/assets/ga.jpg')" }}
>
  <div className="bg-black/70 absolute inset-0" />
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-3xl px-4"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Forging Legends</h2>
    <p className="text-gray-300 text-lg">
      Real people. Real results. From everyday warriors to elite athletes — TitanForge shapes transformations that last a lifetime.
    </p>
  </motion.div>
</section>



      {/* Forge Philosophy Section */}
<section
  className="relative h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: "url('/assets/aboutFooterImage.jpg')" }}
>
  <div className="bg-black/80 absolute inset-0" />
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-3xl"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">The Forge Philosophy</h2>
    <p className="text-gray-300 italic text-lg">
      “In the fire, we find form. In the pressure, we find purpose. At TitanForge, we don’t fear the grind — we embrace it.”
    </p>
  </motion.div>
</section>


      {/* CTA Parallax Footer */}
      <section
        className="relative h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/aboutFooter.jpg')" }}
      >
        <div className="bg-black/80 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl font-extrabold text-yellow-500 mb-4">
            Ready to Forge Your Legend?
          </h2>
          <a
            href="/contact"
            className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition"
          >
            Join the Forge
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
