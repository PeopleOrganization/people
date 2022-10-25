import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";


const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

//개인 정보 보여주는 페이지
function MyPage(props) {
  // const [data, setData] = useState(null);
  const [user, setUser] = useState([]);
  const [email,setEmail] = useState("");
  const [nickName,setNickName] = useState("");
  let [blood,setBlood] = useState("");
  const [area,setArea] = useState("");

  const myPage2 = () => {
    document.location.href = '/MyPage2';
  }

  const myPage3 = () => {
    document.location.href = '/MyPage3';
  }



  const checkM = () => { // 마이페이지에 있는데 다른 페이지에서 로그아웃 시 로그인 페이지로 이동
    if(window.localStorage.getItem("check") !== ("login")) {
    document.location.href = '/login';
    }
  }

  useEffect(()=>{
    checkM();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[window.localStorage.getItem("check")])

  useEffect(() => {
    axios.post('http://localhost:3001/userInfo', null, {
      params: { 
        email: window.localStorage.getItem("email")
      }
    })
        .then(res => {
            setUser(res.data);
            // eslint-disable-next-line array-callback-return
            user.map(us=>{
              setEmail(us.email)
            })
            // eslint-disable-next-line array-callback-return
            user.map(us=>{
              setNickName(us.nickName)
            })
            // eslint-disable-next-line array-callback-return
            user.map(us=>{
              setBlood(us.blood)
            })
            // eslint-disable-next-line array-callback-return
            user.map(us=>{
              setArea(us.area)
            })
        });
},);

  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href2" href="QnAKnowledge">
            {" "}
            <li className="sidebarListItem2 active">내 정보</li>
          </a>
          &nbsp;
          <a className="href2" href="QnADesignated">
            <li className="sidebarListItem2">활동 리스트</li>
          </a>
          &nbsp;
          <a className="href2" href="QnAQuestion">
            <li className="sidebarListItem2">지정헌혈 현황</li>
          </a>
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
        </div>
      이메일:<input type={"text"}
      disabled
      value={email}
      name="nickName"/> <br/><br/>
      닉네임: <input type={"text"}
      disabled
      value={nickName}
      name="nickName"/> <br/><br/>
      혈액형: <input type={"text"}
      disabled
      value={blood}
      name="blood"/><br/><br/>
      지 역: <input type={"text"}
      disabled
      value={area}
      name="area"/><br/><br/>

      <p><button id= "myPage2"onClick={myPage2}>정보 수정</button></p>
      <p><button id= "myPage3"onClick={myPage3}>비밀번호 변경</button></p>

    </div>
    

  );
}

export default MyPage;