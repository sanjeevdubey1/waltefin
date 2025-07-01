import React, { useState } from 'react';
import FCX from '../assets/FCX.webp';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Properties', path: '/real-estate' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contactus' },
    { name: 'Blog', path: '/blogs' },
    { name: 'T&C', path: '/terms' },
  ];

  return (
    <header className="sticky top-0 z-50 px-2">
      <div className="max-w-[84rem] mx-auto mb-2.5 px-4 py-2 h-[75px] bg-black shadow-sm shadow-cyan-100 rounded-bl-3xl rounded-br-3xl flex justify-between items-center">

        {/* Logo (Untouched) */}
        <div className="bg-black rounded-3xl h-[60px] flex items-center justify-center">
          <img
            src={FCX}
            alt="Fincopx Logo"
            className="h-30 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white font-semibold bg-transparent hover:text-pink-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-black p-2 px-3 rounded-3xl"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Navbar"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black px-6 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        {menuItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="block text-pink-100 py-2 font-bold hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)} // Close menu after click
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
};
