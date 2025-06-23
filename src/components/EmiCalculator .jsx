import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
export const EmiCalculator = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(interest) / 12 / 100;
    const N = parseFloat(tenure) * 12;

    if (!P || !R || !N) {
      setEmi(null);
      return;
    }

    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => navigate('/'), 400); // Navigate after animation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-200 to-cyan-200 px-4 py-8 relative">

      {/* Close Button at top-left of screen */}
      <button
        onClick={handleClose}
        className="fixed top-4 left-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-50"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
          >
            <div className="bg-black p-8 rounded-lg shadow-xl relative">
              
              {/* Company Name */}
              <h1 className="text-3xl font-bold text-yellow-600 text-center mb-1 tracking-wide">
                Fincopx
              </h1>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                EMI Calculator
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Enter loan amount"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Interest Rate  (%)</label>
                  <input
                    type="number"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Annual interest rate"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Tenure (Years)</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Loan tenure in years"
                  />
                </div>
              </div>

              <div className='flex flex-col'>

          <Link
        to="/terms"
        className="text-blue-600 underline hover:text-blue-800 transition text-xs mt-3 pb-1.5"
        >
      Read Terms & Conditions &copy; 
      </Link>
              <button
                onClick={calculateEMI}
                className="mt-1 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded transition"
                >
                Calculate EMI
              </button>
                </div>

              {emi && (
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-pink-50">Estimated EMI: ₹{emi}</h3>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
