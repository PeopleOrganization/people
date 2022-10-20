import React from 'react';

function QnADesignated(props) {
    return (
      <div className="centerContainer">
        <div className="container">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h1 className="sidebarTitle">궁금해요!</h1>
                <span align="center" className="hello">
                헌혈자가 대상을 미리 지정해 놓고 하는 헌혈로써,
                <br></br>헌혈을 하는 사람이 현혈을 하기 전에 수혈자를 지정하거나,
                  <br></br>환자가 수혈을 받기 전에 헌혈자를 지정하는 경우를 모두 포함합니다.
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
                      <li className="sidebarListItem active">지정헌혈이란?</li>
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

          <h3 align="center"></h3>
        </div>ㄴ
      </div>
    );
}

export default QnADesignated;