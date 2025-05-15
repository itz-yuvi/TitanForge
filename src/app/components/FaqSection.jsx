'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are your staffed hours?',
    answer: 'Our gym is open 24/7 to members, but staffed hours are 9 AM – 6 PM Monday to Saturday for tours, support, and inquiries.',
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Absolutely. You can cancel anytime through your member dashboard with no hidden fees or lock-in contracts.',
  },
  {
    question: 'Is there a joining fee?',
    answer: 'Nope. We believe in transparency — zero signup or hidden fees. Just pick your plan and get started!',
  },
  {
    question: 'What amenities are included?',
    answer: 'All memberships include 24/7 gym access, showers, lockers, personal training booking options, and access to all equipment.',
  },
  {
    question: 'Do you offer trial sessions?',
    answer: 'Yes, we offer $7 casual visits so you can try the gym before committing to a membership.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faqs" className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-center text-yellow-500 font-semibold mb-12">Got questions? We've got answers.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                className="cursor-pointer w-full flex justify-between items-center p-6 text-left text-lg font-semibold hover:bg-[#2a2a2a] transition"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-yellow-500" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 500 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="px-6 pb-6 text-gray-300 text-sm overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
