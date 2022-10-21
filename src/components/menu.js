/* eslint-disable jsx-a11y/anchor-is-valid */
import title from "../imgs/title_icon.png";
import React, { useEffect } from "react";
import { useState } from "react";

function Menu() {
  const [login,setLogin] = useState("login1");
  const [logout,setLogout] = useState("login0");
  

  const check3 = () => { 
    sessionStorage.clear(); //로그아웃 시 모든 세션 삭제
  }

  const check2 = () => {
    if(sessionStorage.getItem("check") === ("login")) {
      setLogin("login0");
      setLogout("login1")
    }else{
      setLogin("login1");
      setLogout("login0")
    }
  }

  const checkMy = () => {
    if(sessionStorage.getItem("check") === ("login")) {
      document.location.href = '/MyPage';
    }else {
      alert("로그인 후 사용가능합니다.");
      document.location.href = '/';
    }
  }

  useEffect(()=>{
    check2();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sessionStorage.getItem("check")])
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
            Q&A
            <li>
              <a id="dropList" href="QnAKnowledge">
                헌혈지식
              </a>
            </li>
            <li>
              <a id="dropList" href="QnADesignated">
                지정헌혈이란?
              </a>
            </li>
            <li>
              <a id="dropList" href="QnAQuestion">
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
              <a id="dropList" href="BloodCafe">
                헌혈카페 위치
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodBank">
                혈액원 위치
              </a>
            </li>
            <li>
              <a id="dropList" href="BloodHospital">
                지정병원 위치
              </a>
            </li>
          </li>
        </div>

        <div>
          <li id="dropDown4">
            Board
            <li>
              <a id="dropList" href="Board">
                전체 게시판
              </a>
            </li>
            <li>
              <a id="dropList" href="BoardBloodType">
                혈액형별 게시판
              </a>
            </li>
            <li>
              <a id="dropList" href="BoardLoc">
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
                href="https://www.bloodinfo.net/main.do?_ga=2.130940751.1114888110.1666118959-706548427.1664875489"
                target="_blank"
                rel="noreferrer"
              >
                혈액관리본부
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
                href="https://www.bloodinfo.net/emi2/login.do?_ga=2.39216416.228213102.1665420166-706548427.1664875489"
                target="_blank"
                rel="noreferrer"
              >
                전자문진
              </a>
            </li>
          </li>
        </div>
      </div>

      <div id="right">
        <a id={login} href="Login">
          Login
        </a>
        <a id={logout} onClick={check3} href="Login">
          LogOut
        </a>
        <a id={login} href="Register">
          Join
        </a>
        <a id="login3" onClick={checkMy} >
          MyPage
        </a>
      </div>
    </div>
  );
}

export default Menu;