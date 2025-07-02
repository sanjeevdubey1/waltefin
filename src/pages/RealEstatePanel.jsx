import React, { useState, useEffect, useMemo } from "react";
import {
  MapPin,
  IndianRupee,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Building2,
  Menu,
  X,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

import prop1 from "../assets/prop1.jpeg";
import prop2 from "../assets/prop2.jpeg";
import prop3 from "../assets/prop3.jpeg";

const allProperties = [
  {
    id: 1,
    title: "Vinayak Green 1 BHK",
    price: "23,00,000",
    location: "Rasayani",
    bhk: "1 BHK",
    images: [prop1, prop2, prop3],
  },
  {
    id: 2,
    title: "Ocean View 2 BHK",
    price: "52,00,000",
    location: "Panvel",
    bhk: "2 BHK",
    images: [prop2, prop3],
  },
  {
    id: 3,
    title: "Rasayani 2 BHK Prime",
    price: "45,00,000",
    location: "Rasayani",
    bhk: "2 BHK",
    images: [prop2],
  },
  {
    id: 4,
    title: "Panvel 1 BHK Compact",
    price: "31,00,000",
    location: "Panvel",
    bhk: "1 BHK",
    images: [prop3],
  },
];

export default function RealEstatePanel() {
  const [currentImages, setCurrentImages] = useState(
    allProperties.map(() => 0)
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({ location: "All", bhk: "All" });

  const navigate = useNavigate();

  // Auto slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map(
          (curr, i) => (curr + 1) % allProperties[i].images.length
        )
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSlide = (idx, dir) => {
    setCurrentImages((prev) => {
      const next = [...prev];
      const len = allProperties[idx].images.length;
      next[idx] =
        dir === "prev"
          ? (next[idx] - 1 + len) % len
          : (next[idx] + 1) % len;
      return next;
    });
  };

  // ✅ Stable swipe handlers - must be called once per item only
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

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`fixed md:static z-50 bg-white border-r w-64 shadow-lg p-4 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-blue-600">Dubey Realty</span>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="text-black" />
          </button>
        </div>
        <nav className="space-y-3">
          <span className="flex items-center gap-3 text-gray-700 font-medium">
            <LayoutDashboard size={18} /> Dashboard
          </span>
          <span className="flex items-center gap-3 text-gray-700 font-medium">
            <Building2 size={18} /> Properties
          </span>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-black">Property Dashboard</h1>
            <p className="text-gray-500">Filter by location and BHK type</p>
          </div>
          <button
            className="md:hidden bg-blue-600 text-white p-2 rounded"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu />
          </button>
        </header>

        <section className="flex flex-wrap gap-4 mb-6">
          <select
            value={filters.location}
            onChange={(e) =>
              setFilters((f) => ({ ...f, location: e.target.value }))
            }
            className="bg-white border rounded px-4 py-2 shadow-sm text-black"
          >
            <option value="All">All Locations</option>
            <option value="Panvel">Panvel</option>
            <option value="Rasayani">Rasayani</option>
          </select>

          <select
            value={filters.bhk}
            onChange={(e) =>
              setFilters((f) => ({ ...f, bhk: e.target.value }))
            }
            className="bg-white border rounded px-4 py-2 shadow-sm text-black"
          >
            <option value="All">All BHK Types</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
          </select>
        </section>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property) => {
            const originalIdx = allProperties.findIndex(
              (p) => p.id === property.id
            );
            const swipeHandlers = swipeHandlersList[originalIdx];

            return (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <div className="relative h-48 w-full" {...swipeHandlers}>
                  <img
                    src={
                      property.images[
                        currentImages[originalIdx] % property.images.length
                      ]
                    }
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleSlide(originalIdx, "prev")}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 rounded-full p-1"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => handleSlide(originalIdx, "next")}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 rounded-full p-1"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="p-4 text-gray-800">
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" /> {property.location}
                  </p>
                  <p className="flex items-center mt-1 font-medium text-green-700">
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
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-gray-500 col-span-full">
              No properties match your filters.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
