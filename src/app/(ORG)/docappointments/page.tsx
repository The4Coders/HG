import OrgLayout from "@/components/orgLayout";
import React from "react";
export default function page() {
  return (
    <main>
      <OrgLayout>
        <main className=" bg-white w-full flex flex-col m-auto justify-center items-center">
          <h2 className="font-semibold mt-40 text-4xl text-center">
            This page is coming soon!
          </h2>
          <p className="text-xl text-primary">
            A list of all the online appointments, home appointments and in
            person appointments...etc :)
          </p>
        </main>
      </OrgLayout>
    </main>
  );
}
