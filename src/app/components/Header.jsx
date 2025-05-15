// components/Header.jsx
"use client";

import { useState } from "react";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
          <FaDumbbell className="text-red-600 text-3xl" />
          <span className="text-white">TitanForge</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/about" className="hover:text-red-500 transition">About</Link>
          <Link href="/classes" className="hover:text-red-500 transition">Classes</Link>
          <Link href="/trainers" className="hover:text-red-500 transition">Trainers</Link>
          <Link href="/contact" className="hover:text-red-500 transition">Contact</Link>
        </nav>

        {/* CTA Button - Desktop Only */}
        <Link
          href="/join"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
        >
          Join Now
        </Link>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="cursor-pointer md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-4 space-y-4">
          <Link href="/" className="block text-sm hover:text-red-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block text-sm hover:text-red-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/classes" className="block text-sm hover:text-red-500" onClick={() => setIsOpen(false)}>Classes</Link>
          <Link href="/trainers" className="block text-sm hover:text-red-500" onClick={() => setIsOpen(false)}>Trainers</Link>
          <Link href="/contact" className="block text-sm hover:text-red-500" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            href="/join"
            className="inline-block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-full text-sm font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
