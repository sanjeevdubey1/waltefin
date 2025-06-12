import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react'; // Import the X icon

const TermsAndServices = () => {
  const navigate = useNavigate();

  return (
    <div className="relative  mx-auto p-6 text-sm text-white bg-black px-4 py-2  flex items-center justify-center">
      {/* Close Button using Lucide Icon */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-500 hover:text-red-500"
        title="Close"
      >
        <X className="w-6 h-6" />
      </button>

  <div className="max-w-7xl mx-auto p-6 text-white ">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Use of Information from Forms</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>All information provided by users through forms on this website, including contact details and loan application information, is used solely for the purpose of contacting you and processing your loan requests.</li>
          <li>We do <strong>not</strong> share your personal information with any third parties without your explicit consent, except where required by law or for loan processing.</li>
          <li>Submission of any form on this site <strong>does not guarantee</strong> loan approval.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. EMI Calculator Disclaimer</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>The EMI Calculator on this website provides only a <strong>rough estimate</strong> of your monthly installment amounts.</li>
          <li>The actual EMI may vary based on multiple factors including your credit profile, loan amount, interest rates, and lender policies.</li>
          <li>We <strong>do not guarantee</strong> the accuracy or reliability of the EMI figures shown.</li>
          <li>For precise EMI details, please contact the respective bank or lending institution directly.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Loan Approval and Processing</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Loan approval decisions are solely made by the respective banks or financial institutions.</li>
          <li>We act only as a facilitator and do <strong>not guarantee</strong> loan approval or disbursal.</li>
          <li>All loans are subject to the lender’s verification process, documentation, and policies.</li>
          <li>The user agrees to comply with all terms set forth by the lenders.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>The website and its owners shall not be held responsible for any losses or damages arising from the use of this website or its services.</li>
          <li>We do not take responsibility for any financial or legal consequences due to misinformation or misunderstandings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Contact Consent</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>By submitting your contact details, you consent to receive communications via phone, email, or SMS related to your loan application or services offered on this website.</li>
          <li>You may opt-out of marketing communications at any time.</li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default TermsAndServices;
