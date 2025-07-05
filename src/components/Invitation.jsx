import React, { useState } from "react";

const invitationBg =
  "bg-gradient-to-br from-[#f5deb3] via-[#a47e3b] to-[#4a341f] border-4 border-[#e5c07b] shadow-2xl";

export const Invitation = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && number.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div id="invitation" className="flex flex-col items-center justify-center min-h-screen w-full">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-white/20 shadow-lg backdrop-blur-md"
        >
          <h2 className="text-3xl font-cursive text-[#a47e3b] mb-2">Enter Your Name & Number</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="px-4 py-2 rounded-lg border border-[#e5c07b] focus:outline-none focus:ring-2 focus:ring-[#a47e3b] text-lg bg-white/80"
            required
          />
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="WhatsApp Number (with country code, e.g. 919876543210)"
            className="px-4 py-2 rounded-lg border border-[#e5c07b] focus:outline-none focus:ring-2 focus:ring-[#a47e3b] text-lg bg-white/80"
            required
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 rounded-lg bg-[#a47e3b] text-white font-semibold shadow hover:bg-[#4a341f] transition"
          >
            See My Invitation
          </button>
        </form>
      ) : (
        <div
          className={`max-w-lg w-full p-10 rounded-3xl ${invitationBg} flex flex-col items-center animate-fade-in relative overflow-hidden shadow-2xl`}
          style={{ border: '6px double #a47e3b', background: 'rgba(255, 248, 225, 0.95)' }}
        >
          {/* Decorative Top Flourish */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-[-32px]">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 35 Q40 5 75 35" stroke="#a47e3b" strokeWidth="4" fill="none"/>
            </svg>
          </div>
          <h2 className="text-5xl font-cursive text-[#a47e3b] mb-2 text-center tracking-wide drop-shadow-lg">
            Aman <span className="text-[#4a341f]">&</span> Garima
          </h2>
          <div className="text-lg text-[#4a341f] mb-2 italic font-serif tracking-wide">Request the honor of your presence</div>
          <div className="w-16 border-t-2 border-[#a47e3b] mb-4"></div>
          <p className="text-2xl text-[#4a341f] mb-4 text-center font-cursive">
            Dear <span className="font-bold text-[#a47e3b]">{name}</span>,
          </p>
          <p className="text-lg text-[#4a341f] mb-2 text-center">
            You are cordially invited to celebrate the wedding of
            <br />
            <span className="font-bold text-[#a47e3b]">Aman & Garima</span>.
          </p>
          <div className="flex flex-col items-center my-4">
            <div className="flex items-center gap-2 text-[#a47e3b] text-lg font-semibold">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#a47e3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#a47e3b" strokeWidth="2"/></svg>
              5th December
            </div>
            <div className="flex items-center gap-2 text-[#a47e3b] text-lg font-semibold mt-2">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 10.5V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4.5" stroke="#a47e3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="10.5" width="18" height="8.5" rx="2" stroke="#a47e3b" strokeWidth="2"/></svg>
              Samrath Garden, Kamalwaganja Rd, near Gurukul school, Kamaluaganja, gaur, Haldwani, Uttarakhand 263139
            </div>
          </div>
          <div className="w-16 border-t-2 border-[#a47e3b] mt-4 mb-2"></div>
          <div className="mt-2 text-center text-[#4a341f] text-lg font-cursive italic">
            We look forward to sharing this special day with you!
          </div>
          {/* Decorative Bottom Flourish */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-32px]">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5 Q40 35 75 5" stroke="#a47e3b" strokeWidth="4" fill="none"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
