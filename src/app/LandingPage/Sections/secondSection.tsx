"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from 'scrollreveal';

const SecondSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const dummyTexts = [
    'Your primary care physician may refer you to a dermatologist if they suspect or diagnose a skin',
    'you can schedule an appointment directly with a dermatologist without a referral',
    'Check your plan to see if dermatology services are covered and if you need',
    'Find a dermatologist who is qualified and suits your needs. Consider factors like location',
  ];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.left', {
      duration: 1500,
      origin: 'left',
      distance: '350px',
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal('.right', {
      duration: 1500,
      origin: 'right',
      distance: '350px',
      easing: 'ease-out',
      reset: true,
    });
  }, []);

  return (
    <div className="bg-[#E6E4E5] pt-24 pb-28" id="solutions">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-x-8 md:gap-x-24">
        <div className="w-full md:w-[600px] left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-500">
            Top-Quality{' '}
            <span className="text-[#063b3f] text-4xl md:text-6xl">Virtual Primary</span>{' '}
            Care Visits
          </h2>
          <p className="mt-6 text-gray-600 md:w-[510px] leading-[1.8]">
            Book A Virtual Care Visit, Chat Via Video On Your Smartphone, And
            Pick Up Your Prescription From Your Pharmacy. Our Advanced
            Technology Is Integrated With Most Major Health Insurances.
          </p>
          <ul className="mt-8 space-y-4 grid grid-cols-2">
            {[
              'Meet The Doctor You Want',
              'Get The Care You Want',
              'Get 24/7 Full Support',
              'Get The Best Health Services',
            ].map((text, index) => (
              <li
                key={index}
                className="flex flex-col items-start relative cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center">
                  <div className="bg-[#045357] p-1 mr-4 rounded-[5px]">
                    <i className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
                      </svg>
                    </i>
                  </div>
                  <span className="text-black text-sm md:text-lg w-[121.5px] leading-4">
                    {text}
                  </span>
                </div>
                {expandedItem === index && (
                  <div className="dummy-text mt-2 bg-[#E6E4E5] p-2 rounded-lg shadow-md text-gray-600 text-sm md:text-base w-[250px]">
                    <p>{dummyTexts[index]}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link href="/tele">
            <button
              className="bg-[#063b3f] text-white text-sm md:text-[20px] mt-8 md:mt-12 py-2 px-6 rounded-[50px] hover:bg-[#045357] transition duration-300 h-[60px] md:w-56 hover:transform hover:translate-x-4 hover:shadow-lg moving-wave-button"
            >
              See Doctors
            </button>
          </Link>
        </div>

        <div className="mb-8 md:mb-0 w-full md:w-[600px] right group">
          <div className="relative">
            <Image
              src="/images/consultant.jpg"
              alt="Doctor"
              width={700}
              height={700}
              className="w-full h-auto md:h-[600px] relative z-20"
              style={{
                borderTopLeftRadius: '250px',
                borderBottomRightRadius: '200px',
                borderBottomLeftRadius: '200px',
                borderTopRightRadius: '200px',
              }}
            />
            <div className="absolute top-8 left-32 md:left-12 bg-white p-4 rounded-lg shadow-md opacity-0 z-10 transition-all duration-500 group-hover:left-[-40px] group-hover:opacity-65">
              <div className="flex items-center">
                <div>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 5.58 2 10C2 12.36 3.19 14.46 5 15.74V20.82L9.14 18.26C9.69 18.42 10.33 18.5 11 18.5C16.52 18.5 21 14.92 21 10.5C21 6.08 16.52 2 12 2ZM6 11C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9C6.55 9 7 9.45 7 10C7 10.55 6.55 11 6 11ZM8.14 14.26C8.68 14.4 9.33 14.5 10 14.5C13.31 14.5 16 12.54 16 10.5C16 8.46 13.31 6.5 10 6.5C6.69 6.5 4 8.46 4 10.5C4 12.36 5.19 14.26 8.14 14.26ZM11 11C10.45 11 10 10.55 10 10C10 9.45 10.45 9 11 9C11.55 9 12 9.45 12 10C12 10.55 11.55 11 11 11ZM14 11C13.45 11 13 10.55 13 10C13 9.45 13.45 9 14 9C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z"
                      fill="#045357"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-black text-base md:text-lg font-semibold">
                    Member Asked
                  </p>
                  <p className="text-xs">Added Thursday at 1:00 PM</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-[300px] md:w-[400px] h-[20px] bg-gray-200 rounded-[5px]"></div>
                <div className="w-[250px] md:w-[350px] h-[20px] bg-gray-200 rounded-[5px] mt-2"></div>
              </div>
            </div>

            <div className="absolute bottom-[200px] md:-left-8 bg-white p-2 rounded-lg shadow-md flex opacity-0 z-30 transition-all duration-500 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                className="bg-[#045357] rounded-[5px] mx-2"
              >
                <path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
              </svg>
              <p className="text-black opacity-100 font-semibold">
                Feel Support Always
              </p>
            </div>
            <div className="md:right-[0] absolute top-[212px] bg-none p-4 rounded-lg z-30 opacity-0 transition-all duration-700 group-hover:right-[173px] group-hover:opacity-100">
              <p className="text-xs md:text-sm mb-1">Excellent</p>
              <p className="text-xl md:text-3xl font-semibold">98%</p>
            </div>
            <div className="absolute -bottom-28 md:right-2 bg-white p-4 rounded-lg shadow-md opacity-0 z-30 transition-all duration-700 group-hover:bottom-[-40px] group-hover:opacity-85">
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                    className="bg-[#045357] rounded-[5px] mx-2"
                  >
                    <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-black text-base md:text-lg font-semibold">
                    Doctor's Note
                  </p>
                  <p className="text-xs">Added Thursday at 1:00 PM</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-[300px] md:w-[400px] h-[20px] bg-gray-200 rounded-[5px]"></div>
                <div className="w-[250px] md:w-[350px] h-[20px] bg-gray-200 rounded-[5px] mt-2"></div>
                <div className="w-[200px] md:w-[300px] h-[20px] bg-gray-200 rounded-[5px] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
    </div>
  );
};

export default SecondSection;
