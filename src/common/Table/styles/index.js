import styled from 'styled-components';


export const CommonTable = styled.table`
  width: 100%;
  table-layout: fixed;
`;


export const Container = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  background-color: rgba(255,255,255,0.3);

  
  & > table {
    width: 100%;
  }

  & tr {
    display: flex;
    justify-content: space-around;

    & > th {
      padding: 2rem 5rem;
      font-weight: 600;
      font-size: 1.2rem;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;


export const TableDetail = styled.div`
  height: 80%;
  /* overflow: auto */
  border: .1rem solid rgba(255, 255, 255, .3);
`;



