// "use client"


// import { CartesianGrid, LineChart, XAxis, YAxis } from "recharts";


// const data = [
//     {value: 12, data: "2024-12-23"},
//     {value: 25, data: "2024-12-23"},
//     {value: 31, data: "2024-12-23"},
"use client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]

export default function  renderLinehart() {
  return (
    <main className='mt-3'>
  <LineChart width={540} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </main>
  )
}