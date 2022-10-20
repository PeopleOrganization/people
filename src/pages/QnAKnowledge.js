import React from 'react';
import Img from '../imgs/QnA_bg.png';
import One from '../imgs/QnA_one.png';

function QnAKnowledge(props) {
    return (
      <div className="centerContainer">
        <div className="container">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h1 className="sidebarTitle">궁금해요!</h1>
                <span align="center" className="hello">
                  생명이 위태로운 다른 사람에게 자신의 혈액을 기증하는
                  <br></br>사랑의 실천이자 생명을 나누는 고귀한 행위입니다.
                </span>
                <hr />
                <ui className="sidebarCircle">
                  <ul className="sidebarList">
                    <a className="href" href="QnAKnowledge">
                      {" "}
                      <li className="sidebarListItem active">헌혈지식</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnADesignated">
                      <li className="sidebarListItem">지정헌혈이란?</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnAQuestion">
                      <li className="sidebarListItem">자주묻는 질문</li>
                    </a>
                  </ul>
                </ui>
              </div>
            </div>
          </div>
          <div className="others"></div>
          <img
            src={Img}
            style={{
              width: "100%",
              backgroundrepeat: "no-repeat",
              backgroundPosition: "top center",
              backgroundAttachment: "fixed",
              webkitUserDrag: "none",
            }}
            alt="React"
            ></img>
            <br/><br/><br/>
          <table id="qnaTable" align='center' border="50px" borderColor="#e6687d" width={"100%"}>
          <br></br>
            <tr id="qnaTr"> 
              <td id="qnaTd"><br></br><br></br><h3 id="qnaTitle">헌혈이란?</h3><hr id="qnaHr"></hr>건강한 사람이 혈액이 부족하여 생명이 위태로운 다른 사람에게 아무런 대가없이 자유의사로
                자신의 혈액을 기증하는 사랑의 실천이자 생명을 나누는 고귀한 행위입니다.
              </td >&nbsp;&nbsp;&nbsp;&nbsp;
              <td id="qnaTd"><br></br><h3 id="qnaTitle">헌혈은 장기이식의 한 부분</h3><hr id="qnaHr"></hr>헌혈은 수혈이 필요한 환자의 생명을 구하는 유일한 수단입니다. 혈액은 아직 인공적으로 만들수
                있거나 대체할 물질이 존재하지 않습니다.<br></br><br></br>
              </td>&nbsp;&nbsp;&nbsp;&nbsp;
              <td id="qnaTd"><h3 id="qnaTitle">혈액의 상업적 유통 법적 규제</h3><hr id="qnaHr"></hr>생명을 사고 팔 수 없다는 인류공통의 윤리에 기반하여 세계각국은 혈액의 상업적 유통을
                법으로 규제하고 있습니다.<br></br><br></br>
              </td>&nbsp;&nbsp;&nbsp;&nbsp;
            </tr>
            <tr id="qnaTr">
              <td id="qnaTd"><h3 id="qnaTitle">지속적 헌혈 필요</h3><hr id="qnaHr"></hr>혈액은 살아있는 세포로구성되어 장기간 보존할 수 없습니다. 그러므로 헌혈은 지속적으로
                이루어져야만 합니다.<br></br><br></br><br></br>
              </td>&nbsp;&nbsp;&nbsp;&nbsp;
              <td id="qnaTd"><h3 id="qnaTitle">정기적 헌혈 참여의 필요</h3><hr id="qnaHr"></hr>우리나라는 연간 약 300만명이 헌혈하여야 외국으로부터 수입하지 않고 혈액을 자급할 수 있습니다.
              <br></br>그러므로 건강한 성인이라면 정기적이고 꾸준한 헌혈이 필요합니다.
              </td>&nbsp;&nbsp;&nbsp;&nbsp;
              <td id="qnaTd"><h3 id="qnaTitle">모두를 위한 사랑의 실천</h3><hr id="qnaHr"></hr>우리는 언제 수혈을 받을 상황에 처할지 모릅니다. 건강할 때 헌혈하는 것은 자신과 사랑하는
                가족을 위하여, 더 나아가 모두를 위한 사랑의 실천입니다. 헌혈은 건강한 사람만이 누릴 수 있는 특권입니다.
              </td>&nbsp;&nbsp;&nbsp;&nbsp;
            </tr><br></br>
          </table>
        </div>
      </div>
    );
}

export default QnAKnowledge;