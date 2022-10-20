import React from 'react';

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

          <h3 align="center"></h3>
        </div>
      </div>
    );
}

export default QnAKnowledge;