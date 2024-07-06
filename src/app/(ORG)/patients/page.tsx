// @ts-nocheck
/* eslint-disable */
"use client";
import { useState, useMemo, useEffect } from "react";
import OrgLayout from "@/components/orgLayout";
import { CirclePlus, X } from "lucide-react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  Column,
  TableInstance,
} from "react-table";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
interface Patient {
  generatedId: number;
  _id: string;
  name: string;
  id: string;
  age: number;
  phone: string;
  diagnosis: string;
  admissionDate: string;
  status: string;
  actions?: any;
}

const columns: Column<Patient>[] = [
  { Header: "ID", accessor: "generatedId" },
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Phone Number", accessor: "phone" },
  { Header: "Diagnosis", accessor: "diagnosis" },
  { Header: "Admission Date", accessor: "admissionDate" },
  { Header: "Status", accessor: "status" },
  { Header: "", accessor: "actions" },
];

const getPatient = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/patients", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Patients");
    }
    const patientData = await res.json();
    const patientsWithGeneratedId = patientData.patients.map(
      (patient: any, index: number) => ({
        generatedId: index + 1,
        ...patient,
        isOpen: false,
      })
    );
    return patientsWithGeneratedId;
  } catch (e: any) {
    console.log("Error loading patients:", e);
    return [];
  }
};

