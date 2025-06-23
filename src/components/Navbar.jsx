import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-[#EAEFEF] p-5 text-xl font-bold flex justify-between items-center bg-black">
      {/* Logo */}
      <div className="text-2xl font-extrabold">{"< PORTFOLIO />"}</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black px-5 py-4 flex flex-col space-y-4 text-lg md:hidden z-50">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:underline">Portfolio</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:underline">Skills</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</Link>
        </div>
      )}
    </nav>
  );
}
