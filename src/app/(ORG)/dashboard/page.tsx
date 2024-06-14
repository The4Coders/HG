"use client";

import OrgLayout from "@/app/components/orgLayout";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  HeartPulse,
  Hospital,
  PersonStanding,
} from "lucide-react";

export default function Page() {
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
          <h2>WIP</h2>
        </main>
      </OrgLayout>
    </main>
  );
}
