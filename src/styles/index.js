import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 15rem;
  height: 100%;
  background-color: transparent;
  border: 2px solid #ffaf40;
  cursor: pointer;
`;

export const SocialArea = styled.div`
  width: 100%;
  height: 40%;
`;
