// pages/call.js

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Room from "../room/page";

const activities = [
  {
    name: "Ronnie Fleming",
    date: "Sep 18",
    time: "9:00 AM",
    summary: "Consultation, prescription of medicines",
  },
  {
    name: "Jane Moss",
    date: "Sep 2",
    time: "10:00 AM",
    summary: "Counseling Psychology",
    repeat: true,
  },
  {
    name: "John Greene",
    date: "Aug 24",
    time: "10:30 AM",
    summary: "Eating Plan Diet",
  },
];

const Call = () => {
  return (
    <div className="bg-[#e0f2f1] min-h-screen">
      <header className="bg-[#045357] text-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
          <h1 className="text-lg">Virtual Meeting Dashboard</h1>
          <Image
            src="/user.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </header>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <Room />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg text-[#045357] mb-4">Last activity</h2>
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4"
              >
                <Image
                  src="/profilePic.jpg"
                  alt={activity.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p className="flex-grow mx-2 text-[#045357] min-w-[120px]">
                  {activity.name}
                </p>
                <p className="min-w-[80px] text-[#004d40]">{activity.date}</p>
                <p className="min-w-[80px] text-[#004d40]">{activity.time}</p>
                <p className="flex-grow mx-2 min-w-[160px] text-[#004d40]">
                  {activity.summary}
                </p>
                <button
                  className={`py-2 px-4 rounded ${
                    activity.repeat ? "bg-pink-500" : "bg-[#045357]"
                  } text-white`}
                >
                  {activity.repeat ? "Repeat" : "Get info"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-lg text-[#045357] mb-2">
              Next Meeting: 28 Dec, 2023
            </h2>
            <p className="text-sm text-[#004d40] mb-2">
              Discussion of blood test results and discussion of well-being.
              Prescribing medications.
            </p>
            <button className="bg-[#045357] text-white py-2 px-4 rounded">
              More details
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-lg text-[#045357] mb-2">Quote of the Day</h2>
            <p className="text-sm text-[#004d40]">
              &quot;Let thy food be thy medicine and thy medicine be thy
              food.&quot; - Hippocrates
            </p>
          </div>
          <div>
            <h2 className="text-lg text-[#045357] mb-2">40% off premium</h2>
            <p className="text-sm text-[#004d40] mb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when.
            </p>
            <button className="bg-pink-500 text-white py-2 px-4 rounded">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
