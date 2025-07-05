import React from "react";

const Header = ({ menuOpen, setMenuOpen }) => (
  <>
    {/* Top Fixed Transparent Header */}
    <header className="pointer-events-auto fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <img
          className="w-20 sm:w-24 h-auto"
          src="/images/aman&garima.png"
          alt="Logo"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-6 text-white text-sm tracking-wide font-serif">
        {["Home", "About", "Functions", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-[#e0c070] transition duration-200"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Icon */}
      <button
        className="sm:hidden text-white text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>

    {/* Mobile Dropdown Menu */}
    {menuOpen && (
      <div className="sm:hidden fixed top-[70px] left-0 w-full z-40 text-white text-base font-serif flex flex-col items-center py-6 gap-5 shadow-lg border-t border-yellow-100">
        {["Home", "About", "Functions", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#e0c070] transition duration-200 text-lg"
          >
            {item}
          </a>
        ))}
      </div>
    )}
  </>
);

export default Header;