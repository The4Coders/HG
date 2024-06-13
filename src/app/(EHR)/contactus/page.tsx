"use client";
import { useState } from "react";
import Layout from "../../components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const toggleAccordion = (accordionId: string) => {
    setActiveAccordion((prevAccordionId) =>
      prevAccordionId === accordionId ? null : accordionId
    );
  };
  return (
    <main>
      <Layout>
        <div className=" bg-white w-full p-4">
          <h1 className="text-2xl font-bold mb-4">Support</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 bg-accent p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">FAQs</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:none">
                    How do i book an appointment?
                  </AccordionTrigger>
                  <AccordionContent>
                    Log in to your account, navigate to the appointment page and
                    Choose between online or physical appointments.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:none">
                    Is my health information secure within the system?
                  </AccordionTrigger>
                  <AccordionContent>
                    We prioritize your health information&apos;s security with
                    strong encryption and strict HIPAA compliance. Your data is
                    confidentially handled and protected, ensuring your privacy
                    and trust.&rdquo;
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:none">
                    Can I request prescription refills through the system?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely, navigate to your patient dashboard and selcet a
                    Refill.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:none">
                    How can I update my personal information in the system?
                  </AccordionTrigger>
                  <AccordionContent>
                    On your dashboard, navigate to settings and select update
                    profile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:none">
                    What should I do if I need to reschedule or cancel an
                    appointment?
                  </AccordionTrigger>
                  <AccordionContent>
                    To reschedule or cancel an appointment, go to your
                    appointment section and select the appointment. Then, choose
                    the reschedule or cancel option. If you have any questions,
                    contact support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:none">
                    How do I access my medical records?
                  </AccordionTrigger>
                  <AccordionContent>
                    Log in to your account and navigate to the medical records
                    section. Select it and your records will be sent directly to
                    you email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="col-span-1 bg-accent p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Video Tutorial</h2>
              <div className="w-full h-[400px] rounded-md">
                <iframe
                  className="rounded-md"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TfkHrvct1hg?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-span-2 bg-accent p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
              <p className="text-gray-700">
                Questions or feedback? Email us at the4coders@gmail.com.
                We&rsquo;re here to help!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
