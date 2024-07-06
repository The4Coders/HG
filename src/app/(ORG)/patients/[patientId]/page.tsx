"use client";

import Logo from "@/components/logo";
import OrgLayout from "@/components/orgLayout";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface PageParams {
  // Define your type for params here if needed
}

export default function Page() {
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    console.log("ID:", id);

    if (!id) {
      console.log("ID not available yet");
      return;
    }

    console.log("ID is available:", id);

    const getPatientById = async () => {
      try {
        console.log("Fetching patient data...");
        const res = await fetch(`/api/patients/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch Patient", res.statusText);
          throw new Error("Failed to fetch Patient");
        }

        const data = await res.json();
        console.log("Patient Data:", data);
        setPatientData(data);
      } catch (e: any) {
        console.error("Error loading patient:", e.message);
        setError("Error loading patient: " + e.message);
      }
    };

    if (id) {
      getPatientById();
    }
  }, [id]);

  return (
    <main>
      <OrgLayout>
        <main className="bg-white w-full">
          {" "}
          {/* Section Patient Name */}
          <section className="mt-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/patients" className="text-xl">
                    Patient
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-xl">John Doe</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </section>
          {/* patient */}
          <section className="px-8 mt-8 gap-y-6  flex flex-col lg:flex-row justify-between w-full ">
            {/* edit patient */}
            <div className="w-full lg:w-[38%] shadow rounded-md p-8">
              <section className="mt-6 flex justify-start gap-x-6 items-center">
                {/* logo here */}
                <div className="w-14 h-14 flex justify-center items-center rounded-full">
                  <Image
                    src="/user.jpg"
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-black">John Doe</h2>
                  <p className="text-black text-lg">ID: EHR205</p>
                </div>
              </section>
              <div className="mt-8 w-full flex gap-x-14">
                <div>
                  <p className="text-black text-lg font-semibold">Status:</p>
                  <p className="text-black text-lg font-semibold">Gender:</p>
                  <p className="text-black text-lg font-semibold">
                    {" "}
                    Blood Group:
                  </p>
                  <p className="text-black text-lg font-semibold">Weight:</p>
                  <p className="text-black text-lg font-semibold">Height:</p>
                  <p className="text-black text-lg font-semibold">Genotype:</p>
                </div>
                <div>
                  <p className="text-black text-lg">Discharged</p>
                  <p className="text-black text-lg">Male</p>
                  <p className="text-black text-lg">AA</p>
                  <p className="text-black text-lg">65KG</p>
                  <p className="text-black text-lg">1.6m</p>
                  <p className="text-black text-lg">O+</p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button className=" mt-8 font-bold text-white bg-primary p-1.5 px-4 rounded-md">
                  Edit Patient Profile
                </button>
              </div>
            </div>
            {/* observations */}
            <div className="p-8 w-full lg:w-[60%] shadow rounded-md h-auto">
              {/* title */}
              <div className="flex mb-8 justify-between items-center">
                <h2 className=" text-xl font-bold">Observations</h2>
              </div>
              <section className="space-y-5">
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <h2 className="text-xl text-black">
                    She is doing okay now, she can be relaeased
                  </h2>
                  <div className="gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>From: Dr. Akin George</h2>
                    <h2>7/May/2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <h2 className="text-xl text-black">
                    She is doing okay now, she can be relaeased
                  </h2>
                  <div className="gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>From: Dr. Akin George</h2>
                    <h2>7/May/2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <h2 className="text-xl text-black">
                    She is doing okay now, she can be relaeased
                  </h2>
                  <div className="gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>From: Dr. Akin George</h2>
                    <h2>7/May/2024</h2>
                  </div>
                </div>
              </section>
            </div>
          </section>
          {/* test report and prescriptions sections */}
          <section className="px-8 mt-6 flex flex-col lg:flex-row justify-between w-full">
            {/* test reports */}
            <div className="p-8 w-full lg:w-[38%] shadow rounded-md h-auto">
              {/* title */}
              <div className="flex mb-8 justify-between items-center">
                <h2 className=" text-xl font-bold">Test Reports</h2>
                <h2 className=" text-xl font-bold border-b-2 border-black">
                  Add
                </h2>
              </div>
              <section className="space-y-5">
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-black">Blood Test</h2>
                    <button className="px-4 py-2 border rounded-lg">
                      View
                    </button>
                  </div>
                  <div className="mb-4 gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>3rd June 2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-black">CT Scan(Abdomen)</h2>
                    <button className="px-4 py-2 border rounded-lg">
                      View
                    </button>
                  </div>
                  <div className="mb-4 gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>3rd May 2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-black">Pathology Test</h2>
                    <button className="px-4 py-2 border rounded-lg">
                      View
                    </button>
                  </div>
                  <div className="mb-4 gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>4th June 2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-black">Eye Test</h2>
                    <button className="px-4 py-2 border rounded-lg">
                      View
                    </button>
                  </div>
                  <div className="mb-4 gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>3rd June 2024</h2>
                  </div>
                </div>
              </section>
              <p className="pb-8 cursor-pointer flex justify-center items-center text-xl text-center text-black font-bold border-b ">
                View all reports <ArrowRight />
              </p>
            </div>
            {/* prescriptions */}
            <div className="p-8 w-full lg:w-[60%] shadow rounded-md h-auto">
              {/* title */}
              <div className="flex mb-8 justify-between items-center">
                <h2 className=" text-xl font-bold">Prescriptions</h2>
                <h2 className=" text-xl font-bold border-b border-b-black cursor-pointer">
                  Add
                </h2>
              </div>
              <section className="space-y-5">
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="text-xl text-black">
                      Urinary Trac Infections:
                    </h2>
                    <h2 className="text-xl text-black">2weeks</h2>
                  </div>
                  <div className="mt-8 mb-8 gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between">
                    <div className="w-[30%]">
                      <h2 className="text-xl font-semibold text-black">
                        Medications:
                      </h2>
                    </div>
                    <div className="w-[30%]">
                      <h2 className="text-lg text-gray-400">Usbesikan Syrup</h2>
                      <h2 className="text-lg text-gray-400">Usbesikan Syrup</h2>
                      <h2 className="text-lg text-gray-400">Usbesikan Syrup</h2>
                    </div>
                    <div className="flex flex-col ml-auto w-[30%]">
                      <h2 className="ml-auto text-lg text-gray-400">1-1</h2>
                      <h2 className="ml-auto text-lg text-gray-400">1-1</h2>
                      <h2 className="ml-auto text-lg text-gray-400">1-1</h2>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-xl text-black">
                    Urinary Trac Infections:
                  </h2>
                  <h2 className="text-xl text-black">2weeks</h2>
                </div>
                <div className="mt-8 gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between">
                  <div className="w-[30%]">
                    <h2 className="text-xl font-semibold text-black">
                      Medications:
                    </h2>
                  </div>
                  <div className="w-[30%]">
                    <h2 className="text-lg text-gray-400">Usbesikan Syrup</h2>
                    <h2 className="text-lg text-gray-400">Usbesikan Syrup</h2>
                    <h2 className="text-lg text-gray-400">Usbesikan Syrup</h2>
                  </div>
                  <div className="flex flex-col ml-auto w-[30%]">
                    <h2 className="ml-auto text-lg text-gray-400">1-1</h2>
                    <h2 className="ml-auto text-lg text-gray-400">1-1</h2>
                    <h2 className="ml-auto text-lg text-gray-400">1-1</h2>
                  </div>
                </div>
                {/*  */}
              </section>
            </div>
          </section>
        </main>
      </OrgLayout>
    </main>
  );
}
