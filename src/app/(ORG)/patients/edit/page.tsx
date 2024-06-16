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

export default function Page() {
  return (
    <main>
      <OrgLayout>
        <main className=" bg-white w-full">
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
          <section className="px-8 mt-8  flex flex-row justify-between w-full ">
            {/* edit patient */}
            <div className="w-[35%] shadow rounded-md p-8">
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
            <div className="p-8 w-[60%] shadow rounded-md h-auto">
              {/* title */}
              <div className="flex mb-8 justify-between items-center">
                <h2 className=" text-xl font-bold">Observations</h2>
                <h2 className="underline text-xl font-bold">Add</h2>
              </div>
              <section className="space-y-5">
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <h2 className="text-xl text-black">
                    She is doing okay now, she can be relaeased
                  </h2>
                  <div className="gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>Dr. Akin George</h2>
                    <h2>7/May/2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <h2 className="text-xl text-black">
                    She is doing okay now, she can be relaeased
                  </h2>
                  <div className="gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>Dr. Akin George</h2>
                    <h2>7/May/2024</h2>
                  </div>
                </div>
                {/*  */}
                <div className="border-b border-b-gray-400 ">
                  <h2 className="text-xl text-black">
                    She is doing okay now, she can be relaeased
                  </h2>
                  <div className="gap-y-3 space-y-2 text-gray-400 text-lg flex justify-between items-center">
                    <h2>Dr. Akin George</h2>
                    <h2>7/May/2024</h2>
                  </div>
                </div>
              </section>
            </div>
          </section>
          {/* test report and prescriptions sections */}
          <section className="mt-6"></section>
        </main>
      </OrgLayout>
    </main>
  );
}
