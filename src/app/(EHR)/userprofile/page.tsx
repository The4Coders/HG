"use client";
import { useState } from "react";
import Layout from "../../components/layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar } from "@/components/ui/calendar";
import BarChartComponent from "@/components/ui/charts/BarChartComponent";
import AreaChartComponent from "@/components/ui/charts/AreaChartComponent";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const stepsData = [
  { name: "Steps Taken", value: 7000 },
  { name: "Steps Remaining", value: 3000 },
];

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDataSharingAccepted, setIsDataSharingAccepted] = useState(false);
  const [userStatus] = useState("Healthy"); // Example status
  const [userProfile] = useState({
    name: "John Doe",
    steps: [
      { day: "Day 1", steps: 1000 },
      { day: "Day 2", steps: 2000 },
      { day: "Day 3", steps: 3000 },
      { day: "Day 4", steps: 4000 },
      { day: "Day 5", steps: 5000 },
      { day: "Day 6", steps: 6000 },
      { day: "Day 7", steps: 7000 },
    ],
    periodNextDate: "2024-07-15",
    sedentaryReminders: ["10:00 AM", "2:00 PM", "4:00 PM"],
  });
  const healthData = [
    { day: "Day 1", healthScore: 80, healthMetric2: 60 },
    { day: "Day 2", healthScore: 85, healthMetric2: 65 },
    { day: "Day 3", healthScore: 75, healthMetric2: 70 },
    { day: "Day 4", healthScore: 90, healthMetric2: 75 },
    { day: "Day 5", healthScore: 70, healthMetric2: 80 },
    { day: "Day 6", healthScore: 95, healthMetric2: 85 },
    { day: "Day 7", healthScore: 85, healthMetric2: 90 },
    { day: "Day 8", healthScore: 80, healthMetric2: 75 },
    { day: "Day 9", healthScore: 85, healthMetric2: 70 },
    { day: "Day 10", healthScore: 75, healthMetric2: 65 },
  ];

  const handleDataSharingChange = () => {
    setIsDataSharingAccepted(!isDataSharingAccepted);
  };

  return (
    <main>
      <Layout>
        <main className="h-full bg-white w-full p-4 gap-4">
          <div className="bg-secondary-100 p-6 rounded-sm my-4 shadow">
            <h1 className="text-2xl font-bold mb-4">Hi, {userProfile.name}</h1>
            <section className="flex justify-between items-center my-2">
              <p className="text-lg mb-4">
                Status:{" "}
                <span className="bg-secondary p-2 px-1.5 rounded-lg text-md text-primary">
                  {userStatus}
                </span>
              </p>
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer font-bold text-primary underline">
                  How does this work?
                </HoverCardTrigger>
                <HoverCardContent className="bg-secondary">
                  Lorem ipsum dolor sit amet
                </HoverCardContent>
              </HoverCard>
            </section>
            <div className="mb-4">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="healthScore"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                  {/* <Line type="basis" dataKey="healthMetric2" stroke="#8884d8" /> */}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* calendar and fitness */}
          <section className="my-4 flex justify-between items-center">
            <h2 className="text-sm font-bold  text-primary">
              Here are a list of things you can do with Health Guardian 😊:
            </h2>
            <div className="mt-4 flex justify-start items-center gap-x-3">
              {/* <h2 className="text-xl font-semibold">Data Sharing</h2> */}
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isDataSharingAccepted}
                  onChange={handleDataSharingChange}
                  className="mr-2"
                />
                Accept data sharing from fitness apps
              </label>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 space-x-4">
            <div className="bg-secondary p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">
                Steps from Fitness App
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stepsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {stepsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/*  */}
            <div className="bg-secondary p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">
                Your Calories Count
              </h2>
              <div className="w-full h-80 p-4 flex justify-center items-center">
                <BarChartComponent />
              </div>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Period Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Next Period Date</h2>
                <p>{userProfile.periodNextDate}</p>
              </div>
            </div>
          </section>

          <div className="my-6 bg-secondary p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              More Features Coming Soon. <br /> Stay Tuned!😊
            </h2>
          </div>
        </main>
      </Layout>
    </main>
  );
}
