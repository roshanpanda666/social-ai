"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [menuOpen, setMenuOpen] = useState(false); // profile menu
  const menuRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900/50 via-gray-800/40 to-gray-900/50 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <span className="font-bold text-xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Social-ai
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-white/10">Home</Link>
            <Link href="/Post" className="px-3 py-2 rounded-lg hover:bg-white/10">Post</Link>
            <Link href="/Activity" className="px-3 py-2 rounded-lg hover:bg-white/10">Activity</Link>

            {/* Profile Avatar */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/10 hover:scale-105 transition"
              >
                <span className="text-sm text-white font-semibold">S</span>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-40 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg transition-all ${
                  menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <button
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-white/10"
                  onClick={() => alert("Logging out...")}
                >
                  <div className="text-red-400 text-center">Logout</div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/10"
            >
              <span className="text-xs text-white font-semibold">S</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="
    md:hidden
    bg-white/10
    backdrop-blur-2xl
    border-t border-white/20
    px-3 pt-3 pb-5
    rounded-b-2xl
    space-y-2
    shadow-[0_8px_30px_rgba(255,255,255,0.1)]
    transition-all
  ">
    <Link
      href="/"
      className="block px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
    >
      Home
    </Link>

    <Link
      href="/Post"
      className="block px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
    >
      Post
    </Link>

    <Link
      href="/Activity"
      className="block px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
    >
      Activity
    </Link>

    <button
      onClick={() => alert('Logging out...')}
      className="
        block w-full text-left px-3 py-2 rounded-lg
        bg-red-500/20 text-red-200
        hover:bg-red-500/30
        backdrop-blur-md
        transition-colors
      "
    >
      Logout
    </button>
  </div>
)}

    </nav>
  );
}
