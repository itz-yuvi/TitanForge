'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  '/assets/gallery1.jpg',
  '/assets/gallery7.jpg',
  '/assets/gallery4.jpg',
  '/assets/gallery6.jpg',
  '/assets/gallery5.jpg',
 '/assets/gallery3.jpg',
 '/assets/gallery2.jpg',
  '/assets/gallery8.jpg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-black py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">ICONIC SPACES</h2>
        <p className="text-center text-yellow-500 font-semibold mb-12">Explore the vibe. Feel the energy. See where transformation begins.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.10 }}
              className="overflow-hidden rounded-xl border border-gray-700"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
