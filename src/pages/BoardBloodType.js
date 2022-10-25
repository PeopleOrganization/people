import React from 'react';

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

function BoardBloodType(props) {
    return (
      <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href" href="Board">
            {" "}
            <li className="sidebarListItem2">전체게시판</li>
          </a>
          &nbsp;
          <a className="href" href="BoardBloodType">
            <li className="sidebarListItem2 active">혈액형게시판</li>
          </a>
          &nbsp;
          <a className="href" href="BoardLoc">
            <li className="sidebarListItem2">지역게시판</li>
          </a>
          <br></br>
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </ul>
      </div>

      <div className="container">
        <h1 className="sidebarTitle">소통해요!</h1>
        <span align="center" className="hello">
        동일한 혈액형끼리 소통을 할 수 있는 게시판입니다.
        </span>
        <hr />

        <div className="others">
          <h3 align="center">나는 혈액형게시판이야</h3>
        </div>
      </div>
    </div>
    );
}

export default BoardBloodType;