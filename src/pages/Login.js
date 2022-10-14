import React from "react";
import { KAKAO_AUTH_URL } from "../KaKaoLoginData";
import logo from "../imgs/kakaologin.png";

function Login(props) {
  return (
    <div align="center">
      <a href={KAKAO_AUTH_URL}>
        <img className="buttonImage" alt="kakaoButton" src={logo}></img>
      </a>
    </div>
  );
}

export default Login;
