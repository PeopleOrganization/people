import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Board() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    window.localStorage.setItem("search", search);
    document.location.href = "/BoardSearch";
  };

  //엔터키 이벤트
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };


  useEffect(() => {
    axios
      .post("http://localhost:3001/search", null, {
        params: {
          search: '%'+window.localStorage.getItem("search")+'%'
        }
      })
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href" href="Board">
            {" "}
            <li className="sidebarListItem2 active">전체게시판</li>
          </a>
          &nbsp;
          <a className="href" href="BoardBloodType">
            <li className="sidebarListItem2">혈액형게시판</li>
          </a>
          &nbsp;
          <a className="href" href="BoardLoc">
            <li className="sidebarListItem2">지역게시판</li>
          </a>
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>

      <div className="container">
        <h1 className="sidebarTitle">소통해요!</h1>
        <span align="center" className="hello">
          모든사람과 소통을 할 수 있는 게시판입니다.
        </span>
        <hr />
          <br></br>
        <div id="postContainer0" align="center">
        <div align="end" style={{padding:"1%"}}>
        <TextField
            sx={{ width: "25%"}}
            name="search"
            label="검색"
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={handleOnKeyPress}
          />
          </div>
          <br />
          <table id="boardSize">
            <div>
              <div>
                <td id="boardItemSize1"></td>
                <td id="boardItemSize2">혈액형</td>
                <td id="boardItemSize3">혈액종류</td>
                <td id="boardItemSize4">제목</td>
                <td id="boardItemSize5">환자성명</td>
                <td id="boardItemSize6">병원</td>
                <td id="boardItemSize7">등록일</td>
                <td id="boardItemSize8">수량</td>
              </div>
              <br />
              <hr />
            </div>
            {data.map((it) => (
              <div key={it.postkey}>
                <div>
                  <td id="boardItemSize1">{it.postkey}</td>
                  <td id="boardItemSize2">{it.bloodType} </td>
                  <td id="boardItemSize3">{it.bloodKind} </td>
                  <td id="boardItemSize4">
                    <Link to={`/BoardView${it.postkey}`}>{it.title}</Link>{" "}
                  </td>
                  <td id="boardItemSize5">{it.patientName} </td>
                  <td id="boardItemSize6">{it.hospital} </td>
                  <td id="boardItemSize7">{it.postDate} </td>
                  <td id="boardItemSize8">
                    {it.responseB}/{it.requestB}
                  </td>
                </div>
                <br />
                <hr />
              </div>
            ))}
          </table>

          <br></br>
          <Link to="/BoardWrite">
            <button id="loginBtn">글쓰기</button>
          </Link>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Board;