import React, { useState, useEffect } from "react";
import {
  MapPin,
  IndianRupee,
  Eye,
  X,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Link
} from "lucide-react";
import { useSwipeable } from "react-swipeable";

// Local image imports
import prop1 from "../assets/prop1.jpeg";
import prop2 from "../assets/prop2.jpeg";
import prop3 from "../assets/prop3.jpeg";

const properties = [
  {
    id: 1,
    slug: "vinayak-green-1bhk",
    title: "Vinayak Green 1 BHK",
    price: "28,00,000",
    location: "Panvel, Navi Mumbai",
    images: [prop1, prop2, prop3],
    description: "Spacious 1 BHK flat with garden view, perfect for families.",
  },
  {
    id: 2,
    slug: "ocean-view-2bhk",
    title: "Ocean View 2 BHK",
    price: "52,00,000",
    location: "Versova, Mumbai",
    images: ["/images/property2-1.jpg", "/images/property2-2.jpg"],
    description: "Sea-facing 2 BHK with a large balcony and amenities.",
  },
];

const RealEstatePanel = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImages, setCurrentImages] = useState(
    properties.map(() => 0)
  );

  // Autoplay image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map(
          (curr, index) => (curr + 1) % properties[index].images.length
        )
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSlide = (propertyIndex, direction) => {
    setCurrentImages((prev) => {
      const updated = [...prev];
      const total = properties[propertyIndex].images.length;
      updated[propertyIndex] =
        direction === "prev"
          ? (updated[propertyIndex] - 1 + total) % total
          : (updated[propertyIndex] + 1) % total;
      return updated;
    });
  };

  const handleDotClick = (propertyIndex, imageIndex) => {
    setCurrentImages((prev) => {
      const updated = [...prev];
      updated[propertyIndex] = imageIndex;
      return updated;
    });
  };

  const getSwipeHandlers = (propertyIndex) =>
    useSwipeable({
      onSwipedLeft: () => handleSlide(propertyIndex, "next"),
      onSwipedRight: () => handleSlide(propertyIndex, "prev"),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
    });

  return (
    <div className="pt-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-50">
        Featured Listings
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => {
          const swipeHandlers = getSwipeHandlers(index);
          return (
            <div
              key={property.id}
              className="bg-gray-300 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Image Slider */}
              <div
                className="relative h-52 w-full overflow-hidden rounded-t-2xl"
                {...swipeHandlers}
              >
                <img
                  src={property.images[currentImages[index]]}
                  alt={property.title}
                  className="w-full h-52 object-cover"
                />
                <button
                  onClick={() => handleSlide(index, "prev")}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1"
                >
                  <ChevronLeft  size={20} />
                </button>
                <button
                  onClick={() => handleSlide(index, "next")}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-2 w-full flex justify-center gap-1">
                  {property.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(index, i)}
                      className={`w-2 h-2 rounded-full ${
                        i === currentImages[index]
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-4 space-y-2 text-gray-800">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </p>
                <p className="flex items-center font-medium text-green-700">
                  <IndianRupee className="w-4 h-4 mr-1" />
                  {property.price}
                </p>
<div className="flex items-center gap-3 mt-3">
  <Link
    to="/apply-now"
    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
  >
     Apply Now
  </Link>

  <a
    href="tel:+919967689088"
    className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-xl shadow-md hover:bg-green-600 transition"
  >
    <PhoneCall size={18} />
    Call
  </a>
</div>


              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-100 rounded-2xl shadow-lg max-w-md w-full p-8 relative text-gray-800">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Simple Image in Modal (can upgrade to full slider later) */}
            <div className="relative h-48 w-full mb-4 overflow-hidden">
              <img
                src={selectedProperty.images[0]}
                alt={selectedProperty.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              {selectedProperty.title}
            </h3>
            <p className="mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {selectedProperty.location}
            </p>
            <p className="mb-2 flex items-center text-green-700 font-medium">
              <IndianRupee className="w-4 h-4 mr-1" />
              {selectedProperty.price}
            </p>
            <p className="text-gray-600">{selectedProperty.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstatePanel;
