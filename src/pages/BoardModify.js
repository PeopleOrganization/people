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
import TextField from '@mui/material/TextField';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function BoardModify() {
  const { vocId } = useParams();
  // const item = GetData(vocId);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [user, setUser] = useState([]);
const [bloodType, setBloodType] = useState("");
const [title, setTitle] = useState("");
const [bloodKind, setBloodKind] = useState("");
const [patientName, setPatientName] = useState("");
const [hospital, setHospital] = useState("");
const [phonNum, setPhonNum] = useState("");
const [requestB, setRequestB] = useState("");
const [content, setContent] = useState("");
const [registNum, setRegistNum] = useState("");

useEffect(() => {
  axios
    .post("http://localhost:3001/modifyInfo", null, {
      params: {
        postkey: window.localStorage.getItem("postkey"),
      },
    })
    .then((res) => {
      // setUser(res.data);
      setBloodType(res.data[0]["bloodType"])
      setTitle(res.data[0]["title"]);
      setBloodKind(res.data[0]["bloodKind"]);
      setPatientName(res.data[0]["patientName"]);
      setHospital(res.data[0]["hospital"]);
      setPhonNum(res.data[0]["phonNum"]);
      setRequestB(res.data[0]["requestB"]);
      setContent(res.data[0]["content"]);
      setRegistNum(res.data[0]["registNum"]);

      
    });
}, []);

const postModify = () => {
axios.post('http://localhost:3001/modify', null, {
      params: { 
        postkey: window.localStorage.getItem("postkey"),
        bloodType: bloodType,
        bloodKind : bloodKind,
        patientName: patientName,
        registNum: registNum,
        hospital: hospital,
        phonNum: phonNum,
        requestB: requestB,
        title: title,
        content: content,
      }
    })
      .then(res => {  
        console.log(res.data)
        alert("게시글 수정에 성공하셨습니다.")
        document.location.href = '/Board'
      })
      .catch(function(error){
       console.log(error);
    })
  }

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
          {/* <div>{item}</div> */}
          <br />
          <br />
          <div className="voc-view-wrapper">
        <div className="voc-view-row2">
          <label>제목 :</label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>혈액형 :</label>
          <input value={bloodType} onChange={(event) => setBloodType(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>혈액종류 :</label>
          <input value={bloodKind} onChange={(event) => setBloodKind(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>환자명 :</label>
          <input value={patientName} onChange={(event) => setPatientName(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>의료기관 :</label>
          <input value={hospital} onChange={(event) => setHospital(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>연락처 :</label>
          <input value={phonNum} onChange={(event) => setPhonNum(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>등록번호 :</label>
          <input value={registNum} onChange={(event) => setRegistNum(event.target.value)} />
        </div>
        <div className="voc-view-row2">
          <label>필요수량 :</label>
          <input value={requestB} onChange={(event) => setRequestB(event.target.value)} />
        </div>
      </div>
          <div id="chatRoom2">
            
            {/* 수혈자 */}
            <br />
            <div id="receive2">
              <label id="receiveNick2">댓글 작성</label>
              <br />
            <textarea id="receiveChat2" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
            </div>
            <br />
            {/* 수혈자 여기까지 */}
            <br /> <br /> <br />
          </div>
            <button id="boardWriteBtn" onClick={postModify}>수정하기</button>
          
          <br /> <br />
        </div>{" "}
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
export default BoardModify;