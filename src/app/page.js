'use client';
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Splash from "./components/Splash";
import { Roboto } from "next/font/google";
import MembershipPlans from "./components/MembershipPlans";
import FaqSection from "./components/FaqSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import TrainerSpotlight from "./components/TrainerSpotlight";
import ProgressTracker from "./components/ProgressTracker";

// Load font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Simulate splash screen duration
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 3000); // Adjust this to match your splash screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={roboto.className}>
      {!showHero && <Splash />}
      <HeroSection showHero={showHero} />
      <MembershipPlans/>
      
      <WhyChooseUs/>
      <TrainerSpotlight/>
      <Gallery/>
       <ProgressTracker/>

      <Testimonials/>
      <FaqSection/>
    </div>
  );
}
