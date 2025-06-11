import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import Services from './Services';
import Partners from './Partners';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div
        id="hero"
        className="relative bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center h-screen w-full"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Welcome to Fincopx</h1>
          <p className="text-white text-base sm:text-xl mb-8 max-w-3xl font-mono">
            Your Trusted Partner for Property, Business & Personal Loans
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/apply')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base"
            >
              Apply Now
            </button>
            <button
              onClick={() => navigate('/emi-calculator')}
              className="bg-white hover:bg-gray-200 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base"
            >
              EMI Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Bank logos */}
      <Partners />

      {/* Services */}
      <Services />

      {/* Footer */}
      <footer className="bg-amber-50 text-center text-sm text-gray-500 py-4">
        © 2025 FincopX. All rights reserved.
      </footer>
    </div>
  );
};
