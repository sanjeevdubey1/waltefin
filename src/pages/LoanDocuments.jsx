import React from 'react';
import { Download, Printer } from 'lucide-react';

const LoanDocuments = () => {
  const sections = [
    {
      title: 'Home Loan Documents',
      description:
        'To apply for a home loan in India, banks and NBFCs require identity, income, and property ownership documents. These verify your eligibility and repayment capacity.',
      documents: [
        'Duly filled Loan Application Form',
        'Passport size photographs',
        'Aadhaar Card and PAN Card',
        'Residence Proof (Utility Bill, Rent Agreement, etc.)',
        'Last 6 months’ Bank Statement',
        'Property Sale Agreement or Allotment Letter',
        'NOC from builder or society',
        'Legal and valuation report of the property',
      ],
    },
    {
      title: 'Business Loan Documents',
      description:
        'Business loan documents help lenders assess your company’s financial health, tax compliance, and repayment capability. These include registration, ITR, and statements.',
      documents: [
        'Business Registration Certificate / GST Registration',
        'PAN Card (Individual & Business)',
        'KYC Documents (Aadhaar, PAN)',
        'Bank Statements for last 12 months',
        'ITR with computation for last 2–3 years',
        'Profit & Loss Statement and Balance Sheet (CA certified)',
        'Office Address Proof / Rent Agreement',
        'Partnership Deed or MOA/AOA (if applicable)',
      ],
    },
    {
      title: 'Loan Against Property (LAP) Documents',
      description:
        'LAP documentation involves identity proof and property-related paperwork to evaluate ownership and mortgage eligibility against property value.',
      documents: [
        'PAN & Aadhaar Card',
        'Ownership Proof of Property (Title Deed)',
        'Latest Property Tax Receipt',
        'Property Valuation Report',
        'Last 6 months Bank Statement',
        'ITR for 2–3 years',
        'Salary Slip or Business Income Proof',
      ],
    },
    {
      title: 'Salaried Individual Documents',
      description:
        'Salaried applicants must submit income proof, identity documents, and employment records to confirm their loan eligibility and stability.',
      documents: [
        'PAN Card and Aadhaar Card',
        'Employee ID Card',
        'Last 3 months Salary Slips',
        'Form 16 or ITR of last 2 years',
        'Last 6 months Bank Statements (salary account)',
        'Appointment Letter or Job Confirmation',
        'Address Proof (Utility Bills, Rent Agreement)',
      ],
    },
    {
      title: 'Self-Employed / Business Owner Documents',
      description:
        'For self-employed applicants, financials like ITR and profit/loss statements along with registration proof are critical to loan approval.',
      documents: [
        'PAN & Aadhaar Card',
        'Business Registration Documents (GST, MSME, etc.)',
        'ITR of last 2–3 years',
        'Audited Balance Sheet and Profit & Loss Statement',
        'Bank Statements of current account (last 12 months)',
        'Shop Act or Trade License',
        'Office/Shop Ownership or Rent Agreement',
      ],
    },
  ];

  const handlePrint = (title) => {
    const printContents = document.getElementById(title).innerHTML;
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write('<html><head><title>Print Documents</title>');
    newWindow.document.write(`
      <style>
        body { font-family: Arial; padding: 20px; }
        h2 { color: #16a34a; }
        ul { margin-top: 10px; }
        li { margin-bottom: 5px; }
      </style>
    `);
    newWindow.document.write('</head><body>');
    newWindow.document.write(printContents);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  const handleDownload = (title) => {
    const content = document.getElementById(title).innerHTML;
    const blob = new Blob(
      [
        `<html><head><title>${title}</title></head><body>${content}</body></html>`,
      ],
      { type: 'text/html' }
    );
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.html`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 sm:p-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Required Documents for Loan Applications
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => {
          const sectionId = section.title.replace(/\s/g, '');
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border-t-4 border-green-500 p-6 relative"
            >
              <div id={sectionId}>
                <h2 className="text-xl font-bold text-green-700 mb-2">{section.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{section.description}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                  {section.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5 print:hidden">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
                  onClick={() => handlePrint(sectionId)}
                >
                  <Printer size={16} />
                  Print
                </button>
                <button
                  className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
                  onClick={() => handleDownload(sectionId)}
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoanDocuments;
