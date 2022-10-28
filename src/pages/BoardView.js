import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BoardView.css";
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
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

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
          postkey: postkey2,
        },
      })
      .then((res) => {
        setTitle(res.data[0]["title"]);
        setBloodType(res.data[0]["bloodType"]);
        setBloodKind(res.data[0]["bloodKind"]);
        setPatientName(res.data[0]["patientName"]);
        setHospital(res.data[0]["hospital"]);
        setPhonNum(res.data[0]["phonNum"]);
        setRequestB(res.data[0]["requestB"]);
        setResponseB(res.data[0]["responseB"]);
      });
  }, []);

  const item = (
    <>
      <div className="voc-view-wrapper2">
        <div className="voc-view-row">
          <label>제목 :</label>
          <label>{title}</label>
        </div>
        <div className="voc-view-row">
          <label>환자명 :</label>
          <label>{patientName}</label>
        </div>
        <div className="voc-view-row">
          <label>혈액형 :</label>
          <label>{bloodType}</label>
        </div>
        <div className="voc-view-row">
          <label>혈액종류 :</label>
          <label>{bloodKind}</label>
        </div>
        <div className="voc-view-row">
          <label>필요수량 :</label>
          <label>{responseB + "/" + requestB}</label>
        </div>
      </div>
    </>
  );

  return item;
}

