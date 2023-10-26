import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_actions";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import StyledContainer from "../components/Style/styledContainer";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px 12px 0px;
`
const Logo = styled.img`
    display: inline-block;
    width: 48px;
    height: 52px;
`;
const LogoTitle = styled.h2`
  color: #757575;
  font-size: 16px;
  font-weight: normal;
  padding: 28px 8px 0px 0px;
  letter-spacing: -0.045rem;
`;
const StyledDiv = styled.div`
  color: #c62917;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
`;
const StyledSpan = styled.span`
  color: #909090;
  font-weight: 300;
  margin-right: 10px;
  letter-spacing: -0.05rem;
`;

function Login() {
  return <></>
}

export default withRouter(Login);
