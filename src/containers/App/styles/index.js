import styled from 'styled-components';



export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 24rem 1fr;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
`;

