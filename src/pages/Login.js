import React from "react";
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

        if(email == "") {
          alert("이메일을 입력해주세요.");
          return;
        }else if(pw == "") {
          alert("비밀번호를 입력해주세요.");
          return;
        }

        console.log(res.data)
        document.location.href = '/'
      })
      .catch(function(error){
       console.log(error);
    })
  }

  return (
    <div className="centerContainer">
      <div className="container">
        <div align="center">
          <p>
            <b>이메일: </b>
            <input
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </p>
          <p>
            <b>비밀번호: </b>
            <input name="pw" onChange={(event) => setPw(event.target.value)} />
          </p>
          <button onClick={login2}>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
