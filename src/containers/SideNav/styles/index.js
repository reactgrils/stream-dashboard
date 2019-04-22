import styled from 'styled-components';

export const SidemenuContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: sidenav;
  background-color: #394263;
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(-26rem)'};
  transition: all .6s ease-in-out;
`;

export const SideMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 8.5rem;
`;

export const SideMenuItem = styled.li`
  color: #ddd;
  &:hover {
    cursor: pointer;
  }
`;

export const InsideDiv = styled.div`
  position: relative;
  font-size: 1.4rem;
  padding: 2rem 2rem 2rem 4rem;
  & > span {
    &:first-child {
      margin-right: 1rem;
    }
  }

  &::after {
    position: absolute;
    content: "";
    width: 1rem;
    height: 1rem;
    right: 1rem;
    top: 2.25rem;
    border-bottom: .2rem solid rgba(255, 255, 255, .5);
    border-right: .2rem solid rgba(255, 255, 255, .5);
    transition: all .2s;
    transform: ${props => props.show ? 'rotate(405deg)' : 'rotate(225deg)'}
  }
`;

export const InsideUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  background-color: darken(0.1, #394263);
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  max-height: ${props => props.active ? '20rem' : '0'};
  overflow: hidden;
  transition: all .3s ease-in-out;
  width: 100%;
  & > li {
    display: inline-block;
    width: 100%;
    padding: 1rem 0 1rem 6rem;
    font-size: 1.4rem;
    text-transform:capitalize;
    color: #fff;
    background-color: #262c43;
    &:first-child {
      padding-top: 1.2rem;
    }
    &:hover {
      background-color: rgba(255, 255, 255, .1);
      cursor: pointer;
    }
    & > a {
      display: inline-block;
      width: 100%;
      height: 100%;
      
      & > span {
      display: inline-block;

      margin-right: 1rem;
      &:first-child {
        width: 1.5rem;
        }
      }
    }
  }
`;