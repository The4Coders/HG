'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Link from 'next/link';

const FourthSection: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.beneath', { interval: 200 });
  }, []);

  return (
    <div className="p-8 font-sans pt-24 pb-24 bg-[#E6E4E5]">
      <div className="text-center mb-16 flex flex-col md:flex-row gap-[100px] items-center justify-center">
        <div className="beneath">
          <h2 className="text-5xl font-bold text-gray-500 max-w-[600px] leading-[60px] text-start">
            We Make It{' '}
            <span className="text-6xl text-[#063b3f]">Easy</span> By Keeping
            Things Simple
          </h2>
        </div>
        <div className="beneath">
          <p className="text-gray-600 max-w-[520px] text-start leading-[30px]">
            Our Approach Is To Demystify Medical Information, Streamline
            Processes, And Prioritize Clear Communication. Whether You’re
            Seeking Information, Scheduling Appointments, Or Accessing Care.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <Link href="/">
          <div className="bg-gray-100 p-6 rounded-lg text-center relative flex-1 max-w-[350px] group beneath shadow-xl">
            <h3 className="text-xl text-black mb-4 w-[200px] text-start">
              Provide{' '}
              <span className="text-[#063b3f]">General Medical</span> Services
              for Everyone
            </h3>
            <p className="text-gray-500 max-w-[280px] text-start text-sm">
              We understand that navigating the world of healthcare can be
              overwhelming.
            </p>
            <div className="text-4xl mt-8 text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#063b3f"
                className="bi bi-hospital-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM2.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 9.75v-.5A.25.25 0 0 1 2.25 9m0 2h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zM13.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25M13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25" />
              </svg>
            </div>
            <div className="absolute bottom-8 right-4 text-[#063b3f] transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-700">
              <span className="text-xs">see records</span> ➔
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="bg-gray-100 p-6 rounded-lg text-center relative flex-1 max-w-[350px] group beneath shadow-xl">
            <div className="text-4xl mb-8 text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#063b3f"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 4 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <div className="absolute top-5 right-4 text-[#063b3f] transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-700">
              <span className="text-xs">see records</span> ➔
            </div>
            <h3 className="text-xl text-black mb-4 w-[200px] text-start">
              Professional{' '}
              <span className="text-[#063b3f]">Mental Health Consultation</span>{' '}
              for Everyone
            </h3>
            <p className="text-gray-500 max-w-[280px] text-start text-sm">
              You can schedule an appointment directly with a dermatologist
              without a referral.
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="bg-gray-100 p-6 rounded-lg text-center relative flex-1 max-w-[350px] group beneath shadow-xl">
            <h3 className="text-xl text-black mb-4 w-[200px] text-start">
              Deliver Life{' '}
              <span className="text-[#063b3f]">Wellness Care</span> for Everyone
              Health
            </h3>
            <p className="text-gray-600 max-w-[280px] text-start text-sm">
              Don’t hesitate to ask questions about your condition, treatment
              options, and any concerns you have.
            </p>
            <div className="text-4xl mt-4 text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#063b3f"
                className="bi bi-heart-pulse-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
              </svg>
            </div>
            <div className="absolute bottom-8 right-4 text-[#063b3f] transform opacity-0 group-hover:translate-x-0 group-hover:opacity-100  transition-transform translate-x-full duration-700">
              <span className="text-xs">see records</span> ➔
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FourthSection;
