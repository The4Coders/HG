"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "./Telemedicine.module.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TeleNavbar from "@/components/TeleNavbar";

interface Category {
  name: string;
  icon: string;
}

interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  image: string;
  availability: string;
}

const Telemedicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [doctorUnavailable, setDoctorUnavailable] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const categories = [
    { name: "General Surgeon", icon: "/doctor1.jpg" },
    { name: "Obstetrics & Gynecology", icon: "/doctor2.jpg" },
    { name: "Neuro Surgeon", icon: "/doctor3.jpg" },
    { name: "Pediatric Surgeon", icon: "/doctor4.jpg" },
    { name: "Obstetrics & Gynecology", icon: "/doctor2.jpg" },
    { name: "General Surgeon", icon: "/doctor1.jpg" },
  ];

  const topDoctors: Doctor[] = [
    {
      name: "Dr. Lee Ik Jun",
      specialty: "General Surgeon",
      rating: 5.0,
      image: "/profilePic4.jpg",
      availability: "Available",
    },
    {
      name: "Dr. Adeyemo Ademola",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic.jpg",
      availability: "Unavailable",
    },
    {
      name: "Dr. Obua Stella",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic2.jpg",
      availability: "Available",
    },
    {
      name: "Dr. Omojola Zion",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic2.jpg",
      availability: "Available",
    },
    {
      name: "Dr. Lee Ik Jun",
      specialty: "General Surgeon",
      rating: 5.0,
      image: "/profilePic4.jpg",
      availability: "Unavailable",
    },
    {
      name: "Dr. Omojola Zion",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic.jpg",
      availability: "Unavailable",
    },
    {
      name: "Dr. Adeoluwa Adeniji",
      specialty: "Obstetrics & Gynecology",
      rating: 5.0,
      image: "/profilePic.jpg",
      availability: "Available",
    },
  ];

  const filteredDoctors = topDoctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const doctorsByCategory = (categoryName: string) =>
    topDoctors.filter((doctor) => doctor.specialty === categoryName);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
    setShowAllDoctors(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const handleShowMore = () => {
    setShowAllDoctors(true);
  };

  const handleDoctorClick = (doctor: Doctor) => {
    if (doctor.availability === "Unavailable") {
      setPopupMessage("This Doctor is currently unavailable.");
      setDoctorUnavailable(true);
    } else {
      setSelectedDoctor(doctor);
    }
  };

  const closePopup = () => {
    setPopupMessage("");
    setDoctorUnavailable(false);
    setSelectedDoctor(null);
  };

  const proceedWithDoctor = () => {
    if (selectedDoctor) {
      // Proceed to telemedicine page with the selected doctor
      window.location.href = `/call?doctor=${encodeURIComponent(
        selectedDoctor.name
      )}`;
    }
  };

  return (
    <main className={`bg-[#e0f2f1] min-h-screen ${styles.fadeIn}`}>
      <div className="p-8 max-w-6xl mx-auto">
        <TeleNavbar />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#045357]">
            Transforming <span className="text-[#033d40]">Healthcare</span>, One
            Virtual Visit at a Time
          </h1>
          <p className="text-[#004d40] mb-8">
            Witness virtual consultations with easy scheduling, collaborative
            diagnosis, and real-time communication.
          </p>
          <Link
            href="#doctors"
            className="px-8 py-3 bg-[#045357] text-white rounded-full hover:bg-[#033d40] transition"
          >
            Find a Doctor
          </Link>
        </div>
        <div className="mb-16 mt-4">
          <h2 className="text-2xl font-semibold mb-4 text-[#045357]">
            Categories
          </h2>
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-lg cursor-pointer min-w-[150px] bg-white"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="mt-2 text-center text-[#045357]">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mb-16" id="doctors">
          <input
            type="text"
            placeholder="Search for your favorite doctor"
            className="w-full p-4 pr-12 border border-[#80cbc4] rounded-full focus:outline-none focus:border-[#004d40]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-4 top-4 w-6 h-6 text-[#004d40]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#045357]">
            Top Rated Doctors
          </h2>
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border rounded-lg cursor-pointer bg-white"
                  onClick={() => handleDoctorClick(doctor)}
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#045357]">
                      {doctor.name}
                    </h3>
                    <p className="text-[#004d40]">{doctor.specialty}</p>
                    <p className="text-yellow-500">{doctor.rating} ★★★★★</p>
                    <p
                      className={`mt-2 ${
                        doctor.availability === "Available"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {doctor.availability}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 mt-2">No doctor was found</p>
          )}
        </div>
        {isModalOpen && selectedCategory && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-[#045357]">
                {selectedCategory.name}
              </h2>
              <div className="max-h-[60vh] overflow-y-auto">
                {doctorsByCategory(selectedCategory.name)
                  .slice(0, showAllDoctors ? undefined : 3)
                  .map((doctor, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 border-b last:border-b-0 cursor-pointer"
                      onClick={() => handleDoctorClick(doctor)}
                    >
                      <div className="w-12 h-12 relative">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-[#045357]">
                          {doctor.name}
                        </h3>
                        <p className="text-[#004d40]">{doctor.specialty}</p>
                        <p className="text-yellow-500">{doctor.rating} ★★★★★</p>
                        <p
                          className={`mt-2 ${
                            doctor.availability === "Available"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {doctor.availability}
                        </p>
                      </div>
                    </div>
                  ))}
                {doctorsByCategory(selectedCategory.name).length > 3 &&
                  !showAllDoctors && (
                    <button
                      className="mt-4 px-4 py-2 bg-[#045357] text-white rounded"
                      onClick={handleShowMore}
                    >
                      More
                    </button>
                  )}
              </div>
              <button
                className="mt-4 px-4 py-2 bg-[#045357] text-white rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {popupMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold mb-4 text-red-500">
                {popupMessage}
              </h2>
              <p className="text-[#045357] mb-4">
                Get notified when the doctor is back online.
              </p>
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#045357]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m9-9v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7m16 0H4m16 0l-2 2m-2-2L4 7M6 19a2 2 0 11-4 0m14 0a2 2 0 11-4 0m-6 0a2 2 0 11-4 0m10 0a2 2 0 11-4 0"
                  ></path>
                </svg>
              </div>
              <button
                className="px-4 py-2 bg-[#045357] text-white rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {selectedDoctor && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold mb-4 text-[#045357]">
                You are about to call {selectedDoctor.name}
              </h2>
              <div className="flex justify-center gap-5 mt-4">
                <button
                  className="px-4 py-2 bg-[#033d40] text-white rounded"
                  onClick={proceedWithDoctor}
                >
                  Proceed
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={closePopup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Telemedicine;
