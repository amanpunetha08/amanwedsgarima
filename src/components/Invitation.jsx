import React, { useState, useEffect } from "react";

export const Invitation = () => {
  const photos = [
    "/textures/save_the_date.jpg",
    "/textures/invitation.jpg",
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const goToPhoto = (index) => setCurrentPhoto(index);

  return (
    <section
      id="invitation"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-[#f8f5ef] py-16 px-4 sm:px-8"
    >
      {/* Section Header */}
      <h2 className="text-center text-6xl sm:text-8xl font-cursive text-[#a47e3b] mb-12 tracking-wide">
        Invitation
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl">
        {/* LEFT SIDE — Image Slideshow */}
        <div
          className="relative flex items-center justify-center overflow-hidden rounded-3xl shadow-xl w-full md:w-1/2"
          style={{
            aspectRatio: "1080 / 1530",
            maxHeight: "90vh",
          }}
        >
          {/* Smooth fade transition */}
          <div className="absolute inset-0">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Wedding ${index + 1}`}
                className={`absolute inset-0 object-contain w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentPhoto ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPhoto === index
                    ? "bg-[#a47e3b] scale-125"
                    : "bg-[#e5c07b] opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — Invitation Text */}
        <div
          className="flex flex-col items-center justify-center text-center px-8 py-6 rounded-3xl border-4 border-[#d4af37] bg-white/80 shadow-lg backdrop-blur-sm w-full md:w-1/2"
          style={{
            aspectRatio: "1080 / 1530",
            maxHeight: "90vh",
          }}
        >
          <h2 className="text-5xl font-cursive text-[#a47e3b] mb-4">
            Aman <span className="text-[#4a341f]">&</span> Garima
          </h2>

          <p className="text-[#4a341f] italic font-serif text-lg mb-3">
            Together with our families,
          </p>

          <p className="text-[#4a341f] text-base mb-4 leading-relaxed">
            We joyfully invite you to share in our happiness<br />
            as we celebrate the beginning of our forever.
          </p>

          <div className="w-20 border-t-2 border-[#a47e3b] mb-5"></div>

          <div className="text-[#a47e3b] font-semibold text-lg">
            <p>
              📅{" "}
              <span className="text-[#4a341f]">Thursday, 5th December 2025</span>
            </p>
            <p className="mt-2 leading-snug">
              📍 Samrath Garden, Kamalwaganja Rd,<br />
              near Gurukul School, Haldwani, Uttarakhand
            </p>
          </div>

          <div className="mt-5">
            <p className="text-[#4a341f] italic font-cursive text-base">
              Your presence will make our day even more special!
            </p>
          </div>

          {/* QR Code Section (Clickable) */}
          <div className="mt-6 flex flex-col items-center">
            <a
              href="https://maps.app.goo.gl/ogw9XBk4irNxuWCv9"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.app.goo.gl/ogw9XBk4irNxuWCv9"
                alt="Google Maps QR Code"
                className="w-32 h-32 rounded-md border border-[#e5c07b] shadow-md"
              />
            </a>
            <p className="text-sm text-[#4a341f] mt-2">Scan or click for location</p>
          </div>
        </div>
      </div>
    </section>
  );
};