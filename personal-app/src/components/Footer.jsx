import React from "react";
import Anveshicon from "../assets/Anvesh Icon -white.png";
const Footer = () => {
  return (
    <footer className="bg-[#DAC5A7] text-black py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm leading-6">
              I am Anvesh, a passionate Full Stack Developer skilled in building
              scalable and efficient web applications. Focused on delivering
              modern, responsive, and user-friendly solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Me</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: <a href="mailto:anvesh@example.com" className="hover:underline">kunchamanvesh@gmail.com</a></p>
            <p>Phone: +91 6309337627</p>
            <p>Location: Hyderabad, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black my-6"></div>

        {/* Bottom with Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Kuncham Anvesh. All rights reserved.</p>
          
          {/* Placeholder logo image */}
          <img
            src={Anveshicon} // Replace with your logo later
            alt="Logo"
            className="h-30 mt-4 md:mt-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
