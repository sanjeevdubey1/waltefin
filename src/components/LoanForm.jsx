import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
const phoneRegex = /^[6-9]\d{9}$/;
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharRegex = /^\d{12}$/;

export const LoanForm = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    loanType: '',
    amount: '',
    occupation: '',
    pan: '',
    aadhar: '',
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!phoneRegex.test(formData.phone)) errs.phone = 'Invalid phone number';
    if (!(formData.age >= 18 && formData.age <= 100)) errs.age = 'Age must be between 18 and 100';
    if (!formData.loanType) errs.loanType = 'Select a loan type';
    if (!formData.amount || formData.amount <= 0) errs.amount = 'Enter a valid loan amount';
    if (!formData.occupation.trim()) errs.occupation = 'Occupation is required';
    if (!panRegex.test(formData.pan.toUpperCase())) errs.pan = 'Invalid PAN format';
    if (formData.aadhar && !aadharRegex.test(formData.aadhar)) errs.aadhar = 'Invalid Aadhar number';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pan') {
      setFormData({ ...formData, [name]: value.toUpperCase() });
    } else if (name === 'phone' || name === 'aadhar') {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'age' || name === 'amount') {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/movweakv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setVisible(false);  // Close the form immediately
        setSubmitted(true); // Show success screen
        setFormData({
          name: '',
          phone: '',
          age: '',
          loanType: '',
          amount: '',
          occupation: '',
          pan: '',
          aadhar: '',
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      navigate('/');
    }, 400);
  };

  const handleSuccessClose = () => {
    setSubmitted(false);
    navigate('/');
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-100 via-indigo-50 to-white px-4 py-2 relative flex items-center justify-center">

      {/* Close button for form */}
      {visible && (
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-50"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      )}

      <AnimatePresence>
        {/* The form */}
        {visible && (
          <motion.div
            className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-6 h-[90vh] flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
          >
            <div>
              <h1 className="text-3xl font-bold text-yellow-600 text-center mb-1 tracking-wide">Fincopx</h1>
              <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">Loan Enquiry Form</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow"
              noValidate
            >
              {/* Inputs... same as before */}
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-sm mb-1" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm mb-1" htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  placeholder="Your age (18-100)"
                  required
                  min={18}
                  max={100}
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.age ? 'border-red-500' : ''}`}
                />
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
              </div>

              {/* Loan Type */}
              <div>
                <label className="block text-sm mb-1" htmlFor="loanType">Loan Type</label>
                <select
                  id="loanType"
                  name="loanType"
                  required
                  value={formData.loanType}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.loanType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Business Loan">Business Loan</option>
                  <option value="Property Loan">Property Loan</option>
                </select>
                {errors.loanType && <p className="text-red-500 text-xs mt-1">{errors.loanType}</p>}
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-sm mb-1" htmlFor="amount">Loan Amount</label>
                <input
                  id="amount"
                  type="number"
                  name="amount"
                  placeholder="Enter loan amount"
                  required
                  min={0}
                  value={formData.amount}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.amount ? 'border-red-500' : ''}`}
                />
                {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
              </div>

             {/* Occupation (Dropdown) */}
<div>
  <label className="block text-sm mb-1" htmlFor="occupation">Occupation</label>
  <select
    id="occupation"
    name="occupation"
    required
    value={formData.occupation}
    onChange={handleChange}
    className={`w-full px-3 py-2 border rounded text-sm ${errors.occupation ? 'border-red-500' : ''}`}
  >
    <option value="">Select occupation</option>
    <option value="Salaried">Salaried</option>
    <option value="Business">Business</option>
    <option value="Others">Others</option>
  </select>
  {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>}
</div>


              {/* PAN Number */}
              <div>
                <label className="block text-sm mb-1" htmlFor="pan">PAN Number (Optional)</label>
                <input
                  id="pan"
                  type="text"
                  name="pan"
                  placeholder="ABCDE1234F"
                  maxLength={10}
                 
                  value={formData.pan}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm uppercase ${errors.pan ? 'border-red-500' : ''}`}
                />
                {errors.pan && <p className="text-red-500 text-xs mt-1">{errors.pan}</p>}
              </div>

              {/* Aadhar Number */}
              <div>
                <label className="block text-sm mb-1" htmlFor="aadhar">Aadhar Number (Optional)</label>
                <input
                  id="aadhar"
                  type="text"
                  name="aadhar"
                  placeholder="12-digit Aadhar number"
                  maxLength={12}
                  value={formData.aadhar}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.aadhar ? 'border-red-500' : ''}`}
                />
                {errors.aadhar && <p className="text-red-500 text-xs mt-1">{errors.aadhar}</p>}
              </div>
            </form>

            {/* Submit button */}
            <div className="flex justify-center flex-col  align-middle mt-4">
                <Link
        to="/terms"
        className="text-blue-600 underline hover:text-blue-800 transition text-xs pb-1"
      >
      Read Terms & Conditions &copy; 
      </Link>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className={`bg-yellow-500 text-black px-8 py-2 rounded font-semibold hover:bg-yellow-600 transition text-sm flex items-center justify-center gap-2 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                Submit Enquiry
              </button>
        
     
            </div>
          </motion.div>
        )}

        {/* Success screen */}
        {submitted && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Thank you!</h3>
              <p className="mb-6">Your form is submitted successfully.</p>
              <button
                onClick={handleSuccessClose}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded"
              >
                Close
              </button>
              <link rel="stylesheet" href="/termc" title='Tearm & condition' />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
