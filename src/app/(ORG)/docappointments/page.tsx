"use client";
import OrgLayout from "@/components/orgLayout";
import { useState } from "react";

interface Appointment {
  id: number;
  name: string;
  time: string;
  phone: string;
  appointmentDate: string;
  status: "approved" | "pending" | "canceled";
}

export default function Page() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      name: "John Doe",
      time: "10:00 AM",
      phone: "123-456-7890",
      appointmentDate: "2023-07-06",
      status: "approved",
    },
    {
      id: 2,
      name: "Jane Smith",
      time: "11:00 AM",
      phone: "987-654-3210",
      appointmentDate: "2023-07-07",
      status: "pending",
    },
    {
      id: 3,
      name: "Alice Johnson",
      time: "02:00 PM",
      phone: "555-555-5555",
      appointmentDate: "2023-07-08",
      status: "canceled",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdowns, setDropdowns] = useState<{ [key: number]: boolean }>({});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = (id: number) => {
    setDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <OrgLayout>
        <main className="bg-white w-full flex flex-col m-auto justify-center items-center">
          <section className="m-auto my-4 w-full gap-y-4 flex flex-col lg:flex-row justify-start lg:justify-start gap-x-8 items-start lg:items-center">
            <h2 className="font-bold text-2xl text-black">Appointments</h2>
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
          </section>

          <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Appointment Date
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {appointment.name}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {appointment.time}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {appointment.phone}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {appointment.appointmentDate}
                    </td>
                    <td
                      className={`py-4 px-6 whitespace-nowrap ${
                        appointment.status === "approved"
                          ? "text-green-400"
                          : appointment.status === "pending"
                          ? "text-yellow-400"
                          : "text-red-500"
                      }`}
                    >
                      {appointment.status}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap relative">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => toggleDropdown(appointment.id)}
                      >
                        Actions
                      </button>
                      {dropdowns[appointment.id] && (
                        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <button
                              className="flex justify-start items-center w-full  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Edit
                            </button>
                            <button
                              className="flex justify-start items-center w-full  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </OrgLayout>
    </main>
  );
}
