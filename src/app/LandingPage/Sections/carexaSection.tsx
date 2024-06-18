"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';

const CarexaSection: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal('.down', {
      origin: 'bottom',
      interval: 200,
    });
  }, []);

  return (
    <div className="bg-[#045357] pt-12 md:pt-28 pb-12 md:pb-24">
      <div className="w-full max-w-[xl] md:ml-40 md:down">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
          Explore{' '}
          <span className="text-green-400 text-5xl md:text-6xl underline">
            Carexa
          </span>
        </h2>
        <p className="mt-2 text-gray-300 text-center md:text-left">
          Carexa is your personal health advisor who can help you discover new
          health tips tailored to your needs.
        </p>
      </div>
      <div className="container mx-auto px-4 md:flex md:flex-col md:items-center md:mt-10">
        <div className="w-full md:w-[70%] max-w-[xl] md:flex md:flex-row md:justify-center md:mb-8 down">
          <div className="md:w-1/2 md:mb-0 mb-8 hidden md:block">
            <Image
              src="/images/carexa.png"
              alt="Carexa"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-[500px] md:h-full md:ml-8 down">
            <div className="mt-8 bg-gray-800 p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="md:block">
                  <Image
                    src="/images/carexa.png"
                    alt="Carexa"
                    width={50}
                    height={50}
                    className="rounded-full border-[2px] border-green-700"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-green-400">Carexa</p>
                  <p className="text-gray-400 text-sm">
                    You can talk to me about anything health-related
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-700 p-4 rounded-lg shadow-md">
                  <p>His token's blowing up on Euterpe 👀 Invested lately?</p>
                </div>
                <div className="bg-green-700 p-4 rounded-lg shadow-md">
                  <p>
                    Nah, just vibing to new stuff lately. Any hidden gems I
                    should know about? 😉
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded-lg shadow-md">
                  <p>
                    Always! This artist Solis - soulful voice, totally your
                    style. Check her out!
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Your message..."
                  className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarexaSection;
