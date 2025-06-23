import React from 'react';
import { Link } from 'react-router-dom';

export const BlogBusinessLoanPanvel = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-pink-50">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Business Loan Providers in Panvel & Navi Mumbai – Your 2025 Guide
      </h1>

      {/* Meta Info */}
      <p className="text-sm text-gray-500 text-center mb-8">
        Written by FinCopX Team • June 23, 2025
      </p>

      {/* Image */}
      <img
        src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt="Business Loans in Panvel and Navi Mumbai"
        className="rounded-lg shadow mb-8 w-full h-auto object-cover"
        loading="eager"
      />

      {/* Intro */}
      <p className="mb-6 text-lg">
        Finding the right <strong>business loan provider in Panvel or Navi Mumbai</strong> can be the key to unlocking your venture’s growth. Whether you're launching a startup or expanding operations, we’ve compiled the top options for <strong>business loans in Navi Mumbai</strong> tailored for local entrepreneurs in 2025.
      </p>

      {/* Loan Options */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. HDFC Business Loan (Navi Mumbai Branch)</h2>
          <p>Known for fast approvals and minimal documentation. Loans up to ₹50 lakhs available for small and medium businesses in Panvel and surrounding areas.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Kotak Mahindra Bank – MSME Business Loans</h2>
          <p>Flexible repayment up to 48 months. Suitable for startups, retail businesses, and service providers in Navi Mumbai.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Bajaj Finserv Business Loans</h2>
          <p>Panvel-based applicants can apply with only 12 months of business proof. Pre-approved offers and online application available.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Axis Bank Business Loan</h2>
          <p>Quick disbursal and doorstep services in Navi Mumbai and Panvel. Suitable for manufacturing and trading firms.</p>
        </div>
      </div>

      {/* Why Choose a Local DSA */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Why Choose a Local Loan DSA Agent in Panvel?</h2>
        <p>
          Local DSAs (Direct Selling Agents) understand the regional banking ecosystem and can help you get customized offers from banks and NBFCs. At <strong>FinCopX</strong>, we work with top banks to ensure you get the best deal.
        </p>
      </div>

      {/* Internal Links to Other Blogs */}
      <div className="mt-10 bg-blue-100 text-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Read More From FinCopX:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link to="/blog/home-loan-options" className="text-blue-600 hover:underline">
              Top 5 Home Loan Options for First-Time Buyers in Navi Mumbai
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-blue-600 hover:underline">
              Browse All Finance & Loan Blogs
            </Link>
          </li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: Can I apply for a business loan without collateral?</h3>
            <p>Yes, many NBFCs and banks offer unsecured business loans in Navi Mumbai with basic income proof and ITRs.</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: How long does it take to get a business loan in Panvel?</h3>
            <p>It usually takes 3–7 working days depending on your profile and documentation.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-yellow-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Need Help Applying for a Business Loan in Navi Mumbai?</h3>
        <p className="mb-4 text-gray-700">Our advisors are ready to guide you—online or over a call.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/apply" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold">
            Apply Now
          </a>
          <a href="tel:+918424020461" className="border border-yellow-500 text-yellow-600 hover:bg-yellow-200 px-6 py-3 rounded-full font-semibold">
            Talk to Us
          </a>
        </div>
      </div>
    </div>
  );
};
