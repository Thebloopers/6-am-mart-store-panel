import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 800,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 0,
    pv: 9800,
    amt: 0,
  },
  {
    name: "Apr",
    uv: 0,
    pv: 3908,
    amt: 0,
  },
  {
    name: "May",
    uv: 0,
    pv: 4800,
    amt: 0,
  },
  {
    name: "Jun",
    uv: 0,
    pv: 3800,
    amt: 0,
  },
  {
    name: "Jul",
    uv: 0,
    pv: 4300,
    amt: 0,
  },
  {
    name: "Aug",
    uv: 0,
    pv: 4300,
    amt: 0,
  },
  {
    name: "Sep",
    uv: 0,
    pv: 4300,
    amt: 0,
  },
  {
    name: "Oct",
    uv: 0,
    pv: 4300,
    amt: 0,
  },
  {
    name: "Nov",
    uv: 0,
    pv: 4300,
    amt: 0,
  },
  {
    name: "Dec",
    uv: 0,
    pv: 4300,
    amt: 0,
  },
];

export default function Chart() {
  return (
    <AreaChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
