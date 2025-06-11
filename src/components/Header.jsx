import React, { useState } from 'react';
import FCX from '../assets/FCX.png';
import { Menu, X } from 'lucide-react'; // Icons for open/close

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-500 shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-[80px]">
        
        {/* Logo Box */}
        <div className="bg-black rounded-full h-[60px]  flex items-center justify-center">
          <img
            src={FCX}
            alt="Fincopx Logo"
            className="h-30 w-auto object-contain"
          />
        </div>

     
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Services', 'About Us', 'T&C'].map((text, index) => {
            const hrefs = ['/', '#services', '/aboutus', '/terms'];
            return (
              <a
                key={text}
                href={hrefs[index]}
                className="text-white  font-semibold hover:text-pink-100  transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-black p-2 px-3 rounded-full"
              >
                {text}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="/" className="block text-gray-700 py-2 hover:text-yellow-500 font-bold">Home</a>
          <a href="#services" className="block text-gray-700 py-2 hover:text-yellow-500 font-bold">Services</a>
          <a href="/aboutus" className="block text-gray-700 py-2 hover:text-yellow-500 font-bold">About Us</a>
          <a href="/terms" className="block text-gray-700 py-2 hover:text-yellow-500 font-bold">T&amp;C</a>
        </div>
      )}
    </header>
  );
};
