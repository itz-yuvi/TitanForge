'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava D.',
    result: 'LOST 25KG',
    timeline: '6 Months',
    quote:
      'TitanForge changed my life. I never thought I’d see abs again, but here I am – stronger, healthier, and more confident.',
    imageBefore: '/assets/bt1.jpeg',
    imageAfter: '/assets/at1.jpeg',
    rating: 5,
  },
  {
    name: 'Liam R.',
    result: 'GAINED 8KG MUSCLE',
    timeline: '4 Months',
    quote:
      'From skinny to shredded — TitanForge gave me the tools and support to completely transform.',
    imageBefore: '/assets/bt3.jpeg',
    imageAfter: '/assets/at3.jpeg',
    rating: 5,
  },
  {
    name: 'Sara M.',
    result: 'TONED + STRONGER',
    timeline: '3 Months',
    quote:
      'I never felt comfortable in a gym until TitanForge. The coaches truly care, and the energy is unmatched.',
    imageBefore: '/assets/bt2.jpeg',
    imageAfter: '/assets/at2.jpeg',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          REAL RESULTS. <span className="text-yellow-500">REAL MEMBERS.</span>
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          No filters. No fluff. Just raw transformations powered by TitanForge.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 shadow-lg relative hover:shadow-yellow-500/20 transition"
            >
              {/* Before & After Images */}
              <div className="flex gap-2 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={t.imageBefore}
                  alt={`${t.name} Before`}
                  width={160}
                  height={160}
                  className="rounded-lg w-1/2 object-cover"
                />
                <Image
                  src={t.imageAfter}
                  alt={`${t.name} After`}
                  width={160}
                  height={160}
                  className="rounded-lg w-1/2 object-cover"
                />
              </div>

              {/* Name, Quote, Tags */}
              <h3 className="text-xl font-bold">{t.name}</h3>
              <div className="flex flex-wrap gap-2 my-2 text-sm">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                  {t.result}
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                  {t.timeline}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-2">"{t.quote}"</p>

              {/* Rating */}
              <div className="flex mt-4 gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 w-5 h-5" fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
