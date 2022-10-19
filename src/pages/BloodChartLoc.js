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
      .get("http://localhost:3001/loc")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="centerContainer">
      <div className="container">
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h1 className="sidebarTitle">통계</h1>
              <ui className="sidebarCircle">
                <ul className="sidebarList">
                  <a className="href" href="BloodChartTotal">
                    {" "}
                    <li className="sidebarListItem">인구별</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodChartLoc">
                    <li className="sidebarListItem active">지역별</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodChartMonth">
                    <li className="sidebarListItem">월별</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodChartBloodType">
                    <li className="sidebarListItem">혈액형별</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodChartAge">
                    <li className="sidebarListItem">연령별</li>
                  </a>
                </ul>
              </ui>
            </div>
          </div>
        </div>
        <div className="others">
        <div id="chart2">
          <BarChart
            width={1500}
            height={600}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 400,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="C1_NM"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="DT" fill="#F4A460" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    </div>
    </div>
  );
  

}

 
