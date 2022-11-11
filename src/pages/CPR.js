import React from "react";
import Img from "../imgs/cpr_icon.png";
import Img2 from "../imgs/cpr_guide.png";
import Img3 from "../imgs/cpr_guide2.png";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const IntroBlock = styled.div`
  margin-bottom: 135px;
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const oneCheckBox = (checkThis) => {
  const box = document.getElementsByName("box");
  for (let i = 0; i < box.length; i++) {
    if (box[i] !== checkThis) {
      box[i].checked = false;
    }
  }
}

function CPR(props) {
  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href2" href="QnAKnowledge">
            {" "}
            <li className="sidebarListItem2">헌혈지식</li>
          </a>
          &nbsp;
          <a className="href2" href="QnADesignated">
            <li className="sidebarListItem2">지정헌혈이란?</li>
          </a>
          &nbsp;
          <a className="href2" href="QnAQuestion">
            <li className="sidebarListItem2">자주묻는 질문</li>
          </a>
          &nbsp;
          <a className="href2" href="CPR">
            <li className="sidebarListItem2 active">심폐소생술</li>
          </a>
          <br></br>
          <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </ul>
      </div>
      <div className="container">
        <h1 className="sidebarTitle">궁금해요!</h1>
        <span align="center" className="hello">
          심폐소생술(CPR)이란 심장과 폐의 활동이 멈추어 호흡이 정지되었을 경우에
          <br></br>실시하는 응급처치입니다.
        </span>
        <hr />
        <ui className="sidebarCircle">
          <ul className="sidebarList">
            <a className="href" href="QnAKnowledge">
              {" "}
              <li className="sidebarListItem">헌혈지식</li>
            </a>
            &nbsp;
            <a className="href" href="QnADesignated">
              <li className="sidebarListItem">지정헌혈이란?</li>
            </a>
            &nbsp;
            <a className="href" href="QnAQuestion">
              <li className="sidebarListItem">자주묻는 질문</li>
            </a>
            &nbsp;
            <a className="href" href="CPR">
              <li className="sidebarListItem active">심폐소생술</li>
            </a>
          </ul>
        </ui>

        <div className="others"></div>
        <Fade bottom>
          <IntroBlock>
            <img
              src={Img2}
              style={{
                width: "100%",
                backgroundrepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundAttachment: "fixed",
                webkitUserDrag: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
              alt="React"
            ></img>
          </IntroBlock>
        </Fade>
        <h2 style={{ color: "red", fontWeight: "bold"}}>
              #심폐소생술(CPR)을 하는 이유?&nbsp;
              <img
                src={Img}
                style={{
                  width: "5%",
                }}
                alt="React"
              ></img>
            </h2>
            <hr style={{ height: "5px" }}></hr>
            <h4 id="redColor">심정지가 발생한 후 4~5분 이상 경과하면 뇌손상이 발생하기 시작하므로,
               <br></br>심정지를 목격한 일반인이 즉시 심폐소생술을 시작하여야
             심정지로부터 회복되더라도 뇌손상을 최소화할 수 있습니다.</h4><br></br>
            <div align="center">
             <KeyboardDoubleArrowDownIcon sx={{fontSize:"500%", color:"red"}}></KeyboardDoubleArrowDownIcon>
             </div><br></br><br></br>
              <h5><ul>1. 구급대 도착 전 목격자의 신속한 심폐소생술 시행이 생존율 향상에 중요합니다.
               (시행하지 않은 경우 대비 약 2~3배의 생존율을 높힘)</ul><br></br>
               <ul>2. 심폐소생술 및 자동심장 충격기 사용 안내도를 출력하여 눈에 띄기 
                쉬운 장소에 게시하여 만약의 상황에 대비하는 것이 좋습니다.</ul>
            </h5><br></br><br></br><br></br>
            <h2 style={{ color: "red", fontWeight: "bold"}}>
              #심폐소생술 가이드&nbsp;
              <img
                src={Img3}
                style={{
                  width: "5%",
                }}
                alt="React"
              ></img>
            </h2>
            <hr style={{ height: "5px" }}></hr>
                <h5>성인</h5>
            <iframe id="cprVideo" width= "100%" height= "700px" src="https://www.youtube.com/embed/pLvFWLCwn6M?rel=0&vq=hd1080&start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br><br></br><br></br>
            
            <h5>영아(생후1개월~12개월)</h5>
            <iframe width= "100%" height= "700px" src="https://www.youtube.com/embed/63zNZyy3Wgc?rel=0&vq=hd1080&start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br><br></br><br></br>
      </div>
    </div>
  );
}

export default CPR;
