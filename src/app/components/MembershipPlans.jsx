'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const plans = [
  {
    title: '$7 CASUALS',
    subtitle: 'PAY PER USE',
    price: '$7',
    period: 'PER VISIT',
    features: [
      '24/7 GYM ACCESS',
      'AUTO CHARGED ON ENTRY',
      'NO COMMITMENTS',
      'COME AND GO FREELY – ONE PAYMENT, 4 HOURS OF ACCESS',
    ],
    buttonText: 'GET STARTED',
    bgColor: 'from-red-700 to-red-600',
  },
  {
    title: '$14 WEEKLY',
    subtitle: 'DIRECT DEBIT',
    price: '$14',
    period: 'PER WEEK',
    features: [
      '24/7 GYM ACCESS',
      'NO SIGNUP OR HIDDEN FEES',
      'CANCEL ANYTIME, NO MORE TO PAY',
      'MANAGE MEMBERSHIP FROM YOUR PHONE',
      '$10 PER WEEK AFTER 12 MONTHS',
    ],
    buttonText: 'JOIN TODAY',
    bgColor: 'from-yellow-400 to-yellow-500 text-black',
  },
  {
    title: '$595 YEARLY',
    subtitle: 'PAY UPFRONT',
    price: '$595',
    period: 'PER YEAR',
    features: [
      '24/7 GYM ACCESS',
      'NO DIRECT DEBITS',
      'ONCE OFF PAYMENT',
    ],
    buttonText: 'BUY NOW',
    bgColor: 'from-red-700 to-red-600',
  },
];

const MembershipPlans = () => {
  return (
    <section id="membership" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">MEMBERSHIP OPTIONS</h2>
        <p className="text-yellow-500 text-lg font-semibold mb-12">CREATE YOUR PROFILE TODAY</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(255, 255, 255, 0.1)" }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden shadow-md flex flex-col transition-transform duration-300"
            >
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-bold uppercase">{plan.title}</h3>
                <p className="text-sm text-gray-300">{plan.subtitle}</p>
              </div>
              <div className="flex-1 p-6 flex flex-col items-center">
                <div className="text-5xl font-extrabold text-yellow-400">{plan.price}</div>
                <div className="uppercase text-sm font-semibold mt-1 mb-6 text-gray-400">{plan.period}</div>
                <ul className="text-sm space-y-3 text-left w-full">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <Link href="/contact">
                  <button
                    className={`bg-gradient-to-r ${plan.bgColor} cursor-pointer hover:opacity-95 hover:shadow-xl transition-all duration-300 text-white font-bold w-full py-3 rounded-full`}
                  >
                    {plan.buttonText}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
