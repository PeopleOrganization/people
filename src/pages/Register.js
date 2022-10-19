import React from 'react';
import styled from "styled-components";
import Province from "./province";
import axios from 'axios'
import { useState } from "react";

function Register(props) {

  const [email,setEmail] = useState("");
  const [pw,setPw] = useState("");
  const [nickName,setNickName] = useState("");
  const [blood,setBlood] = useState("");
  const [area,setArea] = useState("");
  const [interLoc,setInterLoc] = useState("");
  const [push,setPush] = useState(false);
  const handleChange = () => { 
    setPush(!push); 
  }; 


  const newPosting = () => {
    console.log("회원가입 하러 옴");
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
        alert("회원가입이 왼료되었습니다.")
        document.location.href = '/'
      })
      .catch(function(error){
       console.log(error);
    })
  }


  return (
    <div align="center">
      <p>
      <Input name="email" onChange={(event) => setEmail(event.target.value)} placeholder="이메일" />
      </p>
      <p>
      <Input name="pass" onChange={(event) => setPw(event.target.value)}  placeholder="비밀번호" />
      </p>
      <p>
      <Input name="passCheck" placeholder="비밀번호 확인" />
      </p>
      <p>
        <Input name="nickName" onChange={(event) => setNickName(event.target.value)} placeholder="닉네임" /> <Button>중복확인</Button>
      </p>
      <p>
        <Radio onChange={(event) => setBlood(event.target.value)} value="A" name="blood" />
        A
        <Radio onChange={(event) => setBlood(event.target.value)} value="B"  name="blood" />
        B
        <Radio onChange={(event) => setBlood(event.target.value)} value="AB"  name="blood" />  
        AB
        <Radio onChange={(event) => setBlood(event.target.value)} value="O"  name="blood" />
        O
      </p>
      <p>
        <Check name ="rh"/>
        Rh-혈액형
      </p>
      <p>
      <Input name="area" onChange={(event) => setArea(event.target.value)}  placeholder="거주지역" />
      </p>
      <div>
        <Province></Province>
        </div>
        <p>
        <Check id ="agree" onChange={handleChange}/>카카오 채널 푸쉬알림 허용동의
        </p>
      <button onClick={newPosting}>회원가입</button>
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