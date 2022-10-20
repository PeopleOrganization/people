import React from 'react';

function MyPage(props) {
  return (
    <div className="centerContainer">
      <div className="container">
        <h1 className="sidebarTitle">마이페이지</h1>
        <span align="center" className="hello">
          피플은 고객님의 정보를 소중하게 생각합니다.
          <br></br>일부 서비스는 로그인 이후 이용 가능합니다.
        </span>
        <hr />
      </div>
    </div>
  );
}

export default MyPage;