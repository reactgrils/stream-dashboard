import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    background-color: inherit;
  }
  
  to {
    background-color: rgba(0,0,0,0.5);
  
`;

export const FullShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fade} 1.5s linear forwards;
`;

export const SignupArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 30rem;
  border-radius: 5%;
  background-color: #fff;
`;

export const InputArea = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding-top: 3rem;
`;

export const ErrorArea = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  color: red;
  top: 85%;
  transform: translateY(-85%);
  display: flex;
  justify-content: center;
`;
