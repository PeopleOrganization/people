import React from 'react';
import axios from 'axios';



import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const age = () => {
    axios.get('https://gist.githubusercontent.com/ksmlmj18/8bfbf93476f093356378b7a4e9d09f9a/raw/8f04af9b1755d446570a5a97a99586cc9ff11f25/total.json')
        .then((res) => {
            console.log(res);
        })
}
    
const data = age;

export default function App() {
  return (
    <BarChart
      width={1200}
      height={600}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="합계" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="6~19세" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}

 

