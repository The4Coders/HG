"use client";
import Header from "./header";
import OrgSideNav from "./orgSideNav";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const OrgLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <OrgSideNav />
        <main className="w-full overflow-x-auto ">
          <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
            <div className="w-full flex justify-center mx-auto  overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
              <div className="w-full ">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default OrgLayout;
