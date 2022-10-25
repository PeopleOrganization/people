import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

// import { KAKAO_AUTH_URL } from "../KaKaoLoginData";
// import logo from "../imgs/kakaologin.png";

// function Login(props) {
//   return (
//     <div align="center">
//       <a href={KAKAO_AUTH_URL}>
//         <img className="buttonImage" alt="kakaoButton" src={logo}></img>
//       </a>
//     </div>
//   );
// }


function Login(props) {
  const [email,setEmail] = useState("");
  const [pw,setPw] = useState("");

  const login2 = () => {

    console.log("로그인 하러 옴");
    axios.post('http://localhost:3001/login', null, {
      params: { 
        email: email,
        pw: pw,
      }
    })
      .then(res => {

        if(email === "") {
          alert("이메일을 입력해주세요.");
          return;
        }else if(pw === "") {
          alert("비밀번호를 입력해주세요.");
          return;
        }

        console.log(res.data)
        if(res.data === 0) { // 0을 받아오면 성공했다는 알람
          alert("로그인에 성공하셨습니다.");
          window.localStorage.setItem("check", "login");    
          window.localStorage.setItem("email", email);
          document.location.href = '/'

    

        }else { // 0이외의 값이라면 실패했다는 알람
          alert("로그인에 실패하셨습니다.");
        }
      }) 
      .catch(function(error){
       console.log(error);
    })
  }

  const checkL = () => { // 로그인 페이지에 있는데 다른 페이지에서 이미 로그인 했다면
    if(window.localStorage.getItem("check") === ("login")) {
    document.location.href = '/';
    }
  }

  useEffect(()=>{
    checkL();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[window.localStorage.getItem("check")])



  return (
    <div className="centerContainer">
      <div className="container">
        <h1 className="sidebarTitle">로그인</h1>
        <span align="center" className="hello">
          <span id="redColor">피플</span>은 고객님의 정보를 소중하게 생각합니다.
          </span><span align="center" className="hello">일부 서비스는 로그인 이후 이용 가능합니다.
        </span><hr/>
        
        <div id="box">
        <table id="table">
          <div align="center" id="margin">
            <tr><span id="loginText">이메일</span>
              <p><input type={"text"}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            <br/><span id="loginText">패스워드</span><br/>
              <input type={"password"}
                name="pw"
                
                onChange={(event) => setPw(event.target.value)}
              /></p>
            </tr>
            <tr>
            <p><button id= "loginBtn"onClick={login2}>로그인</button></p>
            </tr>

            <tr>
              <p> <a id="loginHref" href="Register" onClick={login2}>비밀번호 찾기 ꒐</a>&nbsp;
              <a id="loginHref" href="Register" onClick={login2}>회원가입</a>&nbsp;
              </p>
            </tr>
          </div>
        </table>
        
        </div>
      </div>
    </div>
  );
}

export default Login;
