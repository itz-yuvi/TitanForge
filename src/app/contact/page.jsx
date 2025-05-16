'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Dumbbell } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="bg-black text-white">
      {/* Hero with Lucide Icon Parallax Style */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center text-center">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-radial from-yellow-500/10 via-yellow-700/10 to-black" />

        {/* Icon Parallax Layer */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute z-0 text-yellow-500"
        >
          <Dumbbell size={400} strokeWidth={1} />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500">GET IN TOUCH</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Ready to transform your life? We're here to guide your journey.
          </p>
        </motion.div>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">SEND US A MESSAGE</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6">VISIT OR CONNECT</h2>
          <div className="space-y-6 text-gray-300">
            <p className="flex items-center gap-3">
              <MapPin className="text-yellow-500" /> 123 Forge Street, Strength City, ST 45678
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-yellow-500" /> +1 (555) 999-IRON
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-yellow-500" /> contact@titanforgegym.com
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-yellow-500"><Instagram /></a>
              <a href="#" className="hover:text-yellow-500"><Facebook /></a>
              <a href="#" className="hover:text-yellow-500"><Youtube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-500">QUICK QUESTIONS?</h2>
          <div className="space-y-4 text-left">
            <details className="bg-black p-4 rounded-lg border border-gray-700">
              <summary className="cursor-pointer font-semibold">Can I tour the gym before signing up?</summary>
              <p className="mt-2 text-gray-400">Absolutely. Book a free tour any time using our website or by calling us directly.</p>
            </details>
            <details className="bg-black p-4 rounded-lg border border-gray-700">
              <summary className="cursor-pointer font-semibold">What’s included in membership?</summary>
              <p className="mt-2 text-gray-400">All memberships include 24/7 access, elite equipment, locker rooms, and trainer access.</p>
            </details>
            <details className="bg-black p-4 rounded-lg border border-gray-700">
              <summary className="cursor-pointer font-semibold">Is nutrition planning part of your services?</summary>
              <p className="mt-2 text-gray-400">Yes — our trainers offer personalized diet plans tailored to your goals.</p>
            </details>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ContactPage;
