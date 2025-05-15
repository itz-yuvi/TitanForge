'use client';

import React, { useEffect, useState } from 'react';

const Splash = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Start fading after 2s

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Fully remove after 2.5s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 animate-pulse transform transition-transform duration-500 hover:scale-250">
  TitanForge
</h1>
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>
        <p className="mt-2 text-sm text-gray-400">Igniting the Forge...</p>
      </div>
    </div>
  );
};

export default Splash;
