import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterStyle = styled.footer`
  background-color: #252a2e;
`;

export const FooterWrap = styled.div`
  padding: 40px 0;
`;

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterNavLink = styled(NavLink)`
  font-family: Montserrat;
  font-size: 16px;
  color: #fff;
`;

export const FooterInfoList = styled.ul`
  display: flex;
  margin: 30px 0;
  gap: 20px;
`;

export const FooterInfoListLink = styled.a`
  font-family: Montserrat;
  font-size: 16px;
  color: #b5b4b4;
`;

export const FooterInfoCopyrightText = styled.p`
  display: block;
  font-family: Montserrat;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