function BoardView() {
  const { vocId } = useParams();
  const item = GetData(vocId);
  const scrollRef = useRef();
  const [post, setPost] = useState([]);
  const [content, setContent] = useState("");
  const [replyData, setReplyData] = useState([]); //댓글 저장
  const [deleteShow, setDeleteShow] = useState("boardDelete"); //기본 값은 안 보이게
  const params = useParams();
  const postkey2 = params.postkey;
  const [email3, setEmail3] = useState(""); // 게시글 작성자의 이메일
  const [replyContent, setReplyContent] = useState(""); // 댓글 내용

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  //삭제버튼이 보일지 안 보일지 결정
  useEffect(() => {
    axios
      .post("http://localhost:3001/deleteNick", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        setPost(res.data);
        window.localStorage.setItem("postkey", postkey2);

        // eslint-disable-next-line array-callback-return
        console.log("이메일확인하러옴");
        console.log(res.data[0]["email"]);
        console.log(window.localStorage.getItem("email"));
        if (res.data[0]["email"] === window.localStorage.getItem("email")) {
          setDeleteShow("boardDelete2");
        }
      });
  }, []);

  //댓글 불러오기
  useEffect(() => {
    axios
      .post("http://localhost:3001/replyShow", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((response) => {
        setReplyData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:3001/postView", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        setPost(res.data);

        // eslint-disable-next-line array-callback-return
        post.map((us) => {
          setContent(us.content);
        });
      });
  });

  const modify2 = () => {
    document.location.href = "/BoardModify";
  };

  //댓글 등록
  const replySave = () => {
    axios
      .post("http://localhost:3001/reply", null, {
        params: {
          postkey: postkey2,
          email: window.localStorage.getItem("email"),
          nickName: window.localStorage.getItem("nickName"),
          replyContent: replyContent,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //게시글 삭제
  const delete2 = () => {
    console.log("글 삭제 하러 옴");

    axios
      .post("http://localhost:3001/delete", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("게시글이 삭제되었습니다.");
        document.location.href = "/Board";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [Type, setType] = React.useState("");
  const [Kind, setKind] = React.useState("");
  const [Bank, setBank] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChange2 = (event) => {
    setKind(event.target.value);
  };

  const handleChange3 = (event) => {
    setBank(event.target.value);
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
                <button id="boardBtn1" onClick={handleClickOpen2}>
                  {" "}
                  <PermContactCalendarIcon color="white"></PermContactCalendarIcon>
                  수혈자정보
                </button>
                <Dialog
                  open={open2}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose2}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle
                    align="center"
                    color="red"
                    sx={{
                      fontFamily: "GmarketSansMedium",
                      fontSize: "x-large",
                      fontWeight: "bold",
                    }}
                  >
                    {"수혈자 정보"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      sx={{
                        fontFamily: "GmarketSansMedium",
                        fontSize: "large",
                        fontWeight: "bold",
                      }}
                    >
                      <table id="bloodLicenceTable2">
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">환자명 :&nbsp;</td>
                          <td id="bloodInfoTd2">홍길동</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">혈액형 :&nbsp;</td>
                          <td id="bloodInfoTd2">O형</td>
                        </tr>
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">혈액종류 :&nbsp;</td>
                          <td id="bloodInfoTd2">전혈</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">의료기관 :&nbsp;</td>
                          <td id="bloodInfoTd2">서울대학병원</td>
                        </tr>
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">연락처 :&nbsp;</td>
                          <td id="bloodInfoTd2">010-1234-5678</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">등록번호 :&nbsp;</td>
                          <td id="bloodInfoTd2">155-2526-27272</td>
                        </tr>
                      </table>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    sx={{
                      fontFamily: "GmarketSansMedium",
                      fontSize: "x-large",
                      fontWeight: "bold",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <button
                      id="loginBtn"
                      style={{ padding: "1%" }}
                      onClick={handleClose2}
                    >
                      확인
                    </button>
                  </DialogActions>
                </Dialog>
                &nbsp;
                <button id="boardBtn2" onClick={handleClickOpen3}>
                  {" "}
                  <BookmarkIcon></BookmarkIcon>스크랩
                </button>
                <Dialog
                  open={open3}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose3}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle
                    align="center"
                    color="red"
                    sx={{
                      fontFamily: "GmarketSansMedium",
                      fontSize: "x-large",
                      fontWeight: "bold",
                    }}
                  >
                    {""}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      sx={{
                        fontFamily: "GmarketSansMedium",
                        fontSize: "large",
                        fontWeight: "bold",
                      }}
                    >
                      스크랩되었습니다.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    sx={{
                      fontFamily: "GmarketSansMedium",
                      fontSize: "x-large",
                      fontWeight: "bold",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <button
                      id="loginBtn"
                      style={{ padding: "1%", width: "30%" }}
                      onClick={handleClose3}
                    >
                      확인
                    </button>
                  </DialogActions>
                </Dialog>
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
                    <DialogTitle
                      align="center"
                      color="red"
                      sx={{
                        fontFamily: "GmarketSansMedium",
                        fontSize: "x-large",
                        fontWeight: "bold",
                      }}
                    >
                      {"헌혈증서등록"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        sx={{
                          fontFamily: "GmarketSansMedium",
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        <p id="bloodLicenceTitle2">
                          소중한 지정헌혈 감사합니다.
                        </p>{" "}
                        <p id="bloodLicenceTitle3">
                          헌혈환료를 눌러 요청자에게 알려주세요. <br></br>헌혈증
                          정보까지 입력해 주시면 요청자에게 큰 도움이 돼요.
                          <br></br>
                          <br></br>헌혈증을 보고 정보를 입력해 주세요. (필수){" "}
                        </p>
                        <hr></hr>
                        <br></br>
                        <span id="bloodLicence">
                          헌혈증서 &nbsp;
                          <span id="bloodLicence2">
                            증서번호:&nbsp;
                            <input id="bloodLicenceNum1"></input>
                            &nbsp;-&nbsp;
                            <input id="bloodLicenceNum2"></input>
                            &nbsp;-&nbsp;
                            <input id="bloodLicenceNum3"></input>
                            &nbsp;-&nbsp;
                            <input id="bloodLicenceNum4"></input>
                          </span>{" "}
                        </span>
                        <br />
                        <table id="bloodLicenceTable">
                          <tr>
                            <td>
                              <br></br>
                              &nbsp;<span>닉네임 님</span>
                              <br></br>
                              <br></br>
                              <p id="bloodLicenceBloodType">
                                <Box sx={{ width: "5%", minWidth: "45%" }}>
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    >
                                      혈액형
                                    </InputLabel>
                                    <Select
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={Type}
                                      label="Type"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>혈액형</em>
                                      </MenuItem>
                                      <MenuItem value={"A"}>A+</MenuItem>
                                      <MenuItem value={"B"}>B+</MenuItem>
                                      <MenuItem value={"AB"}>AB+</MenuItem>
                                      <MenuItem value={"O"}>O+</MenuItem>
                                      <MenuItem value={"A-"}>A-</MenuItem>
                                      <MenuItem value={"B-"}>B-</MenuItem>
                                      <MenuItem value={"AB-"}>AB-</MenuItem>
                                      <MenuItem value={"O-"}>O-</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                &nbsp;&nbsp;
                                <Box sx={{ width: "5%", minWidth: "45%" }}>
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    >
                                      헌혈종류
                                    </InputLabel>
                                    <Select
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={Kind}
                                      label="Kind"
                                      onChange={handleChange2}
                                    >
                                      <MenuItem value="">
                                        <em>혈액종류</em>
                                      </MenuItem>
                                      <MenuItem value={"전혈"}>전혈</MenuItem>
                                      <MenuItem value={"성분채혈 혈소판"}>
                                        성분채혈 혈소판
                                      </MenuItem>
                                      <MenuItem value={"혈장"}>혈장</MenuItem>
                                      <MenuItem value={"농축적혈구"}>
                                        농축적혈구
                                      </MenuItem>
                                      <MenuItem value={"성분채혈 백혈구"}>
                                        성분채혈 백혈구
                                      </MenuItem>
                                      <MenuItem value={"백혈구여과제거적혈구"}>
                                        백혈구여과제거적혈구
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                              </p>
                              <p id="bloodLicenceBloodType2">
                                <Box sx={{ width: "5%", minWidth: "47%" }}>
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    >
                                      혈액원 명
                                    </InputLabel>
                                    <Select
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={Bank}
                                      label="Bank"
                                      onChange={handleChange3}
                                    >
                                      <MenuItem value="">
                                        <em>혈액원 명</em>
                                      </MenuItem>
                                      <MenuItem value={"서울중앙혈액원"}>
                                        서울중앙혈액원
                                      </MenuItem>
                                      <MenuItem value={"서울남부혈액원"}>
                                        서울남부혈액원
                                      </MenuItem>
                                      <MenuItem value={"서울동부혈액원"}>
                                        서울동부혈액원
                                      </MenuItem>
                                      <MenuItem value={"부산혈액원"}>
                                        부산혈액원
                                      </MenuItem>
                                      <MenuItem value={"대구경북혈액원"}>
                                        대구경북혈액원
                                      </MenuItem>
                                      <MenuItem value={"인천혈액원"}>
                                        인천혈액원
                                      </MenuItem>
                                      <MenuItem value={"울산혈액원"}>
                                        울산혈액원
                                      </MenuItem>
                                      <MenuItem value={"경기혈액원"}>
                                        경기혈액원
                                      </MenuItem>
                                      <MenuItem value={"강원혈액원"}>
                                        강원혈액원
                                      </MenuItem>
                                      <MenuItem value={"충북혈액원"}>
                                        충북혈액원
                                      </MenuItem>
                                      <MenuItem value={"대전세종충남혈액원"}>
                                        대전세종충남혈액원
                                      </MenuItem>
                                      <MenuItem value={"전북혈액원"}>
                                        전북혈액원
                                      </MenuItem>
                                      <MenuItem value={"광주·전남혈액원"}>
                                        광주·전남혈액원
                                      </MenuItem>
                                      <MenuItem value={"경남혈액원"}>
                                        경남혈액원
                                      </MenuItem>
                                      <MenuItem value={"제주혈액원"}>
                                        제주혈액원
                                      </MenuItem>
                                      <MenuItem value={"중앙혈액검사센터"}>
                                        중앙혈액검사센터
                                      </MenuItem>
                                      <MenuItem value={"혈액관리본부"}>
                                        혈액관리본부
                                      </MenuItem>
                                      <MenuItem value={"혈장분획센터"}>
                                        혈장분획센터
                                      </MenuItem>
                                      <MenuItem value={"중부혈액검사센터"}>
                                        중부혈액검사센터
                                      </MenuItem>
                                      <MenuItem value={"남부혈액검사센터"}>
                                        남부혈액검사센터
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                &nbsp;&nbsp;
                                <Stack component="form" noValidate spacing={3}>
                                  <TextField
                                    id="date"
                                    label="헌혈일자"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    sx={{ width: "5%", minWidth: "158%" }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                </Stack>
                              </p>
                              <br></br>
                              <p id="BoardLicenceText">
                                사랑의 헌혈에 동참하여 생명 나눔을 몸소 실천하신
                                귀하에게<br></br>
                                깊은 존경과 감사의 마음을 담아 이 증서를
                                드립니다.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions
                      sx={{
                        fontFamily: "GmarketSansMedium",
                        fontSize: "x-large",
                        fontWeight: "bold",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        marginBottom: "3%",
                      }}
                    >
                      <button
                        id="loginBtn"
                        style={{ padding: "1%" }}
                        onClick={handleClose}
                      >
                        등록
                      </button>
                      <button
                        id="loginBtn"
                        style={{ padding: "1%" }}
                        onClick={handleClose}
                      >
                        취소
                      </button>
                    </DialogActions>
                  </Dialog>
                </div>
                &nbsp;
              </span>
            </div>
            {/* 수혈자 */}
            <br />
            <div id="receive">
              <label id="receiveNick">
                {window.localStorage.getItem("nickName")}
              </label>
              <br />
              <label id="receiveChat">
                {content} <br></br>
              </label>
              <label id="receiveDate">08:55</label>
            </div>
            <br />
            {/* 수혈자 여기까지 */}
            {replyData.map((it) => (
              <div key={it.replykey}>
                <div>
                  {it.email === email3 ? (
                    <div id="receive">
                      <label id="receiveNick">{it.nickName}</label>
                      <br />
                      <label id="receiveChat">{it.replyContent}</label>
                      <br></br> <label id="giveDate">09:44</label>{" "}
                    </div>
                  ) : (
                    <div id="give">
                      {" "}
                      <label id="giveNick">{it.nickName}</label>
                      <br />
                      <label id="giveChat">{it.replyContent}</label>
                      <br></br> <label id="giveDate">09:44</label>{" "}
                    </div>
                  )}
                </div>
                <br />
              </div>
            ))}
          </div>
          <div id="boardReply">
            <div id="replyLeft">
              <button id="replyImage">
                {" "}
                <PhotoIcon></PhotoIcon>사진
              </button>
            </div>
            <div id="replyRight">
              <textarea
                id="replyBoard"
                onChange={(event) => setReplyContent(event.target.value)}
              ></textarea>
            </div>
            <div id="replySend">
              <button id="replySendBtn" onClick={replySave}>
                보내기
              </button>
            </div>
          </div>
          <br /> <br />
        </div>
        <Button id={deleteShow} onClick={modify2}>
          수정
        </Button>
        <Button id={deleteShow} onClick={delete2}>
          삭제
        </Button>
        <br /> <br />
        <br /> <br />
      </div>
    </div>
  );
}

export default BoardView;
