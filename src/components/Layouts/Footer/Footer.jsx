import { Container } from '../../../utils/Container';
import {
  FooterInfoCopyrightText,
  FooterInfoList,
  FooterInfoListLink,
  FooterNavLink,
  FooterNavList,
  FooterStyle,
  FooterWrap,
} from './Footer.styled';

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <Container>
          <FooterWrap>
            <FooterNavList>
              <li>
                <FooterNavLink to="/">Головна</FooterNavLink>
              </li>
              <li>
                <FooterNavLink to="/about">Про нас</FooterNavLink>
              </li>
              <li>
                <FooterNavLink to="/services">Послуги</FooterNavLink>
              </li>
              <li>
                <FooterNavLink to="/spareParts">Запчастини</FooterNavLink>
              </li>
              <li>
                <FooterNavLink to="/contacts">Контакти</FooterNavLink>
              </li>
            </FooterNavList>
            <FooterInfoList>
              <li>
                <FooterInfoListLink href="tel:+380961111111">
                  +38 096 111 11 11
                </FooterInfoListLink>
              </li>
              <li>
                <FooterInfoListLink href="mailto:example@examle.com">
                  example@examle.com
                </FooterInfoListLink>
              </li>
            </FooterInfoList>
          </FooterWrap>
          <FooterInfoCopyrightText>
            © Copyright Agrotexlan 2023
          </FooterInfoCopyrightText>
        </Container>
      </FooterStyle>
    </>
  );
};

export default Footer;
