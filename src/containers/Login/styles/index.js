import styled, { css } from "styled-components";
import { CenterDiv, Button } from "../../../styles";
import { Hr } from "../../../styles/elements/Hr";

const lineSpec = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3.5rem;
  height: 0.4rem;
  background-color: #fff;
  display: inline-block;
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const LoginCard = styled.div`
  height: 75%;
  max-height: 500px;
  width: 50%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d3436;
  border-radius: 10px;
  opacity: 1;
  box-shadow: 10px 10px 0.9;
  padding-top: 2rem;
  @media (max-width: 768px) {
    height: 60%;
    max-height: 400px;
    width: 60%;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    height: 50%;
    max-height: 25rem;
    width: 75%;
    max-width: 30rem;
  }
`;

export const CenterArea = styled(CenterDiv)`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const InputSection = styled.div`
  height: 42.5%;
  width: 100%;
`;

export const InputArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 2rem;
  & > div {
    position: relative;
    width: 100%;
    height: 45%;
  }
`;

export const InputField = styled.input`
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  height: 5%;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;
  margin: 1.7rem 0;
  color: #fff;
  font-size: 1.5rem;
  &:focus {
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
`;

export const LoginLabel = styled.label`
  position: absolute;
  top: 0;
  left: 10%;
  text-align: left;
  display: block;
  font-weight: 800;
  width: auto;
  height: auto;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  transition: all 0.5s ease-in-out;
  ${InputField}:focus + & {
    color: #fff;
  }
`;

export const ButtonArea = styled.div`
  max-width: 100%;
  height: 10%;
  /* background-color: #ddd; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const CustomButtom = styled(Button)`
  height: 3.5rem;
  background-color: inherit;
  opacity: 0.6;
  font-size: 1.5rem;
  position: relative;
  border: 2px solid #95a5a6;
  color: #fff;
  border-radius: 1rem;
  margin-left: ${props => (props.show ? "1.5rem" : "0")};
  &:hover {
    color: #000;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 0px;
    height: 100%;
    display: block;
    z-index: -1;
    transition: all 0.7s ease;
    border-radius: 0.8rem;
  }

  &:hover::before {
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0.6;
    background-color: ${props => (props.show ? "pink" : "lightgreen")};
  }
`;

export const SigunupButton = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 20%;
  right: -3rem;
  background-color: #8e44ad;
  border-radius: 2.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
    & > span:nth-of-type(1) {
      background-color: #000;
      transform: translate(-17px, -2px) rotate(45deg);
    }

    & > span:nth-of-type(2) {
      background-color: #000;
      transform: translate(-17px, -2px) rotate(-45deg);
    }
  }

  & > span:nth-of-type(1) {
    ${lineSpec}
    transform: translate(-50%, -50%);
  }

  & > span:nth-of-type(2) {
    ${lineSpec}
    transform:  translate(-50%, -50%) rotate(90deg);
  }
`;

export const CommonHr = styled(Hr)`
  background-color: #2d3436;
  width: 99%;
  height: 0.1rem;
  margin-top: 2rem;
`;

export const SocialArea = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-top: 4rem;

  & > span {
    cursor: pointer;
    display: inline-block;
    width: 7rem;
    font-size: 4rem;

    &:nth-of-type(1) > i {
      color: rgb(59, 89, 152);
    }
    &:nth-of-type(2) > i {
      color: rgb(219, 50, 54);
    }
  }
`;

export const ModalInputArea = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
`;

export const CustomInputField = styled.input`
  display: inline-block;
  width: 60%;
  height: 3rem;
  border-radius: 0.4rem;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: border 0.5s ease;
  background-color: #fff;
  font-size: 1.4rem;
  padding: 0.1rem 1rem;
  &:focus {
    border: 1px solid #1890ff;
  }
`;
export const CustomModalLabel = styled.label`
  display: inline-block;
  width: 6.5rem;
  height: 2rem;
  font-size: 1.4rem;
  margin-left: 2rem;
  text-align: left;
`;

export const ModalButtonArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-right: 1rem;
`;

export const ErrorArea = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-top;
  & > span {
    color: red;
  }
`;
