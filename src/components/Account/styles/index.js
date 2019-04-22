import styled, { keyframes } from 'styled-components';


const gradient = keyframes`
  0% {
    background-position:0 0
  }

  100% {
    background-position:100% 0
  }
`;


export const AccountContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#636e72, #9198e5);
`;

export const SearchField = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 20rem;
  height: 3.5rem;
  background-color: rgba(57, 63, 84, 0.8);

  & > input {
    display: inline-block;
    color: #7881A1;
    width: 100%;
    height: 100%;
    max-width: 20rem;
    margin: 0 auto;
    padding: 1.2rem 1.5rem;
    font-size: 1.5rem;
    line-height: 2.4rem;
    vertical-align: middle;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: .2rem;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: ${gradient} 3s linear infinite;
  }
`;