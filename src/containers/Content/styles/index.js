import styled from 'styled-components';


export const MainContainer = styled.div`
  grid-area: main;
  background-color: #fff;
  padding: 1.5rem;
  width: 100%;
  height: 100%;

  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  div.transition-group {
    position: relative;
    width: 100%;
    height: 100%;
  }

  div.route-section {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
/* 
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  } */
`;