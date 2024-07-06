"use client";

import BarChartComponent from "@/components/charts/BarChartComponent";
import OrgLayout from "@/components/orgLayout";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  EllipsisVertical,
  HeartPulse,
  Hospital,
  PersonStanding,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main>
      <OrgLayout>
        <main className=" bg-white w-full">
          {/* cards */}
          <section className="flex flex-col gap-y-3 md:flex-row justify-start items-center gap-x-3 pe-3 my-3">
            {/* card 1 */}
            <div className="bg-[#CC5B5B] space-y-1 px-3 py-1.5 w-full md:w-[26%] h-[190px] rounded-md">
              <div className="mb-5 w-14 h-14 flex justify-center items-center p-2 rounded-full">
                <HeartPulse color="white" size={40} />
              </div>
              <div className="space-y-1">
                <h2 className="text-white font-bold text-2xl">
                  Total Patients
                </h2>
                <h2 className="text-white font-bold text-2xl">346</h2>

                <h4 className="text-white flex justify-start items-center gap-x-2">
                  <span className="text-white">
                    <ArrowUp color="white" size={15} />
                  </span>
                  (14.25%)
                </h4>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-[#71AA62] space-y-1 px-3 py-1.5 w-full md:w-[26%] h-[190px] rounded-md">
              <div className="mb-5 w-14 h-14 flex justify-center items-center p-2 rounded-full">
                <PersonStanding color="white" size={40} />
              </div>
              <div className="space-y-1">
                <h2 className="text-white font-bold text-2xl">
                  Patients Visited
                </h2>
                <h2 className="text-white font-bold text-2xl">146</h2>
                <h4 className="text-white flex justify-start items-center gap-x-2">
                  <span className="text-white">
                    <ArrowDown color="white" size={15} />
                  </span>
                  (4.78%)
                </h4>
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-[#4C9EA3] space-y-1 px-3 py-1.5 w-full md:w-[26%] h-[190px] rounded-md">
              <div className="mb-5 w-14 h-14 flex justify-center items-center p-2 rounded-full">
                <Hospital color="white" size={40} />
              </div>
              <div className="space-y-1">
                <h2 className="text-white font-bold text-2xl">New Admit</h2>
                <h2 className="text-white font-bold text-2xl">14</h2>
                <h4 className="text-white flex justify-start items-center gap-x-2">
                  <span className="text-white">
                    <ArrowUp color="white" size={15} />
                  </span>
                  (18.32%)
                </h4>
              </div>
            </div>
            {/* card 4 */}
            <div className="bg-[#5E46A3] space-y-1 px-3 py-1.5 w-full md:w-[26%] h-[190px] rounded-md">
              <div className="mb-5 w-14 h-14 flex justify-center items-center p-2 rounded-full">
                <Activity color="white" size={40} />
              </div>
              <div className="space-y-1">
                <h2 className="text-white font-bold text-2xl">
                  Patients Discharged
                </h2>
                <h2 className="text-white font-bold text-2xl">24</h2>
                <h4 className="text-white flex justify-start items-center gap-x-2">
                  <span className="text-white">
                    <ArrowUp color="white" size={15} />
                  </span>
                  (7.2%)
                </h4>
              </div>
            </div>
          </section>
          {/* other section */}
          <section className="border-2 justify-between my-4 flex flex-col md:flex-row gap-y-3 items-center gap-x-3 pe-3">
            <div className="w-[60%] p-3">
              <p className="text-black font-semibold mb-4 text-xl ">Patients</p>

              <div className="w-full h-80 flex flex-col justify-center items-center">
                <BarChartComponent />
              </div>
            </div>
            <div className="ms-6 w-[30%] p-3">
              <p className="ms-4 my-4 text-black font-semibold text-xl ">
                Upcoming Appointments
              </p>

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-full"
              />
            </div>
            <div></div>
          </section>
          {/* 2nd section */}
          <section className="border-2 justify-between my-4 flex flex-col md:flex-row gap-y-3 items-center gap-x-3 pe-3">
            <div className="space-y-4 w-[60%] p-3 ps-4">
              <div className="px-4 py-3 mb-4 w-full h-80 ">
                <div className="flex justify-between items-center">
                  <p className="text-black font-semibold text-lg">
                    Omojola Zion
                  </p>
                  <p>Antental</p>
                  <p>Female</p>
                  <p>June 14, 2024 </p>
                  <p>9:30pm</p>
                  <button className="ms-4 bg-[#11814B33] rounded-lg px-2 py-1.5">
                    Approved
                  </button>
                  <button className="p-2 bg-gray-100 rounded-md">
                    <EllipsisVertical />
                  </button>
                </div>
                {/*  */}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-black font-semibold text-lg">
                    Oladele Olekan
                  </p>
                  <p>Checkup</p>
                  <p>Female</p>
                  <p>June 14, 2024 </p>
                  <p>9:30pm</p>
                  <button className="bg-[#BF670033] text-[#BF6700] rounded-lg px-2 py-1.5">
                    Pending
                  </button>
                  <button className="p-2 bg-gray-100 rounded-md">
                    <EllipsisVertical />
                  </button>
                </div>
                {/*  */}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-black font-semibold text-lg">
                    Daniel Thomas
                  </p>
                  <p>Checkup</p>
                  <p>Female</p>
                  <p>June 14, 2024 </p>
                  <p>9:30pm</p>
                  <button className="bg-[#BF670033] text-[#BF6700] rounded-lg px-2 py-1.5">
                    Pending
                  </button>
                  <button className="p-2 bg-gray-100 rounded-md">
                    <EllipsisVertical />
                  </button>
                </div>
                {/*  */}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-black font-semibold text-lg">
                    Ekene Philip
                  </p>
                  <p>Antental</p>
                  <p>Female</p>
                  <p>June 14, 2024 </p>
                  <p>9:30pm</p>
                  <button className=" ms-4 bg-[#11814B33] rounded-lg px-2 py-1.5">
                    Approved
                  </button>
                  <button className="p-2 bg-gray-100 rounded-md">
                    <EllipsisVertical />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[28%] h-auto shadow-md p-3">
              <Image src="/appointments.jpg" alt="" width={800} height={800} />
            </div>
            <div></div>
          </section>
        </main>
      </OrgLayout>
    </main>
  );
}
