import React from 'react';

function BoardBloodType(props) {
    return (
      <div className="centerContainer">
        <div className="container">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h1 className="sidebarTitle">소통해요!</h1>
                <span align="center" className="hello">
                  피플은 고객님의 정보를 소중하게 생각합니다.
                  <br></br>일부 서비스는 로그인 이후 이용 가능합니다.
                </span>
                <hr />
                <ui className="sidebarCircle">
                  <ul className="sidebarList">
                    <a className="href" href="Board">
                      {" "}
                      <li className="sidebarListItem">전체게시판</li>
                    </a>
                    &nbsp;
                    <a className="href" href="BoardBloodType">
                      <li className="sidebarListItem active">혈액형게시판</li>
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

          <h3 align="center">나는 혈액형게시판이야</h3>
        </div>
      </div>
    );
}

export default BoardBloodType;