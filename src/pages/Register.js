import React from "react";
import styled from "styled-components";
import Province from "./province";

function Register(props) {
  return (
    <div align="center">
      <p>
        <Input name="닉네임" placeholder="닉네임" /> <Button>중복확인</Button>
      </p>
      <p>
        <Radio value="A" name="blood" />
        A+
        <Radio value="A" name="blood" />
        B+
        <Radio value="A" name="blood" />
        AB+
        <Radio value="A" name="blood" />
        O+
      </p>
      <p>
        <Check />
        Rh-혈액형
      </p>
      <p>
        <Province></Province>
      </p>
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
