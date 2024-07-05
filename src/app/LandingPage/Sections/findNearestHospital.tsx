  "use client"
import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), { ssr: false });

const FindNearestHospital = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#045357] pt-12 md:pt-28 pb-12 md:pb-24">
      <header className="text-center my-8">
        <h1 className="font-bold text-white text-5xl md:text-6xl">Find the {" "}<span className='text-green-400 text-5xl md:text-6xl underline'>Nearest</span> Hospital</h1>
        <p className="text-lg mt-2 text-gray-300">Use the map below to locate hospitals near you.</p>
      </header>
      <div className="w-full h-96">
        <Map />
      </div>
    </div>
  );
};

export default FindNearestHospital;
