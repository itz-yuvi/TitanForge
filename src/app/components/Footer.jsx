import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">TitanForge</h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Where champions are forged. Join the elite and transform your fitness journey.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/classes">Classes</Link></li>
            {/* <li><Link href="/trainers">Trainers</Link></li> */}
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">123 Forge Ave, Muscle City</p>
          <p className="text-sm text-gray-300">Email: support@titanforge.com</p>
          <p className="text-sm text-gray-300">Phone: +1 800 555 9000</p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="#" className="hover:text-red-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-600"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TitanForge. All rights reserved.
      </div>
    </footer>
  );
}
