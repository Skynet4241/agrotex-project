import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  background-color: rgba(255, 255, 255, 1);
  position: sticky;
  width: 100%;
  height: 100%;
  left: 0;
  top: ${({ data }) => (data ? '0' : '-100px')};
  z-index: 3;
  transition: top 0.3s linear;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    z-index: 3;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 1);
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoWrap = styled.div`
  padding: 16px 10px 18px 0;
  position: relative;
  z-index: 6;
  @media screen and (min-width: 1200px) {
    padding: 16px 10px 18px 0;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #0063a3;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
  & > svg {
    margin-right: 5px;
    fill: #0063a3;
  }
`;

export const LogoLinkSpan = styled.span`
  color: #0063a3;
`;

export const NavigationWrap = styled.div`
  width: 100%;
  @media screen and (max-width: 767.98px) {
    opacity: ${({ data }) => (data ? 1 : 0)};
    visibility: ${({ data }) => (data ? 'visible' : 'hidden')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    background-color: #0063a3;
    transform: ${({ data }) => (data ? 'translateY(0%)' : 'translateY(-100%)')};
    transition: transform 250ms linear;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  & > li:last-child {
    @media screen and (min-width: 768px) {
      margin-left: auto;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0;
    position: relative;
    z-index: 5;
  }
  @media screen and (min-width: 1200px) {
    gap: 35px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  padding: 0 16px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    color: #0063a3;
    padding: 0;
    padding: 20px 0;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const NavigationLinkTel = styled.a`
  font-family: Montserrat;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  color: #fff;
  position: relative;
  z-index: 5;
  @media screen and (min-width: 768px) {
    color: #0063a3;
    padding: 20px 0;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
    padding: 20px 0;
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
  position: relative;
  width: 30px;
  height: 20px;
  z-index: 6;
  &::before,
  &::after {
    content: '';
    background-color: #151414;
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0;
    transition: all 0.3s ease 0s;
  }

  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  & > span {
    position: absolute;
    background-color: #151414;
    height: 2px;
    width: 100%;
    right: 0;
    top: 9px;
    transition: all 0.3s ease 0s;
  }
  &::before {
    transform: ${({ data }) => data && ' rotate(45deg)'};
    top: ${({ data }) => data && '9px'};
  }
  &::after {
    transform: ${({ data }) => data && ' rotate(-45deg)'};
    bottom: ${({ data }) => data && '9px'};
  }
  & > span {
    transform: ${({ data }) => data && 'scale(0)'};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIconClose = styled.div`
  display: ${({ data }) => (data ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 15px;
  min-width: 40px;
  min-height: 40px;
  background-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
