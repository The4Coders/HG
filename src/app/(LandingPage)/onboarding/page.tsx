"use client";

import React, { useState } from 'react';

const OnboardingScreen: React.FC = () => {
  const [isUser, setIsUser] = useState(true);
  const [step, setStep] = useState(1);

  const handleUserClick = () => {
    setIsUser(true);
    setStep(1);
  };
  const handleOrgClick = () => {
    setIsUser(false);
    setStep(1);
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="h-[88vh] flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold mb-2">Register as</h1>
      <div className="flex mb-8">
        <button
          className={`mx-2 px-6 py-2 text-lg font-bold rounded-md transition-all duration-500 ${isUser ? 'bg-[#063B3F] text-[#eeeeee]' : 'bg-[#eeeeee] text-[#063B3F]'}`}
          onClick={handleUserClick}
        >
          User
        </button>
        <button
          className={`mx-2 px-6 py-2 text-lg font-bold rounded-md transition-all duration-500 ${!isUser ? 'bg-[#063B3F] text-[#eeeeee]' : 'bg-[#eeeeee] text-[#063B3F]'}`}
          onClick={handleOrgClick}
        >
          Organization
        </button>
      </div>
      <div className="w-[70%] flex flex-col transition-all duration-500 bg-[#eeeeee] p-6 rounded-md shadow-md relative">
        {step > 1 && (
          <button onClick={prevStep} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#063B3F] font-bold text-2xl ">
            &lt;
          </button>
        )}
        {isUser ? <UserForm step={step} /> : <OrganizationForm step={step} />}
        {step < (isUser ? 6 : 6) && (
          <button onClick={nextStep} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#063B3F] font-bold text-2xl">
            &gt;
          </button>
        )}
        {step === (isUser ? 6 : 6) && (
          <button type="submit" className="w-full p-2 bg-[#063B3F] text-[#eeeeee] rounded-md mt-4">
            Submit
          </button>
        )}
        <ProgressBar step={step} />
      </div>
    </div>
  );
};

const ProgressBar: React.FC<{ step: number }> = ({ step }) => {
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex justify-between mt-6">
      {steps.map((s) => (
        <div key={s} className={`flex-1 h-2 ${s <= step ? 'bg-[#063B3F]' : 'bg-gray-300'} mx-1`}></div>
      ))}
    </div>
  );
};

const UserForm: React.FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 3:
      return (
        <div className="w-full">
          <div className="mb-4">
            <label className="block text-[#063B3F] mb-2">Date of Birth</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-[#063B3F] mb-2">Gender</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Address</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 5:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Health Conditions</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
      );
    case 6:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Emergency Contact</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    default:
      return null;
  }
};

const OrganizationForm: React.FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Organization Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 3:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Address</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 4:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Number of Patients</label>
          <input type="number" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 5:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Contact Person</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    case 6:
      return (
        <div className="w-full">
          <label className="block text-[#063B3F] mb-2">Phone Number</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      );
    default:
      return null;
  }
};

export default OnboardingScreen;
