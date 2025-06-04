'use client';

import React from 'react';
import { FaUsers, FaDumbbell, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: <FaUsers className="text-yellow-500 text-3xl" />,
    label: 'Total Members',
    value: '1,245',
  },
  {
    icon: <FaDumbbell className="text-yellow-500 text-3xl" />,
    label: 'Active Subscriptions',
    value: '984',
  },
  {
    icon: <FaMoneyBillWave className="text-yellow-500 text-3xl" />,
    label: 'Monthly Revenue',
    value: '$21,370',
  },
  {
    icon: <FaChartLine className="text-yellow-500 text-3xl" />,
    label: 'Growth Rate',
    value: '12.4%',
  },
];

const AdminDashboard = () => {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-yellow-500">Admin Dashboard</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 shadow hover:border-yellow-500 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-lg font-bold text-gray-300">{stat.label}</h3>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </section>

        <section className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition">Add New Member</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition">Manage Subscriptions</button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full transition">View Reports</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition">Queries</button>

          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminDashboard;
