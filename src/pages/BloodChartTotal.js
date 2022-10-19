import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/sidebar.css'

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
      .get("http://localhost:3001/total")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

    return (
      <div className="container">
        <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h1 className="sidebarTitle">통계</h1>
            <ui className="sidebarCircle">
            <ul className="sidebarList">
              <a className="href" href="BloodChart"> <li className="sidebarListItem active">인구별</li></a>&nbsp;
              <a className="href" href="BloodChart"><li className="sidebarListItem">지역별</li></a>&nbsp;
              <a className="href" href="BloodChart"><li className="sidebarListItem">월별</li></a>&nbsp;
              <a className="href" href="BloodChart"><li className="sidebarListItem">혈액형별</li></a>&nbsp;
              <a className="href" href="BloodChart"><li className="sidebarListItem">연령별</li></a>
            </ul>
            </ui>
          </div>
        </div>
      </div>
        <div className="others"> <BarChart
      width={1800}
      height={600}
      data={data}
      margin={{
        top: 30,
        right: 10,
        left: 100,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="ITM_NM" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis type="number" domain={[0, 60000000]} />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="DT" fill="#9ACD32" background={{ fill: "#eee" }} />
    </BarChart>
</div>
      </div>
    );
}