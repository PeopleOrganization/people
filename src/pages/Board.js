import React from 'react';

function Board(props) {
    return (
      <div className="centerContainer">
        <div className="container">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h1 className="sidebarTitle">게시판</h1>
                <ui className="sidebarCircle">
                  <ul className="sidebarList">
                    <a className="href" href="Board">
                      {" "}
                      <li className="sidebarListItem active">전체게시판</li>
                    </a>
                    &nbsp;
                    <a className="href" href="BoardBloodType">
                      <li className="sidebarListItem">혈액형게시판</li>
                    </a>
                    &nbsp;
                    <a className="href" href="BoardLoc">
                      <li className="sidebarListItem">지역게시판</li>
                    </a>
                  </ul>
                </ui>
              </div>
            </div>
          </div>
          <div className="others"></div>

          <h3 align="center">나는 전체게시판이야</h3>
        </div>
      </div>
    );
}

export default Board;