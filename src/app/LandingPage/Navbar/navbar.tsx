'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`bg-[#E6E4E5] fixed top-0 w-full h-[80px] flex items-center ${
        scrolled ? 'shadow-lg' : ''
      } z-[1000]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex gap-2 items-center">
              <Image
                className="h-8 w-8 text-black rounded-[50px]"
                src="/images/Logo.png"
                width={50}
                height={50}
                alt="Logo"
              />
              <span className="text-lg text-black">Health Guardian</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link href="#solutions" legacyBehavior>
              <a className="line text-black text-[20px] relative">Solutions</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="line text-black text-[20px] relative">About Us</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="line text-black text-[20px] relative">
                How It Works
              </a>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-16 right-0 w-full bg-[#E6E4E5] shadow-lg z-[999] transition-transform transform origin-top ${
          menuOpen ? 'animate-menu-slide-in' : 'animate-menu-slide-out'
        }`}
      >
        <div className="flex flex-col items-end px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#solutions" legacyBehavior>
            <a
              className="block text-black text-[20px] relative w-[90px] pt-2 line"
              onClick={toggleMenu}
            >
              Solutions
            </a>
          </Link>
          <Link href="/" legacyBehavior>
            <a
              className="block text-black text-[20px] relative w-[90px] pt-2 line"
              onClick={toggleMenu}
            >
              About Us
            </a>
          </Link>
          <Link href="/" legacyBehavior>
            <a
              className="block text-black text-[20px] relative w-[130px] pt-2 line"
              onClick={toggleMenu}
            >
              How It Works
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .line {
          transition: transform 0.3s ease;
        }

        .line::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #063b3f;
          transform-origin: right;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .line:hover::after {
          transform: scaleX(1);
        }

        .line:hover {
          transform: scale(1.1);
        }

        @keyframes menu-slide-in {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes menu-slide-out {
          from {
            transform: scaleY(1);
          }
          to {
            transform: scaleY(0);
          }
        }

        .animate-menu-slide-in {
          animation: menu-slide-in 0.3s ease-out forwards;
        }

        .animate-menu-slide-out {
          animation: menu-slide-out 0.3s ease-in forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
