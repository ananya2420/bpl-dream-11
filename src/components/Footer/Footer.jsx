import React from "react";
import logo from "../../assets/logo-footer.png"

export const Footer = () => {
  return (
    <div className="bg-[#070b18] text-white">
      <footer className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <aside>
          <img
            src={logo}
            alt="logo"
            className="w-16 mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            We are a passionate team dedicated to providing the best services
            to our customers.
          </p>
        </aside>

        {/* Quick Links */}
        <nav>
          <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
          <ul className="space-y-2 text-gray-400">
            <li><a className="hover:text-white transition">Home</a></li>
            <li><a className="hover:text-white transition">Services</a></li>
            <li><a className="hover:text-white transition">About</a></li>
            <li><a className="hover:text-white transition">Contact</a></li>
          </ul>
        </nav>

        {/* Subscribe */}
        <nav>
          <h6 className="text-lg font-semibold mb-4">Subscribe</h6>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to our newsletter for updates
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </nav>

      </footer>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © 2024 Your Company. All Rights Reserved.
      </div>
    </div>
  );
};