import React from 'react';
import { Briefcase, Home, User, Building, ShieldCheck, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Home size={28} />, title: 'Property Loans' },
    { icon: <Briefcase size={28} />, title: 'Business Loans' },
    { icon: <User size={28} />, title: 'Personal Loans' },
    { icon: <Building size={28} />, title: 'Loan Against Property' },
    { icon: <ShieldCheck size={28} />, title: 'Insurance' },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4">Our Services</h2>
        <p className="text-slate-300 mb-12 text-sm sm:text-base">
          Empowering you with the right financial solutions
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#101721] rounded-xl shadow-lg hover:shadow-cyan-400/20 transition duration-300 p-5 flex flex-col items-center text-center border border-slate-700 pointer-coarse:"
            >
              <div className="text-yellow-700 mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div className="my-12 border-t border-slate-600 w-3/4 mx-auto"></div>

      {/* Stats and DSA Info Section */}
      <div className="max-w-5xl mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-2">2,000+ Loans Sanctioned</h3>
          <p className="text-slate-300 text-sm sm:text-base">
            Successfully helped individuals and businesses get the financial assistance they need.
          </p>
        </div>

        <div className="h-12 w-[1px] bg-slate-800 hidden sm:block"></div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-2">Registered DSA with Top Banks</h3>
          <ul className="text-slate-300 text-sm sm:text-base space-y-1">
            <li className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="text-green-400 mr-2" size={18} />
              HDFC, Kotak, IDFC, ICICI, SBI & more
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="text-green-400 mr-2" size={18} />
              Quick Approval Process
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="text-green-400 mr-2" size={18} />
              Trusted by 5000+ Clients
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