export default function Page() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/patients", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch Patients");
        }
        const patientData = await res.json(); // Parse JSON data here
        const patientsWithGeneratedId = patientData.patients.map(
          (patient: any, index: number) => ({
            generatedId: index + 1,
            ...patient,
            isOpen: false,
          })
        );
        setPatients(patientsWithGeneratedId);
        setIsLoading(false); // Set loading state to false after fetch completes
      } catch (e: any) {
        console.log("Error loading patients:", e);
        setPatients([]); // Ensure patients state is set to empty array on error
      }
    };

    fetchData();
  }, []);

  const data = useMemo(() => patients || [], [patients]);
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
    {
      columns,
      data: patients,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    usePagination
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    setGlobalFilter(value);
    setSearchInput(value);
  };

  const toggleDropdown = (id: string) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.generatedId === id
          ? { ...patient, isOpen: !patient.isOpen }
          : patient
      )
    );
  };

  const handleActionClick = (actualId: string) => {
    console.log("Actual ID:", actualId);
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  // modal functions
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };
  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };
  const handleDiagnosis = (e: any) => {
    setDiagnosis(e.target.value);
  };
  // end modal funcitons
  //
  // Function to add a new patient
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Button clicked");
    const payload = {
      name: name,
      age: age,
      phone: phone,
      diagnosis: diagnosis,
    };
    console.log("Payload:", payload);
    try {
      const res = await fetch("/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, phone, diagnosis }),
      });
      // if (res.ok) {
      //   console.log("Patient Added!");
      //   setTimeout(() => {
      //     toast.success("Patient added successfully!");
      //     setIsModalOpen(false);
      //   }, 2000);
      // }
      if (res.ok) {
        const newPatient = await res.json(); // Assuming the new patient data is returned from the API
        setPatients((prevPatients) => [...prevPatients, newPatient]);
        toast.success("Patient added successfully!");
        setIsModalOpen(false);
      }
    } catch (e: any) {
      console.log("Error:", e);
    }
  };
  // Loader component
  const Loader = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-primary"></div>
      </div>
    );
  };

  // Function to handle delete patient
  const handleDeleteClick = (patientId: string) => {
    setSelectedPatientId(patientId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedPatientId(null);
  };
  // Function to handle the delete confirmation
  const handleDeleteConfirm = async () => {
    if (selectedPatientId) {
      try {
        const res = await fetch(`/api/patients?id=${selectedPatientId}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setPatients((prevPatients) =>
            prevPatients.filter((patient) => patient._id !== selectedPatientId)
          );
          toast.success("Patient deleted successfully");
          closeDeleteModal();
        } else {
          console.error("Failed to delete patient");
        }
      } catch (error) {
        console.error("Error deleting patient:", error);
      }
    }
  };
  // Confirmation modal component
  const DeleteConfirmationModal = ({ onConfirm, onCancel }: any) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Confirm Delete</h2>
        </div>
        <p>Are you sure you want to delete this patient?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white p-2 rounded-lg mr-2"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-500 text-white p-2 rounded-lg"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      <Toaster richColors position="top-right" />
      <OrgLayout>
        <main className="bg-white w-full ">
          {isLoading && <Loader />}

          {/* Section to add Patient */}
          <section className="m-auto my-4 w-full gap-y-4 flex flex-col lg:flex-row justify-start lg:justify-evenly items-start lg:items-center">
            <h2 className="font-bold text-2xl text-black">All Patients</h2>
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
                  value={searchInput}
                  onChange={handleSearch}
                  required
                />
              </div>
            </form>

            <button
              onClick={handleModalToggle}
              className="bg-primary text-white p-1.5 px-2 rounded-md flex justify-start items-center gap-x-2"
            >
              <CirclePlus color="white" size={15} />
              Add a Patient
            </button>
          </section>
          {/* Table section */}
          <section className="m-auto my-4 w-full pb-10">
            <table {...getTableProps()} className="min-w-full leading-normal">
              <thead>
                {headerGroups.map(
                  (headerGroup: any, headerGroupIndex: number) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={`headerGroup-${headerGroupIndex}`}
                    >
                      {headerGroup.headers.map(
                        (column: any, columnIndex: number) => (
                          <th
                            {...column.getHeaderProps()}
                            key={`column-${columnIndex}`}
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                          >
                            {column.render("Header")}
                          </th>
                        )
                      )}
                    </tr>
                  )
                )}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row: any) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={row.original._id}>
                      {row.cells.map((cell: any) => (
                        <td
                          {...cell.getCellProps()}
                          key={cell.column.id}
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          {cell.column.id === "actions" ? (
                            <div className="relative">
                              <button
                                onClick={() =>
                                  toggleDropdown(row.original.generatedId)
                                }
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Actions
                              </button>
                              {row.original.isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                  <ul className="py-1 text-gray-700">
                                    <li>
                                      <Link
                                        href={`/patients/${row.original._id}`}
                                      >
                                        <button
                                          onClick={() =>
                                            handleActionClick(row.original._id)
                                          }
                                          className="flex justify-start w-full  px-4 py-2 hover:bg-gray-100"
                                        >
                                          Edit
                                        </button>
                                      </Link>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() =>
                                          handleActionClick(row.original._id)
                                        }
                                        className="flex justify-start w-full px-4 py-2 hover:bg-gray-100"
                                      >
                                        Preview
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() =>
                                          handleDeleteClick(row.original._id)
                                        }
                                        className="flex justify-start w-full px-4 py-2 hover:bg-gray-100"
                                      >
                                        Delete
                                      </button>

                                      {isDeleteModalOpen && (
                                        <DeleteConfirmationModal
                                          onConfirm={handleDeleteConfirm}
                                          onCancel={closeDeleteModal}
                                        />
                                      )}
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
                    className="flex items-center justify-center px-4 h-10 ms-0
                  leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                      className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                        pageNumber === pageIndex
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-500"
                      } border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-s-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
          {/*  */}
          {/* Modal to add new patient */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold ">Add Patient</h2>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleModalToggle}
                  >
                    <X />
                  </button>
                </div>
                {/* Add Patient form goes here */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="patient-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="patient-name"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      onChange={handleNameChange}
                      value={name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="patient-age"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      id="patient-age"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      onChange={handleAgeChange}
                      value={age}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="patient-phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="patient-phone"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="patient-diagnosis"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Diagnosis
                    </label>
                    <input
                      type="text"
                      id="patient-diagnosis"
                      className="block w-full p-2 border border-gray-300 rounded-lg"
                      value={diagnosis}
                      onChange={handleDiagnosis}
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
