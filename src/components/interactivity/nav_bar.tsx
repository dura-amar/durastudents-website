"use client"; // ← enables client-side interactivity
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="DSS Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-semibold">Dura Students Society</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 border rounded"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#programs" className="hover:text-blue-600">
              Programs
            </a>
          </li>
          <li>
            <a href="#impact" className="hover:text-blue-600">
              Impact
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:text-blue-600">
              Resources
            </a>
          </li>
          <li>
            <a href="#news" className="hover:text-blue-600">
              News
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-blue-600">
              Team
            </a>
          </li>
          <li>
            <a href="#donate" className="hover:text-blue-600">
              Donate
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t">
          <ul className="px-4 py-3 space-y-2">
            <li>
              <a href="#about" className="block py-1">
                About
              </a>
            </li>
            <li>
              <a href="#programs" className="block py-1">
                Programs
              </a>
            </li>
            <li>
              <a href="#impact" className="block py-1">
                Impact
              </a>
            </li>
            <li>
              <a href="#resources" className="block py-1">
                Resources
              </a>
            </li>
            <li>
              <a href="#news" className="block py-1">
                News
              </a>
            </li>
            <li>
              <a href="#team" className="block py-1">
                Team
              </a>
            </li>
            <li>
              <a href="#donate" className="block py-1">
                Donate
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-1">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
