"use client";

import React from "react";

const SignIn: React.FC = () => {
  const handleSignInClick = () => {
    window.history.back();
  };

  return (
    <div className="bg-gradient-animation bg-gradient-to-r from-white to-[#063B3F] flex items-center justify-center min-h-screen p-4">
      <div className="bg-[#7C989A] w-full max-w-4xl h-auto md:h-[600px] md:w-[840px] rounded-[20px] border-[2px] border-black border-t-0 border-opacity-30 shadow-md">
        <div className="bg-[#65898C] w-full h-auto md:h-[584px] md:w-[820px] rounded-[20px] shadow-xl mx-auto flex flex-col md:flex-row border-[2px] border-black border-t-0 border-opacity-15">
          <div className="bg-white flex-1 rounded-t-[20px] md:rounded-l-[20px] relative flex justify-center items-center p-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[42px] font-normal text-black text-center mb-3">
                Sign In
              </h2>
              <div className="flex flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-10">
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#4285F4"
                      d="M 46.85 24.85 C 46.85 23.963 46.78 23.118 46.65 22.299 L 24 22.299 L 24 28.859 L 36.655 28.859 C 36.005 31.825 34.222 34.283 31.707 35.83 L 31.707 40.36 L 38.905 40.36 C 43.35 36.404 46.85 30.142 46.85 24.85 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M 24 46.999 C 30.48 46.999 35.8 44.923 38.905 40.36 L 31.707 35.83 C 30.032 36.915 27.852 37.639 24.978 37.639 C 18.785 37.639 13.793 33.645 12.1 28.11 L 5.635 28.11 L 5.635 32.827 C 8.947 39.528 15.981 46.999 24 46.999 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M 12.1 28.11 C 11.65 26.79 11.4 25.364 11.4 23.999 C 11.4 22.634 11.65 21.209 12.1 19.888 L 12.1 15.171 L 5.635 15.171 C 3.644 19.056 2.3 23.417 2.3 28.11 C 2.3 32.802 3.644 37.162 5.635 41.048 L 12.1 36.33 L 12.1 28.11 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M 24 11.358 C 27.196 11.358 29.837 12.438 31.707 14.119 L 38.905 7.076 C 35.798 3.794 30.479 1 24 1 C 15.981 1 8.947 8.472 5.635 15.171 L 12.1 19.888 C 13.793 14.355 18.785 11.358 24 11.358 Z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#000000"
                      d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.546C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.727V1.727C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.545a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM20.452 20.452h-3.56V14.9c0-1.323-.027-3.026-1.84-3.026-1.842 0-2.124 1.433-2.124 2.914v5.664h-3.56V9h3.42v1.56h.05c.477-.9 1.635-1.845 3.367-1.845 3.6 0 4.27 2.367 4.27 5.444v6.293z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#1877F2"
                      d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.309h3.59l-.467 3.622h-3.123V24h6.116c.729 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white py-2 rounded-md w-[40px] border border-[#eeeeee]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#000000"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.125-.303-.536-1.523.115-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.004 2.045.137 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.371.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.287 0 .322.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center flex-col">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="border border-gray-300 bg-[#eeeeee] rounded-[8px] py-2 px-4 focus:outline-none focus:border-[#063b3f] w-[260px] md:w-[300px]"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="border border-gray-300 bg-[#eeeeee] rounded-[8px] py-2 px-4 mt-4 focus:outline-none focus:border-[#063b3f] w-[260px] md:w-[300px]"
                />
              </div>
              <p className="text-center text-gray-600 text-base mt-6 cursor-pointer hover:underline">
                Forgot Your Password?
              </p>
              <div className="text-center">
                <button className="bg-[#063b3f] text-white py-3 px-14 rounded-[8px] uppercase w-[160px] md:w-[200px] moving-wave-button"
                type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#063b3f] flex-1 rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px] md:rounded-tl-[160px] md:rounded-br-[160px] flex p-8 items-center justify-center">
            <div className="text-white text-center p-4 flex flex-col items-center">
              <h2 className="text-[32px] md:text-[42px] font-medium mb-6 md:mb-10">Hello!</h2>
              <p>Register with your personal details</p>
              <button
                onClick={handleSignInClick}
                className="rounded-[8px] text-white border border-white py-3 px-14 mt-6 md:mt-12 font-[600] uppercase moving-wave-button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
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
        `}
      </style>
    </div>
  );
};

export default SignIn;
