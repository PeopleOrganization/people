import React from 'react';

function QnAQuestion(props) {
    return (
      <div className="centerContainer">
        <div className="container">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h1 className="sidebarTitle">궁금해요!</h1>
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
                      <li className="sidebarListItem active">자주묻는 질문</li>
                    </a>
                  </ul>
                </ui>
              </div>
            </div>
          </div>
          <div className="others"></div>

          <h3 align="center">나는 자주묻는 질문이야</h3>
        </div>
      </div>
    );
}

export default QnAQuestion;