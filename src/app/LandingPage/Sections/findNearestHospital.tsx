import React from 'react';
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

const Map = dynamic(() => import('./map'), { ssr: false });

const FindNearestHospital = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Find the Nearest Hospital</h1>
        <p className="text-lg text-gray-600 mt-2">Use the map below to locate hospitals near you.</p>
      </header>
      <div className="w-full h-96">
        <Map />
      </div>
    </div>
  );
};

export default FindNearestHospital;