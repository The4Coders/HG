/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';

const Footer: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '100px',
      duration: 1500,
      delay: 200,
      reset: true,
    });

    sr.reveal('.footer-logo', { delay: 200 });
    sr.reveal('.footer-text', { delay: 400 });
    sr.reveal('.footer-button', { delay: 600 });
    sr.reveal('.footer-info', { delay: 800 });
    sr.reveal('.footer-learn', { delay: 1000 });
    sr.reveal('.footer-community', { delay: 1200 });
    sr.reveal('.footer-stay', { delay: 1400 });
    sr.reveal('.footer-icons', { delay: 1600 });
    sr.reveal('.footer-copyright', { delay: 1800 });
  }, []);

  return (
    <footer className="bg-[#E6E4E5] py-16">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start pt-8">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0 footer-logo">
          <div className="flex flex-row items-center gap-4 h-auto mb-6">
            <Image
              src="/images/Logo.png"
              alt="logo"
              className="rounded-[50px]"
              width={70}
              height={70}
            />
            <h2 className="uppercase text-xl font-bold">Health Guardian</h2>
          </div>
          <p className="text-gray-600 mb-4 footer-text">
            Your Voice Matters, And Early Birds Get The Opportunity To Provide
            Feedback And Influence
          </p>
          <button className="bg-[#063b3f] hover:bg-[#045357] transition duration-300 hover:shadow-lg hover:translate-x-4 text-white px-6 py-2 rounded-full moving-wave-button footer-button">
            Book Consultation
          </button>
        </div>
        <div className="w-auto mb-6 lg:mb-0 footer-info">
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="effect">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">
                Terms & Condition
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-auto mb-6 lg:mb-0 footer-learn">
          <h3 className="text-lg font-semibold mb-4">Learn</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="effect">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">
                Become Member
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">
                Health Calculator
              </a>
            </li>
          </ul>
        </div>
        <div className="w-auto mb-6 lg:mb-0 footer-community">
          <h3 className="text-lg font-semibold mb-4">Community</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="effect">
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="w-auto mb-6 lg:mb-0 footer-stay">
          <h3 className="text-lg font-semibold mb-4">Stay with Us</h3>
          <ul className="text-gray-600 mb-4">
            <li className="mb-2">
              <a href="" className="effect">
                info@join-health-guardian.com
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 footer-icons">
            <a href="#" className="w-[30px] h-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a href="#" className="w-[30px] h-[30px] rounded-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a href="#" className="w-[30px] h-[30px] rounded-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-8 footer-copyright">
        Design and content Copyright 2024© Health Guardian, The4Coders All
        rights reserved
      </div>
      <style jsx>{`
        .effect {
          position: relative;
          transition: transform 0.3s ease, text-decoration 0.3s ease;
        }

        .effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #063b3f;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .effect:hover::after {
          transform: scaleX(1);
        }

        .effect:hover {
          transform: scale(1.1);
        }

        .moving-wave-button {
          position: relative;
          overflow: hidden;
        }

        .moving-wave-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.05)
          );
          transform: skewX(-35deg);
          animation: movingWave 1.8s linear infinite;
        }

        @keyframes movingWave {
          0% {
            left: -120%;
          }
          100% {
            left: 120%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
