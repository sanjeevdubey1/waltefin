import React from 'react';
import { Phone, Mail, FileText ,LocateIcon ,Locate } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Contactus = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-5xl bg-cyan-200/10 rounded-2xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 p-6 md:p-10 text-white shadow-md shadow-amber-400">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Contact Us</h2>
          <p className="text-lg">
            Reach out for <strong>Home Loans, Business Loans</strong>, and many more financial services in <strong>Navi Mumbai</strong> or <strong>Panvel</strong>.
          </p>
          <p className="mt-4 text-sm">
            We’re here to assist you in finding the right financial solutions. Let’s connect today!
          </p>

          <h3 className='font-semibold text-yellow-600 mt-1'>Office Address</h3>
          <p className='flex items-center '>
            Navi Mumbai  New panvel East Poja complex Shop No: 20 
          </p>
        </div>

        {/* Right Side - Call to Actions */}
        <div className="md:w-1/2 flex flex-col items-center gap-4 w-full">
          <a
            href="tel:+918424020416"
            className="w-full md:w-[300px] bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-xl flex items-center justify-center gap-2"
          >
            <Phone size={18} /> Call Now
          </a>
          <a
            href="mailto:dharmarealty@gmail.com"
            className="w-full md:w-[300px] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Email Us
          </a>
          <Link
            to="/apply"
            className="w-full md:w-[300px] bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl flex items-center justify-center gap-2"
          >
            <FileText size={18} /> Apply Now
          </Link>

          {/* Contact Info Box */}
          <div className="w-full md:w-[300px] bg-neutral-800 mt-4 rounded-xl p-4 text-sm text-white text-center shadow-inner">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone size={16} className="text-yellow-400" />
              <span className="font-medium">+91 84240 20416</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <span className="font-medium">fincopx@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
