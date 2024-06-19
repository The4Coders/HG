"use client";
import React, { useState } from "react";
import OrgLayout from "@/components/orgLayout";

interface Donor {
  id: number;
  name: string;
  age: number;
  phone: string;
  email: string;
  status: "completed" | "requested";
}

export default function Page() {
  const [donors, setDonors] = useState<Donor[]>([
    {
      id: 1,
      name: "John Doe",
      age: 30,
      phone: "123-456-7890",
      email: "john@example.com",
      status: "completed",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      phone: "987-654-3210",
      email: "jane@example.com",
      status: "requested",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.phone.includes(searchTerm) ||
      donor.email.toLowerCase().includes(searchTerm) ||
      donor.status.toLowerCase().includes(searchTerm)
  );

  return (
    <main>
      <OrgLayout>
        <div className="bg-white w-full p-4">
          {/* Section header for donors */}
          <section className="m-auto my-4 w-full gap-y-4 flex flex-col lg:flex-row justify-start gap-x-6 items-start lg:items-center">
            <h2 className="font-bold text-2xl text-black">All Donors</h2>
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
                  value={searchTerm}
                  onChange={handleSearchChange}
                  required
                />
              </div>
            </form>
          </section>

          {/* Donors Table */}
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
                    Email
                  </th>
                  <th className="bg-gray-100 p-2 text-gray-700 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {filteredDonors.map((donor) => (
                  <tr
                    key={donor.id}
                    className="bg-white border border-gray-300 md:border-none block md:table-row"
                  >
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {donor.id}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {donor.name}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {donor.age}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {donor.phone}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      {donor.email}
                    </td>
                    <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                      <span
                        className={`p-1 px-2 rounded ${
                          donor.status === "completed"
                            ? "bg-primary text-white"
                            : "bg-yellow-400 text-black"
                        }`}
                      >
                        {donor.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </OrgLayout>
    </main>
  );
}
