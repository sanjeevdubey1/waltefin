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
        className="relative bg-[url('https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen w-full"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Welcome to FinCopX</h1>
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

<section id='contactus' className="bg-gradient-to-r from-cyan-50 to-cyan-100 py-10 px-6 text-center rounded-t-3xl shadow-inner">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Let’s Talk Finance</h2>
  <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
    We’ve helped over <span className="font-semibold text-yellow-600">2000+</span> clients get their dream loans. Ready to be next?
  </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
    <a
      href="tel:+919876543210"
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition"
    >
      Call Now: +91 98765 43210
    </a>
    <a
      href="mailto:contact@fincopx.com"
      className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-full border border-gray-300 shadow transition"
    >
      Email Us: contact@fincopx.com
    </a>
  </div>

  <p className="text-sm text-gray-500">We’re available Mon–Sat, 10am–7pm</p>
</section>

      {/* Footer */}
      <footer className="bg-cyan-50 text-center text-sm text-gray-500 py-4">
        © 2025 FincopX. All rights reserved.
      </footer>


    </div>
  );
};
