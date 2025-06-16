import React from 'react';
import { useNavigate } from 'react-router-dom';
import FCX from '../assets/FCX.png'; // Adjust path as needed
import { X } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-500 hover:text-red-500"
        title="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Logo and Heading */}
      <div className="flex items-center mb-10 max-w-6xl mx-auto mr-4.5">
        <img src={FCX} alt="FinCopX Navi Mumbai Loan Services" className="w-10 h-10 mr-4" />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          About <span className="text-yellow-400">FinCopX</span>
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">

        <h2 className="text-2xl text-white font-bold">Leading Loan DSA in Navi Mumbai & Panvel</h2>

        <p>
          FinCopX is a modern financial services partner that empowers individuals and businesses by helping them access
          suitable loan solutions from trusted banks and NBFCs.
        </p>

        <p>
          We act as a Direct Selling Agent (DSA), connecting clients with a wide range of financial products—including
          personal loans, business loans, and property loans—while offering honest guidance throughout the process.
        </p>

        <p>
          Our team is committed to transparency and customer service, ensuring that you receive clear information and
          professional support. We believe financial services should be accessible, ethical, and adapted to your needs.
        </p>

        <h3 className="text-xl text-yellow-400 font-semibold">Loan Services in Navi Mumbai & Panvel</h3>
        <p>
          FinCopX proudly offers personalized loan services in Navi Mumbai, Panvel, Kamothe, Kharghar, Taloja, and nearby
          areas. Whether you're looking for a personal loan, home loan, or a business loan in Navi Mumbai or Panvel, we
          provide quick support and transparent guidance every step of the way.
        </p>

        <h3 className="text-xl text-yellow-400 font-semibold mt-6">Why Choose FinCopX?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Access to multiple lending partners under one roof</li>
          <li>Loan services available in Navi Mumbai, Panvel, and surrounding nodes</li>
          <li>Guided application process with documentation support</li>
          <li>No hidden charges or misleading claims</li>
          <li>Customer-first approach with professional assistance</li>
          <li>Ethical and transparent service structure</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          *Loan approval and disbursal are solely determined by the lending institutions based on your credit profile and documentation. <a className='underline text-blue-600' href="/terms">T&C©</a>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
