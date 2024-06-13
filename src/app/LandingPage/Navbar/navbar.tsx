'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          <div className="flex space-x-10">
            <Link href="/" legacyBehavior>
              <a className="text-black text-[20px] relative">Solutions</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-black text-[20px] relative">About Us</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-black text-[20px] relative">How It Works</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-black {
          transition: transform 0.3s ease;
        }

        .text-black::after {
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

        .text-black:hover::after {
          transform: scaleX(1);
        }

        .text-black:hover {
          transform: scale(1.1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
