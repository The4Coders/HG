// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   TooltipProps,
// } from "recharts";

// const salesData = [
//   {
//     name: "Jan",
//     revenue: 4000,
//     profit: 2400,
//   },
//   {
//     name: "Feb",
//     revenue: 3000,
//     profit: 1398,
//   },
//   {
//     name: "Mar",
//     revenue: 9800,
//     profit: 2000,
//   },
//   {
//     name: "Apr",
//     revenue: 3908,
//     profit: 2780,
//   },
//   {
//     name: "May",
//     revenue: 4800,
//     profit: 1890,
//   },
//   {
//     name: "Jun",
//     revenue: 3800,
//     profit: 2390,
//   },
// ];

// const BarChartComponent = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <BarChart
//         width={500}
//         height={300}
//         data={salesData}
//         margin={{
//           right: 30,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip content={<CustomTooltip />} />
//         <Legend />
//         <Bar dataKey="revenue" fill="#2563eb" />
//         <Bar dataKey="profit" fill="#8b5cf6" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarChartComponent;

// interface CustomTooltipProps extends TooltipProps<number, string> {}

// const CustomTooltip: React.FC<CustomTooltipProps> = ({
//   active,
//   payload,
//   label,
// }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
//         <p className="text-medium text-lg">{label}</p>
//         <p className="text-sm text-blue-400">
//           Alive Patients:
//           <span className="ml-2">{payload[0].value}</span>
//         </p>
//         <p className="text-sm text-indigo-400">
//           Lost:
//           <span className="ml-2">{payload[1].value}</span>
//         </p>
//       </div>
//     );
//   }
// };
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const salesData = [
  {
    name: "Jan",
    survived: 4000,
    lost: 2400,
  },
  {
    name: "Feb",
    survived: 3000,
    lost: 1398,
  },
  {
    name: "Mar",
    survived: 9800,
    lost: 2000,
  },
  {
    name: "Apr",
    survived: 3908,
    lost: 2780,
  },
  {
    name: "May",
    survived: 4800,
    lost: 1890,
  },
  {
    name: "Jun",
    survived: 3800,
    lost: 2390,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="survived" fill="#2563eb" />
        <Bar dataKey="lost" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

interface CustomTooltipProps extends TooltipProps<number, string> {}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Survived:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Lost:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }

  return null;
};
