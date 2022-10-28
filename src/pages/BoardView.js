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
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bloodKind, setBloodKind] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phonNum, setPhonNum] = useState("");
  const [requestB, setRequestB] = useState("");
  const [responseB, setResponseB] = useState("");
  const params = useParams();
  const postkey2 = params.postkey;

  useEffect(() => {
    axios
      .post("http://localhost:3001/postView", null, {
        params: {
          postkey:postkey2,
        },
      })
      .then((res) => {
        setPost(res.data);
        // eslint-disable-next-line array-callback-return
        post.map((us) => {
          setTitle(us.title);
        });
        // eslint-disable-next-line array-callback-return
        post.map((us) => {
          setBloodType(us.bloodType);
        });
        // eslint-disable-next-line array-callback-return
        post.map((us) => {
          setBloodKind(us.bloodKind);
        });
        // eslint-disable-next-line array-callback-return
        post.map((us) => {
          setPatientName(us.patientName);
        });

         // eslint-disable-next-line array-callback-return
         post.map((us) => {
          setHospital(us.hospital);
        });
         // eslint-disable-next-line array-callback-return
         post.map((us) => {
          setPhonNum(us.phonNum);
        });
         // eslint-disable-next-line array-callback-return
         post.map((us) => {
          setRequestB(us.requestB);
        });
         // eslint-disable-next-line array-callback-return
         post.map((us) => {
          setResponseB(us.responseB);
        });
       
      });
  }, );


  const item =  (<>
    <div className="voc-view-wrapper">
        <div className="voc-view-row">
            <label>제목 :</label>
            <label>{ title }</label>
        </div>
        <div className="voc-view-row">
            <label>필요혈액 :</label>
            <label>{ bloodKind }</label>
        </div>
        <div className="voc-view-row">
            <label>환자명 :</label>
            <label>{ patientName }</label>
        </div>
        <div className="voc-view-row">
            <label>의료기관 :</label>
            <label>{ hospital }</label>
        </div>
        <div className="voc-view-row">
            <label>연락처 :</label>
            <label>{ phonNum }</label>
        </div>
        <div className="voc-view-row">
            <label>수량 :</label>
            <label>{ responseB+'/'+requestB }</label>
        </div>
        
    </div></>)

    return item;
}


function BoardView() {
  const { vocId } = useParams();
  const item = GetData(vocId);
  const scrollRef = useRef();
  const [post, setPost] = useState([]);
  const [content, setContent] = useState("");
  const [deleteShow, setDeleteShow] = useState("boardDelete"); //기본 값은 안 보이게
  const params = useParams();
  const postkey2 = params.postkey; 



  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

   //삭제버튼이 보일지 안 보일지 결정
  useEffect(() => {
    axios
      .post("http://localhost:3001/deleteNick", null, {
        params: {
          postkey: postkey2
        },
      })
      .then((res) => {
        setPost(res.data);
        window.localStorage.setItem("postkey", postkey2);
        
        // eslint-disable-next-line array-callback-return
        console.log("이메일확인하러옴");
        console.log(res.data[0]["email"]);
        console.log(window.localStorage.getItem("email"));
        if(res.data[0]["email"] === window.localStorage.getItem("email")) {
          setDeleteShow("boardDelete2")
        }
      });
  }, []);


  useEffect(() => {
    axios
      .post("http://localhost:3001/postView", null, {
        params: {
          postkey: postkey2
        },
      })
      .then((res) => {
        setPost(res.data);
        
        // eslint-disable-next-line array-callback-return
        post.map((us) => {
          setContent(us.content);
        });
      });
  }, );

  const modify2 = () => {
      document.location.href = '/BoardModify';
    
  }

  const delete2 = () => {
    console.log("글 삭제 하러 옴");


    axios.post('http://localhost:3001/delete', null, {
      params: { 
        postkey: postkey2
      }
    })
      .then(res => {  
        console.log(res.data)
        alert("게시글이 삭제되었습니다.")
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
        <h1 className="sidebarTitle">헌혈글</h1>
        <span align="center" className="hello">
          헌혈하는 당신이 진정한 영웅입니다.
        </span>
        <hr />
        <div id="postContainer" align="center">
          <br />
          <div>{item}</div>
          <br />
          <br />
          <div id="chatRoom" ref={scrollRef}>
            <div id="chatIcon">
              <span id="boardButton">
                <button id="boardBtn1">
                  {" "}
                  <AttachFileIcon color="white"></AttachFileIcon>복사
                </button>
                &nbsp;
                <button id="boardBtn2">
                  {" "}
                  <BookmarkIcon></BookmarkIcon>스크랩
                </button>
                &nbsp;
                <button id="boardBtn3" onClick={handleClickOpen}>
                  <FactCheckIcon></FactCheckIcon>헌혈증서
                </button>
                <div>
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>
                      {"정말 헌혈증서를 등록하시겠습니까?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        헌혈 증서 등록
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>등록</Button>
                      <Button onClick={handleClose}>취소</Button>
                    </DialogActions>
                  </Dialog>
                </div>
                &nbsp;
              </span>
            </div>
            {/* 수혈자 */}
            <br />
            <div id="receive">
              <label id="receiveNick">{window.localStorage.getItem("nickName")}</label>
              <br />
              <label id="receiveChat">
              {content} <br></br>
              </label>
              <label id="receiveDate">08:55</label>
            </div>
            <br />
            {/* 수혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
              <label id="giveNick">헌혈자1</label>
              <br />
              <label id="giveChat">방금 헌혈하고 왔습니다용!</label>
              <br></br> <label id="giveDate">09:44</label>
            </div>
            <br />
            {/* 헌혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
              <label id="giveNick">헌혈자2</label>
              <br />
              <label id="giveChat">저도용!</label>
              <br></br> <label id="giveDate">09:55</label>
            </div>
            <br />
            {/* 헌혈자 여기까지 */}

            {/* 수혈자 */}
            <br />
            <div id="receive">
              <label id="receiveNick">수혈자</label>
              <br />
              <label id="receiveChat">
                정말 다들 감사드립니다. ㅠㅠ 행복하실거에요 ! <br></br>
              </label>
              <br />
              <label id="receiveDate">10:55</label>
            </div>
            <br />
            {/* 수혈자 여기까지 */}
          </div>
          <div id="boardReply">
            <div id="replyLeft">
              <button id="replyImage">
                {" "}
                <PhotoIcon></PhotoIcon>사진
              </button>
            </div>
            <div id="replyRight">
              <textarea id="replyBoard"></textarea>
            </div>
            <div id="replySend">
              <button id="replySendBtn">보내기</button>
            </div>
          </div>
          <br /> <br /> 
        </div><Button id={deleteShow} onClick={modify2}>수정</Button>
        <Button id={deleteShow} onClick={delete2}>삭제</Button>
        <br /> <br />
        <br /> <br />
      </div>
    </div>
  );
}
export default BoardView;