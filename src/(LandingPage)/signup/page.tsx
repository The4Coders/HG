'use client';

import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const SignUp: React.FC = () => {
  return (
    <div className="bg-gradient-animation bg-gradient-to-r from-white to-[#063B3F] flex items-center justify-center min-h-screen">
      <div className="bg-[#7C989A] w-[840px] h-[600px] rounded-[20px] border-[2px] border-black border-t-0 border-opacity-30 shadow-md">
        <div className="bg-[#65898C] w-[820px] h-[584px] rounded-[20px] mx-auto shadow-xl flex border-[2px] border-black border-t-0 border-opacity-15">
          <div className="bg-[#063B3F] flex-1 rounded-l-[20px] mb-5 rounded-r-[160px] relative flex justify-center items-center">
            <div className="text-white text-center p-4 flex flex-col items-center">
              <h2 className="text-[42px] font-medium mb-10">Welcome Back</h2>
              <p>Enter your personal details</p>
              <Link href="/signin">
                <button className="rounded-[8px] text-white border border-white py-3 px-14 mt-8 font-[600] uppercase moving-wave-button">
                  Sign In
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white flex-1 rounded-r-[20px] p-8 pt-20">
            <div className="flex flex-col gap-4">
              <h2 className="text-[42px] font-normal text-black text-center mb-3">
                Create Account
              </h2>
              <div className="flex flex-row gap-6 justify-center">
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  {/* <i className="bi bi-google text-black bg-white"></i> */}
                </button>
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  {/* <i className="bi bi-linkedin text-black bg-white"></i> */}
                </button>
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  {/* <i className="bi bi-facebook text-black bg-white"></i> */}
                </button>
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  {/* <i className="bi bi-github text-black bg-white"></i> */}
                </button>
              </div>
              <p className="text-gray-500 text-center">
                or use your email for registration
              </p>
              <div className="flex items-center flex-col">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="border border-gray-300 bg-[#eeeeee] rounded-[8px] py-2 px-4 focus:outline-none focus:border-[#063b3f] w-[300px]"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="border border-gray-300 bg-[#eeeeee] rounded-[8px] py-2 px-4 mt-4 focus:outline-none focus:border-[#063b3f] w-[300px]"
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="border border-gray-300 bg-[#eeeeee] rounded-[8px] py-2 px-4 mt-4 focus:outline-none focus:border-[#063b3f] w-[300px]"
                />
              </div>
              <div className="text-center">
                <button className="bg-[#063b3f] text-white py-3 px-14 rounded-[8px] mt-4 uppercase w-[200px] moving-wave-button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          // Background Animation

          // button animation

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
        `}
      </style>
    </div>
  );
};

export default SignUp;
