import React, { useEffect, useState } from "react";

const Header = ({ menuOpen, setMenuOpen }) => {
  const [darkOnInvitation, setDarkOnInvitation] = useState(false);

  useEffect(() => {
    const invitationSection = document.getElementById("invitation");
    if (!invitationSection) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setDarkOnInvitation(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Adjust as needed
      }
    );
    observer.observe(invitationSection);
    return () => observer.disconnect();
  }, []);

  const navTextClass = darkOnInvitation ? "text-[#4a341f]" : "text-white";
  const iconTextClass = darkOnInvitation ? "text-[#4a341f]" : "text-white";

  return (
    <>
      {/* Top Fixed Transparent Header */}
      <header className={`pointer-events-auto fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md flex items-center justify-between px-4 py-2`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            className="w-20 sm:w-24 h-auto"
            src="/images/aman&garima.png"
            alt="Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden sm:flex gap-6 ${navTextClass} text-sm tracking-wide font-serif`}>
          <a href="#hero" className="hover:text-[#e0c070] transition duration-200">Home</a>
          <a href="#timeline" className="hover:text-[#e0c070] transition duration-200">Journey</a>
          <a href="#invitation" className="hover:text-[#e0c070] transition duration-200">Invitation</a>
          <a href="#" className="hover:text-[#e0c070] transition duration-200">Contact</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className={`sm:hidden ${iconTextClass} text-2xl focus:outline-none`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`sm:hidden fixed top-[70px] left-0 w-full z-40 ${navTextClass} text-base font-serif flex flex-col items-center py-6 gap-5 shadow-lg border-t border-yellow-100`}>
          <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-[#e0c070] transition duration-200 text-lg">Home</a>
          <a href="#timeline" onClick={() => setMenuOpen(false)} className="hover:text-[#e0c070] transition duration-200 text-lg">Journey</a>
          <a href="#invitation" onClick={() => setMenuOpen(false)} className="hover:text-[#e0c070] transition duration-200 text-lg">Invitation</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#e0c070] transition duration-200 text-lg">Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;