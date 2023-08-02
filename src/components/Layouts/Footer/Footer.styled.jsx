import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterStyle = styled.footer`
  background-color: #252a2e;
`;

export const FooterWrap = styled.div`
  padding: 40px 0 0;
  @media screen and (min-width: 600px) {
    padding: 90px 0 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const FooterNavLink = styled(NavLink)`
  font-family: Montserrat;
  font-size: 16px;
  color: #fff;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const FooterInfoList = styled.ul`
  display: flex;
  margin: 30px 0;
  gap: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
    flex-direction: column;
    gap: 30px;
  }
`;

export const FooterInfoListLink = styled.a`
  font-family: Montserrat;
  font-size: 16px;
  color: #b5b4b4;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const FooterInfoCopyrightText = styled.p`
  display: block;
  font-family: Montserrat;
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
