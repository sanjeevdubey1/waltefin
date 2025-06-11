import React from 'react';
import FCX from '../assets/FCX.png'; // <-- Update path if needed

const AboutUs = () => {
  return (
    <section className="min-h-screen w-auto bg-black  py-12">
      {/* Logo and Heading */}
      <div className="max-w-6xl mx-auto p-8 flex items-center space-x-6 mb-10">
        <div className=" p-2 rounded-full">
          <img
            src={FCX}
            alt="Fincopx Logo"
            className="w-40 h-40 object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-yellow-600">About Fincopx</h1>
          <p className="text-pink-100 text-md mt-1">Your Trusted Loan and Insurance Partner</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-cyan-600 rounded-2xl shadow-md p-8 text-pink-100 leading-relaxed">
        <p className="mb-4">
          At <strong>Fincopx</strong>, we specialize in providing a wide range of loan services tailored to meet the financial needs of individuals and businesses. From personal loans to home loans, vehicle loans to business funding—we help connect our clients to the right financial solutions.
        </p>

        <p className="mb-4">
          We proudly operate as a <strong>Direct Selling Agent (DSA)</strong> in the financial services space. Our mission is to simplify the borrowing process by offering expert advice, quick application handling, and transparent services.
        </p>

        <p className="mb-4">
          Fincopx is officially partnered with <strong>Andromeda</strong>, one of India’s leading corporate DSAs. This partnership gives us access to top financial institutions and allows us to offer competitive rates and faster loan approvals.
        </p>

        <p className="mb-4">
          In addition to loans, we also offer <strong>insurance solutions</strong> to secure your health, life, and assets. Our goal is to be a one-stop solution for all your financial needs.
        </p>

        <p>
          Whether you're looking to finance your dream home, grow your business, or protect your future—<strong>Fincopx</strong> is here to guide you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
