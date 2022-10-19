import title from "../imgs/title_icon.png";
import React from "react";

function Menu() {
  return (
    <div id="container">
      <div id="left">
        <a id="logo" href="/">
          <img src={title} alt="title" width="60%"></img>
        </a>
      </div>

      <div id="center">
        <div>
          <li id="dropDown1">
            QnA
            <li>
              <a id="dropList" href="BloodChart">
                헌혈지식
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChart">
                지정헌혈이란?
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChart">
                자주묻는 질문
              </a>
            </li>
          </li>
        </div>

        <div>
          <li id="dropDown2">
            Stats
            <li>
              <a id="dropList" href="BloodChartTotal">
                인구별 통계
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartLoc">
                지역별 통계
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartMonth">
                월별 통계
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartBloodType">
                혈액형별 통계
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartAge">
                연령별 통계
              </a>
            </li>
          </li>
        </div>

        <div>
          <li id="dropDown3">
            Loc
            <li>
              <a id="dropList" href="BloodHouse">
                헌혈의집 위치
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartMonth">
                헌혈카페 위치
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartAge">
                혈액원 위치
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodChartBloodType">
                지정병원 위치
              </a>
            </li>
            <li>
              <a
                id="dropList"
                href="https://www.bloodinfo.net/emi2/login.do?_ga=2.39216416.228213102.1665420166-706548427.1664875489"
                target="_blank"
                rel="noreferrer"
              >
                전자문진
              </a>
            </li>
          </li>
        </div>

        <div>
          <li id="dropDown4">
            Board
            <li>
              <a id="dropList" href="Post">
                전체 게시판
              </a>
            </li>
            <li>
              <a id="dropList" href="Post">
                혈액형별 게시판
              </a>
            </li>
            <li>
              <a id="dropList" href="Post">
                지역별 게시판
              </a>
            </li>
          </li>
        </div>

        <div>
          <li id="dropDown5">
            Portal
            <li>
              <a
                id="dropList"
                href="https://redcross.or.kr/main/main.do"
                target="_blank"
                rel="noreferrer"
              >
                대한적십자사
              </a>
            </li>
            <li>
              <a
                id="dropList"
                href="https://www.vms.or.kr/main.do"
                target="_blank"
                rel="noreferrer"
              >
                VMS
              </a>
            </li>
            <li>
              <a
                id="dropList"
                href="https://www.bloodnet.or.kr/"
                target="_blank"
                rel="noreferrer"
              >
                한마음 혈액원
              </a>
            </li>
          </li>
        </div>
      </div>

      <div id="right">
        <a id="login1" href="Login">
          Login
        </a>
        <a id="login2" href="Register">
          Logout
        </a>
        <a id="login3" href="Register">
          Mypage
        </a>
      </div>
    </div>
  );
}

export default Menu;
