"use client";
import OrgLayout from "@/components/orgLayout";

import { CirclePlus, X } from "lucide-react";
import { useState } from "react";

interface Doctor {
  id: number;
  name: string;
  age: number;
  phone: string;
  profession: string;
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 5;

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDoctor: Doctor = {
      id: doctors.length + 1,
      name,
      age: age!,
      phone,
      profession,
    };
    setDoctors([...doctors, newDoctor]);
    setName("");
    setAge(undefined);
    setPhone("");
    setProfession("");
    setIsModalOpen(false);
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main>
      <OrgLayout>
        <main className=" bg-white w-full">
          {/* Section to add Patient */}
          <section className="m-auto my-4 w-full gap-y-4 flex flex-col lg:flex-row justify-start lg:justify-evenly items-start lg:items-center">
            <h2 className="font-bold text-2xl text-black">All Staffs</h2>
            <form className="w-[90%] lg:w-[60%]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  required
                />
              </div>
            </form>

            <button
              onClick={handleModalToggle}
              className="bg-primary text-white p-1.5 px-2 rounded-md flex justify-start items-center gap-x-2"
            >
              <CirclePlus color="white" size={15} />
              Add a Staff
            </button>
          </section>

          {/* Doctors Table */}
          <section className="m-auto my-4 w-full">
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                  <th className="bg-gray-100 p-2 text-gray-700 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                    ID
                  </th>
                  <th className="bg-gray-100 p-2 text-gray-700 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                    Name
                  </th>
                  <th className="bg-gray-100 p-2 text-gray-700 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                    Age
                  </th>
                  <th className="bg-gray-100 p-2 text-gray-700 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                    Phone
                  </th>
                  <th className="bg-gray-100 p-2 text-gray-700 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                    Profession
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {currentDoctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    className="bg-white border border-gray-300 md:border-none block md:table-row"
                  >
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {doctor.id}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {doctor.name}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {doctor.age}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {doctor.phone}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {doctor.profession}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
              {Array.from(
                {
                  length: Math.ceil(filteredDoctors.length / doctorsPerPage),
                },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`p-2 ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } mx-1 rounded`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </section>

          {/* Modal to add new doctor */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Add Staff</h2>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleModalToggle}
                  >
                    <X />
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="doctor-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="doctor-name"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      onChange={handleNameChange}
                      value={name}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="doctor-age"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      id="doctor-age"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      onChange={handleAgeChange}
                      value={age}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="doctor-phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="doctor-phone"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="doctor-profession"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profession
                    </label>
                    <input
                      type="text"
                      id="doctor-profession"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      value={profession}
                      onChange={handleProfessionChange}
                      required
                    />
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white p-2 rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </OrgLayout>
    </main>
  );
}
