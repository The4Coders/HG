"use client"
import { useState } from "react";
import Layout from "../../components/layout";
import { Calendar } from "@/components/ui/calendar";
import { Home, Plus } from "lucide-react";
import Link from "next/link";
import { Toaster, toast } from 'sonner'
export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [upcomingAppointments] = useState([
    { id: 1, date: "2024-06-15", time: "10:00 AM", doctor: "Dr. John Doe", type: "Consultation" },
    { id: 2, date: "2024-06-18", time: "11:00 AM", doctor: "Dr. Samantha Stone", type: "Therapist" },
  ]);

  const [previousMeetings]  = useState([
    { id: 1, date: "2024-05-20", doctor: "Dr. Jane Smith", summary: "Routine checkup.",diagnosis: "Common cold", prescription: "Antibiotics and rest" },
  ]);
  return (
    <main>
      <Layout>
      <Toaster position="top-right" richColors/>
        <div className="h-full bg-white w-full p-4">
          <h1 className="text-2xl font-bold mb-4">Appointments</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2 bg-accent p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Schedule</h2>
              <section className="flex flex-row justify-between">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="flex flex-col space-y-4">
              <aside className="flex flex-row gap-x-3">
              <Link href="#">
             <div className="w-60 h-32 cursor-pointer border-2 shadow-md bg-[#2E8B57] text-white rounded-lg flex flex-col p-2">
                <div className="w-10 h-10  border-2 rounded-full ml-auto bg-white flex justify-center items-center">
                <Plus color="green" fill="primary" />
                </div>
                <p className="ms-3 my-2 font-bold ">Make a Clinic <br/> Appointment</p>
             </div>
             </Link>
             <Link href="/tele">
             <div className="w-60 h-32 cursor-pointer border-2 shadow-md bg-[#00BFFF] text-white rounded-lg flex flex-col p-2">
                <div className="w-10 h-10  border-2 rounded-full ml-auto bg-white flex justify-center items-center">
                <Home color="blue"  />
                </div>
                <p className="ms-3 my-2 font-bold ">Book an Online <br/> Appointment</p>
             </div>
             </Link>
              </aside>
              <aside>
                <h2 className="text-lg font-bold">Remainders</h2>
                <ul className="text-md space-y-1 font-semibold w-full p-3 shadow rounded-md">
                    <li>Go jogging</li>
                    <li>Drink Water</li>
                    <li>Eat fruits</li>
                    <li>Avoid Egg</li>
                </ul>
              </aside>

              </div>
              </section>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <div className="flex flex-col space-y-2 mt-2">
                  <button className="bg-[#367588] text-white px-4 py-2 rounded-lg shadow-md">
                    Request Prescription Refill
                  </button>
                  <button onClick={() => toast.success('Your Complete Medical Histroy has been sent to your email!')} className="bg-[#367588] text-white px-4 py-2 rounded-lg shadow-md">
                    View Medical History
                  </button>
                  <button className="bg-[#367588] text-white px-4 py-2 rounded-lg shadow-md">
                  <Link href="/contactus" className="w-full">
                    Contact Support
                  </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-accent p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
              <ul>
                {upcomingAppointments.map((appointment) => (
                  <li key={appointment.id} className="mb-2">
                    <div className="p-4  bg-accent space-y-3 shadow-md rounded-lg">
                      <p><strong>Date:</strong> {appointment.date}</p>
                      <p><strong>Time:</strong> {appointment.time}</p>
                      <p><strong>Doctor:</strong> {appointment.doctor}</p>
                      <p><strong>Type:</strong> {appointment.type}</p>
                      <button className="mt-2 bg-primary text-white px-4 py-1 rounded">
                        Reschedule
                      </button>
                      <button className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded">
                        Cancel
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-accent p-4 rounded-lg ">
            <h2 className="text-xl font-semibold mb-4">Previous Meetings</h2>
            <ul>
              {previousMeetings.map((meeting) => (
                 <li key={meeting.id} className="mb-4 text-lg">
                 <div className="p-4 rounded-lg space-y-4">
                   <p><strong>Date:</strong> {meeting.date}</p>
                   <p><strong>Doctor:</strong> {meeting.doctor}</p>
                   <p><strong>Summary:</strong> {meeting.summary}</p>
                    <p className="mt-2"><strong>Diagnosis:</strong> {meeting.diagnosis}</p>
                    <p className="mt-2"><strong>Prescription:</strong> {meeting.prescription}</p>
                 </div>
               </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-accent p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Last Met Doctor</h2>
            <div className="space-y-4">

            <p className="text-lg"><strong>Name:</strong> Dr. Jane Smith</p>
            <p className="text-lg"><strong>Specialty:</strong> General Practitioner</p>
            <p className="text-lg"><strong>Contact:</strong> (555) 123-4567</p>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
