import React from 'react'
import HDFC from '../assets/hdfc.jpg';
import KOTAK from '../assets/kotak.jpg'
import IDFC from '../assets/idfc.jpg';
import IDBI from '../assets/idbi.jpg';
import ANDRO from '../assets/andro.png';
const Partners = () => {


      const bankLogos = [
        { name: 'HDFC', url: HDFC },
        { name: 'Kotak', url: KOTAK },
        { name: 'IDFC', url: IDFC },
        { name: 'IDBI', url: IDBI },
      ];


  return (
    <>
        {/* Banks Logos Section */}
        <section className="py-10 ">
          <h2 className="text-center text-3xl font-semibold mb-8">We are Partner with all the Banks</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 px-6">
            {bankLogos.map((bank) => (
              <img
              key={bank.name}
              src={bank.url}
              alt={bank.name}
              className="h-16 object-contain hover:grayscale-0 transition duration-300 rounded-full "
              title={bank.name}
              />
            ))}
          </div>
        </section>
  
        {/* Channel Partner Section */}
        <section className="py-10  px-6">
          <h2 className="text-center text-3xl font-semibold mb-4">Our Channel Partner</h2>
          <div className="flex flex-col items-center">
            <img
              src={ANDRO}
              alt="Andromeda"
              className="h-20 mb-4 object-contain"
              />
            <p className="text-white max-w-xl text-center">
              We are proud to be associated with <span className="font-semibold text-yellow-600">Andromeda</span>,
              India’s largest loan distributor, enabling access to top banks and unmatched loan deals.
            </p>
          </div>
        </section>
    </>
  )
}

export default Partners
