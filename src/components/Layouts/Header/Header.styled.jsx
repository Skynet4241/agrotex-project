import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  background-color: rgba(244, 244, 244, 1);
  background-image: linear-gradient(
    to right,
    rgba(249, 187, 136, 1) 0%,
    rgba(249, 187, 136, 1) 40%,
    rgba(244, 244, 244, 1) 40%,
    rgba(244, 244, 244, 1) 100%
  );
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
      to right,
      rgba(249, 187, 136, 1) 0%,
      rgba(249, 187, 136, 1) 30%,
      rgba(244, 244, 244, 1) 30%,
      rgba(244, 244, 244, 1) 100%
    );
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrap = styled.div`
  padding: 16px 10px 18px;
`;

export const NavigationWrap = styled.div`
  @media screen and (max-width: 767.98px) {
    opacity: ${({ data }) => (data ? 1 : 0)};
    visibility: ${({ data }) => (data ? 'visible' : 'hidden')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 48px 40px;
    background-color: transparent;
    background-image: linear-gradient(
      to right,
      rgba(249, 187, 136, 1) 0%,
      rgba(249, 187, 136, 1) 50%,
      rgba(244, 244, 244, 1) 50%,
      rgba(244, 244, 244, 1) 100%
    );
    transform: ${({ data }) => (data ? 'translateX(0%)' : 'translateX(100%)')};
    transition: transform 250ms linear;
    @media screen and (min-width: 768px) {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    gap: 35px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: block;
  color: #202020;
  font-family: Montserrat;
  font-size: 14px;

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    padding: 20px 0;
  }
`;

export const NavigationLinkTel = styled.a`
  color: #202020;
  font-family: Montserrat;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    color: rgba(255, 150, 70, 1);
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
export const HeaderButton = styled.button`
  width: 140px;
  height: 30px;
  color: #f4f4f4;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(255, 150, 70, 1);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;

export const MenuIconOpen = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIconClose = styled.div`
  display: ${({ data }) => (data ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  min-width: 40px;
  min-height: 40px;
  background-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
