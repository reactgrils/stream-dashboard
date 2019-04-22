import styled, { keyframes } from 'styled-components';

const InsideCircle = keyframes`
  0% {
    transform: rotate(0deg);
    border-left: .5rem solid #ecf0f1;
    border-right: .5rem solid #ecf0f1;
  }
  100% {
    transform: rotate(-360deg);
    border-left: .5rem solid #c0392b;
    border-right: .5rem solid #c0392b;
  }
`;
 
export const CircleContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  & > div {
    position: absolute;
    border-radius: 50%;
  }
`;

export const SmallCycle = styled.div`
  width: 3rem;
  height: 3rem;
  border-top: .5rem solid #fff;
  border-bottom: .5rem solid #fff;
  border-left: .5rem solid transparent;
  border-right: .5rem solid transparent;
  animation: ${InsideCircle} 1s infinite linear;
`;



