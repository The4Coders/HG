'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Onboarding: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isProfileSetup, setIsProfileSetup] = useState(false);
  const [isAdditionalInfoSetup, setIsAdditionalInfoSetup] = useState(false);
  const [isMedicalInfoSetup, setIsMedicalInfoSetup] = useState(false);

  // Personal account state
  const [personalFullName, setPersonalFullName] = useState('');
  const [personalPhoneNumber, setPersonalPhoneNumber] = useState('');
  const [personalAddress, setPersonalAddress] = useState('');
  const [personalProfileImage, setPersonalProfileImage] = useState<
    string | null
  >(null);
  const [personalDob, setPersonalDob] = useState('');
  const [personalGender, setPersonalGender] = useState('');
  const [personalEmergencyContactName, setPersonalEmergencyContactName] =
    useState('');
  const [
    personalEmergencyContactRelationship,
    setPersonalEmergencyContactRelationship,
  ] = useState('');
  const [personalEmergencyContactPhone, setPersonalEmergencyContactPhone] =
    useState('');
  const [personalMedicalHistory, setPersonalMedicalHistory] = useState('');
  const [personalCurrentMedications, setPersonalCurrentMedications] =
    useState('');
  const [personalPrimaryCarePhysician, setPersonalPrimaryCarePhysician] =
    useState('');
  const [personalPhysicianContact, setPersonalPhysicianContact] = useState('');
  const [personalAllergies, setPersonalAllergies] = useState('');
  const [personalBloodType, setPersonalBloodType] = useState('');
  const [personalAccountData, setPersonalAccountData] = useState<any[]>([]);

  // Organization account state
  const [organizationName, setOrganizationName] = useState('');
  const [organizationContactPerson, setOrganizationContactPerson] =
    useState('');
  const [organizationPhoneNumber, setOrganizationPhoneNumber] = useState('');
  const [organizationAddress, setOrganizationAddress] = useState('');
  const [organizationWebsite, setOrganizationWebsite] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [organizationAccountData, setOrganizationAccountData] = useState<any[]>(
    []
  );

  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (validationMessage) {
      timer = setTimeout(() => {
        setValidationMessage('');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [validationMessage]);

  const switchToProfileSetup = () => {
    if (!selectedOption) {
      setValidationMessage('Please select an account type to proceed.');
    } else {
      setValidationMessage('');
      setIsProfileSetup(true);
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (selectedOption === 'personal') {
          setPersonalProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validateProfileSetup = () => {
    if (
      selectedOption === 'personal' &&
      (!personalFullName || !personalPhoneNumber || !personalProfileImage)
    ) {
      setValidationMessage('Please fill in all required fields.');
    } else if (
      selectedOption === 'organization' &&
      (!organizationName ||
        !organizationContactPerson ||
        !organizationPhoneNumber)
    ) {
      setValidationMessage('Please fill in all required fields.');
    } else {
      setValidationMessage('');
      setIsAdditionalInfoSetup(true);
    }
  };

  const validateAdditionalInfoSetup = () => {
    if (selectedOption === 'personal' && (!personalDob || !personalGender)) {
      setValidationMessage('Please fill in all required fields.');
    } else if (
      selectedOption === 'organization' &&
      (!organizationType || !organizationWebsite)
    ) {
      setValidationMessage('Please fill in all required fields.');
    } else {
      setValidationMessage('');
      setIsMedicalInfoSetup(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption === 'personal') {
      if (
        !personalPrimaryCarePhysician ||
        !personalPhysicianContact ||
        !personalAllergies ||
        !personalBloodType
      ) {
        setValidationMessage('Please fill in all required fields.');
      } else {
        setValidationMessage('');
        const data = {
          fullName: personalFullName,
          phoneNumber: personalPhoneNumber,
          address: personalAddress,
          profileImage: personalProfileImage,
          dob: personalDob,
          gender: personalGender,
          emergencyContactName: personalEmergencyContactName,
          emergencyContactRelationship: personalEmergencyContactRelationship,
          emergencyContactPhone: personalEmergencyContactPhone,
          medicalHistory: personalMedicalHistory,
          currentMedications: personalCurrentMedications,
          primaryCarePhysician: personalPrimaryCarePhysician,
          physicianContact: personalPhysicianContact,
          allergies: personalAllergies,
          bloodType: personalBloodType,
        };
        setPersonalAccountData((prevData) => [...prevData, data]);
        console.log('Personal Account Data:', [...personalAccountData, data]);
      }
    } else if (selectedOption === 'organization') {
      const data = {
        organizationName,
        contactPerson: organizationContactPerson,
        phoneNumber: organizationPhoneNumber,
        address: organizationAddress,
        website: organizationWebsite,
        type: organizationType,
      };
      setOrganizationAccountData((prevData) => [...prevData, data]);
      console.log('Organization Account Data:', [
        ...organizationAccountData,
        data,
      ]);
    }
  };

  const handleBack = () => {
    if (isMedicalInfoSetup) {
      setIsMedicalInfoSetup(false);
    } else if (isAdditionalInfoSetup) {
      setIsAdditionalInfoSetup(false);
    } else if (isProfileSetup) {
      setIsProfileSetup(false);
      setSelectedOption(null);
    }
  };

  const getProgress = () => {
    if (isMedicalInfoSetup) {
      return '3/3';
    } else if (isAdditionalInfoSetup) {
      return '2/3';
    } else if (isProfileSetup) {
      return '1/3';
    } else {
      return '';
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/trees.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <nav className="fixed top-0 w-full h-20 flex items-center bg-transparent z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex gap-2 items-center">
                <Image
                  className="h-8 w-8 text-black rounded-full"
                  src="/Logo.png"
                  width={50}
                  height={50}
                  alt="Logo"
                />
                <span className="text-2xl font-bold text-[#E6E4E5]">
                  Health Guardian
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative z-10 bg-[#E6E4E5] p-8 rounded-lg shadow-md text-center opacity-95 mx-4 sm:mx-auto max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">
          {isProfileSetup ? (
            isAdditionalInfoSetup ? (
              isMedicalInfoSetup ? (
                <>
                  {selectedOption === 'personal'
                    ? 'Medical Information'
                    : 'Organization Information'}
                </>
              ) : (
                <>
                  Additional <span className="text-[#063b3f]">Information</span>
                </>
              )
            ) : (
              <>
                Profile <span className="text-[#063b3f]">Setup</span>
              </>
            )
          ) : (
            <>
              Account <span className="text-[#063b3f]">Type</span>
            </>
          )}
          <span className="absolute top-4 right-4 text-base">
            {getProgress()}
          </span>
        </h2>
        {isProfileSetup && !isAdditionalInfoSetup && (
          <div className="mb-6 relative">
            {validationMessage && (
              <div className="mb-4 text-red-500">{validationMessage}</div>
            )}
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                {selectedOption === 'personal' && personalProfileImage ? (
                  <Image
                    src={personalProfileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                    width={128}
                    height={128}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="bi bi-person-fill text-[#d6d6d6] bg-white p-4 rounded-full"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                )}
                <form className="absolute bottom-5 right-0">
                  <label htmlFor="profileImage" className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="bi bi-pencil-square bg-[#65898C] text-white hover:bg-[#7EA8AC] rounded-full p-1"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-7a.5.5 0 0 0-1 0v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 0 0-1h-7A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </label>
                  <input
                    id="profileImage"
                    type="file"
                    className="hidden"
                    onChange={handleProfileImageUpload}
                    accept="image/*"
                  />
                </form>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Upload profile photo</p>
            <p className="text-gray-600 mb-4">and details</p>
            {selectedOption === 'personal' ? (
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
                  value={personalFullName}
                  onChange={(e) => setPersonalFullName(e.target.value)}
                  required
                />
                <PhoneInput
                  country={'ng'}
                  value={personalPhoneNumber}
                  onChange={(phone) => setPersonalPhoneNumber(phone)}
                  containerStyle={{ marginBottom: '5px' }}
                  inputStyle={{ width: '100%' }}
                />
                <textarea
                  placeholder="Address"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
                  value={personalAddress}
                  onChange={(e) => setPersonalAddress(e.target.value)}
                />
              </form>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Contact Person"
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={organizationContactPerson}
                  onChange={(e) => setOrganizationContactPerson(e.target.value)}
                  required
                />
                <PhoneInput
                  country={'us'}
                  value={organizationPhoneNumber}
                  onChange={(phone) => setOrganizationPhoneNumber(phone)}
                  containerStyle={{ marginBottom: '1rem' }}
                  inputStyle={{ width: '100%' }}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={organizationAddress}
                  onChange={(e) => setOrganizationAddress(e.target.value)}
                />
              </>
            )}
          </div>
        )}
        {isAdditionalInfoSetup && !isMedicalInfoSetup && (
          <div className="mb-6">
            {validationMessage && (
              <div className="mb-4 text-red-500">{validationMessage}</div>
            )}
            {selectedOption === 'personal' ? (
              <>
                <label className="block text-left mb-2">Date of Birth</label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={personalDob}
                  onChange={(e) => setPersonalDob(e.target.value)}
                  required
                />
                <label className="block text-left mb-2">Gender</label>
                <select
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={personalGender}
                  onChange={(e) => setPersonalGender(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="mb-4">
                  <label className="block text-left mb-2">
                    Emergency Contact Name
                    <span className="text-xs text-gray-500"> *optional</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Emergency Contact Name"
                    value={personalEmergencyContactName}
                    onChange={(e) =>
                      setPersonalEmergencyContactName(e.target.value)
                    }
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2">
                    Emergency Contact Relationship
                    <span className="text-xs text-gray-500"> *optional</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Emergency Contact Relationship"
                    value={personalEmergencyContactRelationship}
                    onChange={(e) =>
                      setPersonalEmergencyContactRelationship(e.target.value)
                    }
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2">
                    Emergency Contact Phone
                    <span className="text-xs text-gray-500"> *optional</span>
                  </label>
                  <PhoneInput
                    country={'ng'}
                    value={personalEmergencyContactPhone}
                    onChange={(value) =>
                      setPersonalEmergencyContactPhone(value)
                    }
                    inputClass="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    containerClass="w-full"
                    dropdownClass="w-full"
                    buttonStyle={{ border: '1px solid #ccc' }}
                  />
                </div>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Organization Type"
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={organizationType}
                  onChange={(e) => setOrganizationType(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full px-3 py-2 border rounded mb-4"
                  value={organizationWebsite}
                  onChange={(e) => setOrganizationWebsite(e.target.value)}
                />
              </>
            )}
          </div>
        )}
        {isMedicalInfoSetup && (
          <div className="mb-6">
            {validationMessage && (
              <div className="mb-4 text-red-500">{validationMessage}</div>
            )}
            {selectedOption === 'personal' ? (
              <>
                <div className="mb-2">
                  <label className="block text-left mb-2">
                    Medical History{' '}
                    <span className="text-xs text-gray-500">*optional</span>
                  </label>
                  <textarea
                    placeholder="Medical History"
                    className="border p-2 w-full rounded-md"
                    value={personalMedicalHistory}
                    onChange={(e) => setPersonalMedicalHistory(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-left mb-2">
                    Current Medications{' '}
                    <span className="text-xs text-gray-500">*optional</span>
                  </label>
                  <textarea
                    placeholder="Current Medications"
                    className="border p-2 w-full rounded-md"
                    value={personalCurrentMedications}
                    onChange={(e) =>
                      setPersonalCurrentMedications(e.target.value)
                    }
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    placeholder="Allergies"
                    className="border p-2 w-full rounded-md"
                    value={personalAllergies}
                    onChange={(e) => setPersonalAllergies(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <select
                    className="border p-2 w-full rounded-md"
                    value={personalBloodType}
                    onChange={(e) => setPersonalBloodType(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Select Blood Type
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block text-left mb-2">
                    Primary Doctor Name{' '}
                  </label>
                  <input
                    type="text"
                    placeholder="Primary Care Physician"
                    className="border p-2 w-full rounded-md"
                    value={personalPrimaryCarePhysician}
                    onChange={(e) =>
                      setPersonalPrimaryCarePhysician(e.target.value)
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-left mb-2">
                    Primary Doctor Contact{' '}
                  </label>
                  <PhoneInput
                    country={'ng'}
                    value={personalPhysicianContact}
                    onChange={(value) => setPersonalPhysicianContact(value)}
                  />
                </div>
              </>
            ) : (
              <>
                {/* additional fields for organization, make una sha no run mad 😑*/}
              </>
            )}
          </div>
        )}
        {!isProfileSetup && (
          <div className="mb-6 relative">
            {validationMessage && (
              <div className="mb-4 text-red-500">{validationMessage}</div>
            )}
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-3">
              <button
                className={`border-2 rounded-lg p-6 sm:p-16 cursor-pointer flex flex-col justify-center items-center transition-all duration-300 ${
                  selectedOption === 'personal'
                    ? 'border-[#063b3f] border-2 transform scale-105'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedOption('personal')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-file-person-fill mb-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                </svg>
                Personal Account
              </button>
              <button
                className={`border-2 rounded-lg p-6 sm:p-16 cursor-pointer flex flex-col justify-center items-center transition-all duration-300 ${
                  selectedOption === 'organization'
                    ? 'border-[#063b3f] border-2 transform scale-105'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedOption('organization')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-hospital mb-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                  <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                </svg>
                Organization Account
              </button>
            </div>
          </div>
        )}
        {isProfileSetup && (
          <div className="flex justify-between gap-x-3 mt-2 border-t-2 border-gray-300 pt-3">
            <button
              onClick={handleBack}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4"
            >
              Back
            </button>
            <button
              onClick={
                isMedicalInfoSetup
                  ? handleSubmit
                  : isAdditionalInfoSetup
                  ? validateAdditionalInfoSetup
                  : validateProfileSetup
              }
              className="bg-[#063b3f] hover:bg-[#0d4c53] text-white font-semibold py-2 px-4 rounded mt-4 w-full"
            >
              {isMedicalInfoSetup ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
        {!isProfileSetup && (
          <div className="border-t-2 border-gray-300 pt-3">
            {/* <button
                onClick={handleBack}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4 ml-2"
                >
                Back
              </button> */}
            <button
              onClick={switchToProfileSetup}
              className="bg-[#063b3f] hover:bg-[#0d4c53] text-white font-semibold py-2 px-4 rounded mt-2 w-full"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
