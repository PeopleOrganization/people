import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BoardView.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PhotoIcon from "@mui/icons-material/Photo";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GetData(vocId) {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/toyseven/voc/search/" + vocId)
      .then((response) => {
        setQuestion(response.data.question);
        setAnswer(response.data.answer);
      });
  }, []);
  const item = (
    <>
      <div className="voc-view-wrapper">
        <div className="voc-view-row2">
          <label>제목 :</label>
          <input></input>
        </div>
        <div className="voc-view-row2">
          <label>필요혈액 :</label>
          <input></input>
        </div>
        <div className="voc-view-row2">
          <label>환자명 :</label>
          <input></input>
        </div>
        <div className="voc-view-row2">
          <label>의료기관 :</label>
          <input></input>
        </div>
        <div className="voc-view-row2">
          <label>연락처 :</label>
          <input></input>
        </div>
        <div className="voc-view-row2">
          <label>등록번호 :</label>
          <input></input>
        </div>
        <div className="voc-view-row2">
          <label>필요수량 :</label>
          <input></input>
        </div>
      </div>
    </>
  );

  return item;
}

function BoardWrite() {
  const { vocId } = useParams();
  const item = GetData(vocId);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <h1 className="sidebarTitle">글쓰기</h1>
        <span align="center" className="hello">
          도움을 요청하세요.
        </span>
        <hr />
        <div id="postContainer2" align="center">
          <br />
          <div>{item}</div>
          <br />
          <br />
          <div id="chatRoom2">
            {/* 수혈자 */}
            <br />
            <div id="receive2">
              <label id="receiveNick2">댓글 작성</label>
              <br />
            <textarea id="receiveChat2"></textarea>
            </div>
            <br />
            {/* 수혈자 여기까지 */}
            <br /> <br /> <br />
          </div>
            <button id="boardWriteBtn">등록하기</button>
          
          <br /> <br />
        </div>{" "}
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
export default BoardWrite;
