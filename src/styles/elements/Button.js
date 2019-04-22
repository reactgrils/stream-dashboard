import styled from "styled-components";

export const CommonButton = styled.button`
  max-width: 20rem;
  width: 15rem;
  height: 3rem;
  margin-right: ${props => props.margin};
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
