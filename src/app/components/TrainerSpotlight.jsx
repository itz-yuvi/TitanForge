"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const trainers = [
  {
    name: "Coach Alex",
    bio: "Strength & Conditioning Expert",
    image: "/assets/trainer1.jpg",
    certifications: ["NSCA-CPT", "Nutrition Coach", "Kettlebell Certified"],
    skills: { Strength: 95, HIIT: 85, Mobility: 70 },
  },
  {
    name: "Coach Mira",
    bio: "Female Fat Loss Specialist",
    image: "/assets/trainer2.jpg",
    certifications: ["ACE Certified", "Group Trainer", "CPR Certified"],
    skills: { FatBurn: 90, Strength: 75, Endurance: 80 },
  },
  {
    name: "Coach Sam",
    bio: "Muscle Gain & Body Recomp",
    image: "/assets/trainer3.jpg",
    certifications: ["ISSA Trainer", "Physique Prep", "Rehab Specialist"],
    skills: { Muscle: 88, HIIT: 72, Rehab: 65 },
  },
];

const TrainerCard = ({ trainer }) => {
  const [flipped, setFlipped] = useState(false);

  const tiltStyle = {
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
  };

  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5 }}
      className="relative w-full max-w-xs h-[420px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`absolute inset-0 rounded-2xl shadow-lg bg-[#1a1a1a] text-white p-6 flex flex-col items-center justify-center transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={tiltStyle}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center`}
        >
          <Image
            src={trainer.image}
            alt={trainer.name}
            width={160}
            height={160}
            className="rounded-full mb-4 object-contain w-40 h-40"
          />
          <h3 className="text-xl font-bold">{trainer.name}</h3>
          <p className="text-yellow-500 text-sm">{trainer.bio}</p>
          <button className="cursor-pointer mt-6 px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:shadow-yellow-500/50 hover:bg-yellow-500 transition-all duration-300 focus:outline-none active:scale-95">
            See More →
          </button>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 rotate-y-180 backface-hidden flex flex-col items-start justify-center p-4`}
        >
          <h4 className="text-yellow-400 text-lg font-semibold mb-2">
            Certifications
          </h4>
          <ul className="list-disc list-inside text-sm mb-4">
            {trainer.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <h4 className="text-yellow-400 text-lg font-semibold mb-2">Skills</h4>
          <div className="w-full space-y-2">
            {Object.entries(trainer.skills).map(([skill, level], i) => (
              <div key={i}>
                <div className="text-xs mb-1">
                  {skill}: {level}%
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-yellow-500 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TrainerSpotlight = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % trainers.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + trainers.length) % trainers.length);

  return (
    <section className="bg-black text-white py-24 px-4" id="trainers">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          MEET YOUR <span className="text-yellow-500">TRAINERS</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Elite coaches with real certifications, real results, and serious
          passion.
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 p-2 md:p-4 bg-gray-800 hover:bg-yellow-500 rounded-full transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="w-full flex justify-center">
            <TrainerCard trainer={trainers[current]} />
          </div>

          <button
            onClick={next}
            className="absolute right-0 p-2 md:p-4 bg-gray-800 hover:bg-yellow-500 rounded-full transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainerSpotlight;
