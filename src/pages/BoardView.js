import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BoardView.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function GetData(vocId) {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/toyseven/voc/search/'+vocId).then((response)=> {
        setQuestion(response.data.question);
        setAnswer(response.data.answer);
    })
  }, []);

  const item =  (<>
    <div className="voc-view-wrapper">
        <div className="voc-view-row">
            <label>제목 :</label>
            <label>{ question.title }</label>
        </div>
        <div className="voc-view-row">
            <label>필요혈액 :</label>
            <label>{ question.bloodType }</label>
        </div>
        <div className="voc-view-row">
            <label>환자명 :</label>
            <label>{ question.patientName }</label>
        </div>
        <div className="voc-view-row">
            <label>의료기관 :</label>
            <label>{ question.hospistalName }</label>
        </div>
        <div className="voc-view-row">
            <label>연락처 :</label>
            <label>{ question.phoneNum }</label>
        </div>
        <div className="voc-view-row">
            <label>받은수량 :</label>
            <label>{ question.receiveBlood }</label>
        </div>
        
    </div></>)

    return item;
}

function BoardView() {
  const{vocId} = useParams();
  const item = GetData(vocId);

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
          <div id="chatRoom">
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
                <button id="boardBtn3"> 
                  <FactCheckIcon></FactCheckIcon>헌혈증서
                </button>
                &nbsp;
              </span>
            </div>
            {/* 수혈자 */}
            <br/>
            <div id="receive">
            <label id="receiveNick">수혈자</label>
              <br />
              <label id="receiveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다. 
                    </label>
                    <label id="receiveDate">시간</label>
                    
                    
    
            </div>
            <br />
            {/* 수혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
            <label id="giveNick">헌혈자</label>
              <br />
              <label id="giveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                    </label>
                    <label id="giveDate">시간</label>  
            </div>
            <br/>
            {/* 헌혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
            <label id="giveNick">헌혈자</label>
              <br />
              <label id="giveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                    </label>
                    <label id="giveDate">시간</label>  
            </div>
            <br/>
            {/* 헌혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
            <label id="giveNick">헌혈자</label>
              <br />
              <label id="giveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                    </label>
                    <label id="giveDate">시간</label>  
            </div>
            <br/>
            {/* 헌혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
            <label id="giveNick">헌혈자</label>
              <br />
              <label id="giveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                    </label>
                    <label id="giveDate">시간</label>  
            </div>
            <br/>
            {/* 헌혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
            <label id="giveNick">헌혈자</label>
              <br />
              <label id="giveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                    </label>
                    <label id="giveDate">시간</label>  
            </div>
            <br/>
            {/* 헌혈자 여기까지 */}

            {/* 헌혈자 */}
            <div id="give">
            <label id="giveNick">헌혈자</label>
              <br />
              <label id="giveChat">파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                    </label>
                    <label id="giveDate">시간</label>  
            </div>
            <br/>
            {/* 헌혈자 여기까지 */}

          </div>
          <br/> <br/> <br/>
        </div>
      </div>
    </div>
  );
}
  
export default BoardView;