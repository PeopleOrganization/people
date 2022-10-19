import React, { useState, useEffect } from 'react';
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




export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Month")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <BarChart
      width={1500}
      height={600}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 400,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="C2_NM" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="DT" fill="#9ACD32" background={{ fill: "#eee" }} />
    </BarChart>
  );
  

}

 
