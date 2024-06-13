"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";

const productSales = [
  {
    name: "",
    BloodPressure: 4000,
    HeartRate: 2400,
  },
  {
    name: "",
    BloodPressure: 3000,
    HeartRate: 2210,
  },
  {
    name: "",
    BloodPressure: 2000,
    HeartRate: 2290,
  },
  {
    name: "",
    BloodPressure: 2780,
    HeartRate: 2000,
  },
  {
    name: "",
    BloodPressure: 1890,
    HeartRate: 2181,
  },
  {
    name: "",
    BloodPressure: 2390,
    HeartRate: 2500,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="BloodPressure"
          stroke="#2563eb"
          fill="#FF3333"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="HeartRate"
          stroke="#7c3aed"
          fill="#87CEFA"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
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
          Blood Pressure:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-red-400">
          Heart Rate:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
