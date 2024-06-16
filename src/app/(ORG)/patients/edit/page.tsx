"use client";

import OrgLayout from "@/components/orgLayout";
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
        </main>
      </OrgLayout>
    </main>
  );
}
