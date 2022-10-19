import React from 'react';
import styled from "styled-components";
import Province from "./province";
import axios from 'axios'
import { useState } from "react";

function Register(props) {

  const [check,setCheck] = useState("1");
  const [email,setEmail] = useState("");
  const [pw,setPw] = useState("");
  const [pw2,setPw2] = useState("");
  const [nickName,setNickName] = useState("");
  const [blood,setBlood] = useState("");
  const [area,setArea] = useState("");
  const [interLoc,setInterLoc] = useState("");
  const [push,setPush] = useState(false);
  const handleChange = () => { 
    setPush(!push); 
  }; 


  const join = () => {
    console.log("회원가입 하러 옴");

    if(email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }else if(pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }else if(nickName === "") {
      alert("닉네임을 입력해주세요");
      return;
    }else if(pw2 !== pw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if(check !== 0) {
      alert("닉네임 중복체크를 해주세요.");
      return;
    }

    axios.post('http://localhost:3001/join', null, {
      params: { 
        email: email,
        pw: pw,
        nickName : nickName,
        blood: blood,
        area: area,
        interLoc: interLoc,
        push: push
      }
    })
      .then(res => {  
        console.log(res.data)
        alert("회원가입에 성공하셨습니다.")
        document.location.href = '/'
      })
      .catch(function(error){
       console.log(error);
    })
  }

  const overlap = () => {
    console.log("중복체크 하러 옴");


    axios.post('http://localhost:3001/overlap', null, {
      params: { 
        nickName: nickName,
      }
    })
      .then(res => {

        console.log(res.data)
        if(res.data === 0) { // 0을 받아오면 성공했다는 알람
          alert("사용해도 되는 닉네임입니다.");
          setCheck(0);
          return;
        }else { // 0이외의 값이라면 실패했다는 알람
          alert("이미 존재하는 닉네임입니다.")
          return;
        }
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
            <Input
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="이메일"
            />
          </p>
          <p>
            <Input
              name="pass"
              onChange={(event) => setPw(event.target.value)}
              placeholder="비밀번호"
            />
          </p>
          <p>
      <Input name="passCheck" onChange={(event) => setPw2(event.target.value)} placeholder="비밀번호 확인" />
      </p>

          <p>
            <Input
              name="nickName"
              onChange={(event) => setNickName(event.target.value)}
              placeholder="닉네임"
            />{" "}
            <Button onClick={overlap}>중복확인</Button>
          </p>
          <p>
            <Radio
              onChange={(event) => setBlood(event.target.value)}
              value="A"
              name="blood"
            />
            A
            <Radio
              onChange={(event) => setBlood(event.target.value)}
              value="B"
              name="blood"
            />
            B
            <Radio
              onChange={(event) => setBlood(event.target.value)}
              value="AB"
              name="blood"
            />
            AB
            <Radio
              onChange={(event) => setBlood(event.target.value)}
              value="O"
              name="blood"
            />
            O
          </p>
          <p>
            <Check name="rh" />
            Rh-혈액형
          </p>
          <p>
            <Input
              name="area"
              onChange={(event) => setArea(event.target.value)}
              placeholder="거주지역"
            />
          </p>
          <div>
            <Province></Province>
          </div>
          <p>
            <Check id="agree" onChange={handleChange} />
            카카오 채널 푸쉬알림 허용동의
          </p>
          <button onClick={join}>회원가입</button>
        </div>
      </div>
    </div>
  );
}



export default Register;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))``;

const Button = styled.button``;

const Radio = styled.input.attrs((props) => ({
  type: "radio",
  size: props.size || "1em",
}))`y
  margin-left: 10px;
`;

const Check = styled.input.attrs((props) => ({
  type: "checkbox",
  size: props.size || "1em",
}))`
  margin-left: 10px;
  margin-right: 3px;
`;