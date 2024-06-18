/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import {
  FaStethoscope,
  FaHeartbeat,
  FaPills,
  FaSyringe,
  FaUserMd,
  FaAmbulance,
  FaBriefcaseMedical,
  FaXRay,
} from "react-icons/fa";

const AnimationSection: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullText((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".refeal", {
      distance: "50px",
      duration: 1500,
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
  }, []);

  const icons = [
    <FaStethoscope />,
    null,
    <FaHeartbeat />,
    null,
    <FaPills />,
    null,
    <FaSyringe />,
    null,
    <FaUserMd />,
    null,
    <FaAmbulance />,
    null,
    <FaBriefcaseMedical />,
    null,
    <FaXRay />,
  ];

  return (
    <div className="relative flex justify-center items-center h-[300px] bg-[#045357]">
      <div className="grid grid-cols-5 grid-rows-3 gap-4 absolute w-full h-full p-4">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-[#E6E4E5] text-[40px] reveal opacity-40"
          >
            {Icon}
          </div>
        ))}
      </div>
      <div className="text-[50px] md:text-[100px] text-[#E6E4E5] font-bold relative">
        {showFullText ? (
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap">
            Health
          </span>
        ) : (
          <span className="animation-delay-0 animate-hop refeal">H</span>
        )}
      </div>
      <div className="text-[50px] md:text-[100px] text-[#E6E4E5] font-bold relative ml-4">
        {showFullText ? (
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap">
            Guardian
          </span>
        ) : (
          <span className="animation-delay-1 animate-hop refeal">G</span>
        )}
      </div>

      <style jsx>{`
        @keyframes hop {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        .animate-hop {
          animation: hop 2s infinite;
        }
        .animation-delay-0 {
          animation-delay: 0s;
        }
        .animation-delay-1 {
          animation-delay: 1s;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typing {
          animation: typing 2s steps(10, end) forwards, hop 2s infinite,
            sink 2s 2s forwards;
          white-space: nowrap;
          overflow: hidden;
        }
        @keyframes sink {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimationSection;
