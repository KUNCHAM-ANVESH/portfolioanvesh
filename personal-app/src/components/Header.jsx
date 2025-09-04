import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Anvesh Icon - Black.png";

const Header = () => {
  const navLinks = [
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#DAC5A7] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src={logo} alt="Logo" className="h-15 w-15 object-contain" />
        
        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-8 px-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.path)}
              className="relative text-gray-700 bg-transparent outline-none cursor-pointer
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300
    hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden bg-[#DAC5A7] shadow-md px-2">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.path);
                  setMenuOpen(false);
                }}
                className="text-gray-700 bg-transparent outline-none cursor-pointer py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;