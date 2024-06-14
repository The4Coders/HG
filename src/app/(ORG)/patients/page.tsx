// @ts-nocheck
/* eslint-disable */
"use client";

import { useState, useMemo } from "react";
import OrgLayout from "@/components/orgLayout";
import { CirclePlus, EllipsisVertical } from "lucide-react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  Column,
  Row,
  TableInstance,
} from "react-table";

interface Patient {
  name: string;
  id: string;
  age: number;
  phone: string;
  diagnosis: string;
  admissionDate: string;
  status: string;
  actions: any;
}

const mockData: Patient[] = [
  {
    name: "John Doe",
    id: "001",
    age: 25,
    phone: "1234567890",
    diagnosis: "Flu",
    admissionDate: "2023-01-01",
    status: "Admitted",
  },
  {
    name: "Jane Smith",
    id: "002",
    age: 30,
    phone: "1234567891",
    diagnosis: "Cold",
    admissionDate: "2023-02-01",
    status: "Discharged",
  },
  {
    name: "Bob Johnson",
    id: "003",
    age: 45,
    phone: "1234567892",
    diagnosis: "Asthma",
    admissionDate: "2023-03-01",
    status: "Admitted",
  },
  {
    name: "Alice Brown",
    id: "004",
    age: 35,
    phone: "1234567893",
    diagnosis: "Diabetes",
    admissionDate: "2023-04-01",
    status: "Admitted",
  },
  {
    name: "Charlie Davis",
    id: "005",
    age: 28,
    phone: "1234567894",
    diagnosis: "Hypertension",
    admissionDate: "2023-05-01",
    status: "Admitted",
  },
  {
    name: "Eve Miller",
    id: "006",
    age: 22,
    phone: "1234567895",
    diagnosis: "Migraine",
    admissionDate: "2023-06-01",
    status: "Discharged",
  },
  {
    name: "Frank Wilson",
    id: "007",
    age: 40,
    phone: "1234567896",
    diagnosis: "Cancer",
    admissionDate: "2023-07-01",
    status: "Admitted",
  },
  {
    name: "Grace Lee",
    id: "008",
    age: 55,
    phone: "1234567897",
    diagnosis: "Arthritis",
    admissionDate: "2023-08-01",
    status: "Admitted",
  },
  {
    name: "Henry Moore",
    id: "009",
    age: 32,
    phone: "1234567898",
    diagnosis: "Back Pain",
    admissionDate: "2023-09-01",
    status: "Admitted",
  },
  {
    name: "Ivy Clark",
    id: "010",
    age: 50,
    phone: "1234567899",
    diagnosis: "Heart Disease",
    admissionDate: "2023-10-01",
    status: "Admitted",
  },
  {
    name: "Jack White",
    id: "011",
    age: 27,
    phone: "1234567800",
    diagnosis: "Allergies",
    admissionDate: "2023-11-01",
    status: "Discharged",
  },
  {
    name: "Kelly Green",
    id: "012",
    age: 38,
    phone: "1234567801",
    diagnosis: "Kidney Stones",
    admissionDate: "2023-12-01",
    status: "Admitted",
  },
  {
    name: "Liam Harris",
    id: "013",
    age: 48,
    phone: "1234567802",
    diagnosis: "Stroke",
    admissionDate: "2024-01-01",
    status: "Admitted",
  },
  {
    name: "Mia Martinez",
    id: "014",
    age: 29,
    phone: "1234567803",
    diagnosis: "Pneumonia",
    admissionDate: "2024-02-01",
    status: "Admitted",
  },
  {
    name: "Noah Thompson",
    id: "015",
    age: 31,
    phone: "1234567804",
    diagnosis: "Ulcer",
    admissionDate: "2024-03-01",
    status: "Admitted",
  },
];

const columns: Column<Patient>[] = [
  { Header: "Name", accessor: "name" },
  { Header: "ID", accessor: "id" },
  { Header: "Age", accessor: "age" },
  { Header: "Phone Number", accessor: "phone" },
  { Header: "Diagnosis", accessor: "diagnosis" },
  { Header: "Admission Date", accessor: "admissionDate" },
  { Header: "Status", accessor: "status" },
  { Header: "", accessor: "actions" },
];

export default function Page() {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});
  const data = useMemo(() => mockData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex, pageSize, globalFilter },
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
  }: TableInstance<Patient> = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useGlobalFilter,
    usePagination
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    setGlobalFilter(value);
    setSearchInput(value);
  };

  const toggleDropdown = (id: string) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <main>
      <OrgLayout>
        <main className="bg-white w-full">
          {/* Section to add Patient */}
          <section className="m-auto my-4 w-full flex justify-evenly items-center">
            <h2 className="font-bold text-2xl text-black">All Patients</h2>
            <form className="w-[60%]">
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
                  value={searchInput}
                  onChange={handleSearch}
                  required
                />
              </div>
            </form>

            <button className="bg-primary text-white p-1.5 px-2 rounded-md flex justify-start items-center gap-x-2">
              <CirclePlus color="white" size={15} />
              Add a Patient
            </button>
          </section>

          {/* Table section */}
          <section className="m-auto my-4 w-full">
            <table {...getTableProps()} className="min-w-full leading-normal">
              <thead>
                {headerGroups.map((headerGroup: any) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((column: any) => (
                      <th
                        {...column.getHeaderProps()}
                        key={column.id}
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row: any) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={row.id}>
                      {row.cells.map((cell: any) => (
                        <td
                          {...cell.getCellProps()}
                          key={cell.column.id}
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          {cell.column.id === "actions" ? (
                            <div className="relative">
                              <button
                                onClick={() => toggleDropdown(row.original.id)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Actions
                              </button>
                              {dropdownOpen[row.original.id] && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                  <ul className="py-1 text-gray-700">
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                      >
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                      >
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                      >
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <nav
              aria-label="Page navigation example"
              className="flex justify-center mt-4"
            >
              <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-3 h-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </button>
                </li>
                {pageOptions.map((pageNumber: any) => (
                  <li key={pageNumber}>
                    <button
                      onClick={() => gotoPage(pageNumber)}
                      className={`flex items-center justify-center px-4 h-10 leading-tight ${
                        pageIndex === pageNumber
                          ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                          : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      } dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-3 h-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </section>
        </main>
      </OrgLayout>
    </main>
  );
}
