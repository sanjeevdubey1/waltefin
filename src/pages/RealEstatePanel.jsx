import React, { useState, useEffect, useMemo } from "react";
import {
  MapPin,
  IndianRupee,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import prop1 from "../assets/prop1.jpeg";
import vinayak1 from "../assets/vinayak1.jpeg";
import vinayak2 from "../assets/vinayak2.jpeg";
import vinayak3 from "../assets/vinayak3.jpeg";
import vinayak4 from "../assets/vinayak4.jpeg";
import vinayak5 from "../assets/vinayak5.jpeg";
import vinayak6 from "../assets/vinayak6.jpeg";

Modal.setAppElement("#root");

const allProperties = [
  {
    id: 1,
    title: "Vinayak Green 1 BHK Flat for Sale in Rasayani",
    price: "21,00,000",
    location: "Rasayani",
    bhk: "1 BHK",
    images: [prop1, vinayak1, vinayak2, vinayak3, vinayak4, vinayak5, vinayak6],
  },
];

export default function RealEstatePanel() {
  const [currentImages, setCurrentImages] = useState(allProperties.map(() => 0));
  const [filters, setFilters] = useState({ location: "All", bhk: "All" });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((curr, i) => (curr + 1) % allProperties[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSlide = (idx, dir) => {
    setCurrentImages((prev) => {
      const next = [...prev];
      const len = allProperties[idx].images.length;
      next[idx] = dir === "prev"
        ? (next[idx] - 1 + len) % len
        : (next[idx] + 1) % len;
      return next;
    });
  };

  const swipeHandlersList = allProperties.map((_, idx) =>
    useSwipeable({
      onSwipedLeft: () => handleSlide(idx, "next"),
      onSwipedRight: () => handleSlide(idx, "prev"),
      trackMouse: true,
      preventScrollOnSwipe: true,
    })
  );

  const filtered = useMemo(() => {
    return allProperties.filter((p) => {
      const loc = filters.location === "All" || p.location === filters.location;
      const bhk = filters.bhk === "All" || p.bhk === filters.bhk;
      return loc && bhk;
    });
  }, [filters]);

  const openImageModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setIsImageModalOpen(true);
  };

  const handleModalImageChange = (direction) => {
    const len = modalImages.length;
    setModalIndex((prev) =>
      direction === "prev"
        ? (prev - 1 + len) % len
        : (prev + 1) % len
    );
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <header className="sticky top-0 bg-black z-10 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-white">Affordable Flats in Navi Mumbai, Panvel</h1>
              <p className="text-xs sm:text-sm text-gray-400">Browse budget-friendly homes available now</p>
            </div>
          </div>
        </header>

        <section className="flex flex-wrap gap-4 mb-6 mt-4 bg-black shadow-amber-300 p-4 rounded shadow-sm">
          <label className="text-sm font-medium text-white">Location:</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
            className="border rounded px-3 py-2 text-white bg-black"
          >
            <option value="All">All</option>
            <option value="Panvel">Panvel</option>
            <option value="Rasayani">Rasayani</option>
          </select>

          <label className="text-sm font-medium text-white">BHK:</label>
          <select
            value={filters.bhk}
            onChange={(e) => setFilters((f) => ({ ...f, bhk: e.target.value }))}
            className="border rounded px-3 py-2 text-white bg-black"
          >
            <option value="All">All</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
          </select>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property, idx) => {
            const swipeHandlers = swipeHandlersList[idx];
            return (
              <article
                key={property.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div
                  className="relative h-48 w-full cursor-pointer"
                  onClick={() => openImageModal(property.images, currentImages[idx])}
                  {...swipeHandlers}
                >
                  <img
                    src={property.images[currentImages[idx] % property.images.length]}
                    alt={`${property.title} exterior view`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSlide(idx, "prev");
                    }}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-1"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSlide(idx, "next");
                    }}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-1"
                    aria-label="Next Image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="p-4 text-gray-800">
                  <h2 className="text-lg font-bold">{property.title}</h2>
                  <p className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" /> {property.location}
                  </p>
                  <p className="flex items-center text-green-700 font-medium mt-1">
                    <IndianRupee className="w-4 h-4 mr-1" /> {property.price}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => navigate("/apply-now")}
                      className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Apply Now
                    </button>
                    <a
                      href="tel:+919372347959"
                      className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
                    >
                      <PhoneCall size={16} /> Call
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {filtered.length === 0 && (
          <p className="text-center text-gray-300 mt-8">
            No properties found with selected filters.
          </p>
        )}

        {/* Image Modal */}
        <Modal
          isOpen={isImageModalOpen}
          onRequestClose={() => setIsImageModalOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/90 p-2 sm:p-4"
          overlayClassName="fixed inset-0 bg-black/80"
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 text-white bg-white/20 p-2 rounded-full hover:bg-white/30"
            >
              <X size={24} />
            </button>

            <img
              src={modalImages[modalIndex]}
              alt={`Property Image ${modalIndex + 1}`}
              className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded"
            />

            <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50">
              <button
                onClick={() => handleModalImageChange("prev")}
                className="bg-white/30 text-white rounded-full p-2 hover:bg-white/40"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50">
              <button
                onClick={() => handleModalImageChange("next")}
                className="bg-white/30 text-white rounded-full p-2 hover:bg-white/40"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </Modal>
      </main>
    </div>
  );
}
