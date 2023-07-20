import { useState } from 'react';
import { Container } from '../../../utils/Container';
import { Icon } from '../../../utils/Icon';
import {
  HeaderStyle,
  HeaderWrap,
  LogoWrap,
  MenuIconClose,
  MenuIconOpen,
  NavigationLink,
  NavigationLinkTel,
  NavigationList,
  NavigationWrap,
} from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(pS => !pS);

  return (
    <HeaderStyle>
      <Container>
        <HeaderWrap>
          <LogoWrap>
            <a href="/">Agrotexlan</a>
          </LogoWrap>
          <NavigationWrap data={isMenuOpen ? 'true' : undefined}>
            <MenuIconClose
              onClick={handleToggle}
              data={isMenuOpen ? 'true' : undefined}
            >
              <Icon name="icon-close" width="14px" height="14px"></Icon>
            </MenuIconClose>
            <NavigationList>
              <li>
                <NavigationLink to="/">Головна</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/">Про нас</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/">Послуги</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/">Запчастини</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/">Контакти</NavigationLink>
              </li>
              <li>
                <NavigationLinkTel href="tel:+380961111111">
                  +38 096 111 11 11
                </NavigationLinkTel>
              </li>
            </NavigationList>
          </NavigationWrap>
          <MenuIconOpen onClick={handleToggle}>
            <Icon name="icon-menu" width="24px" height="24px"></Icon>
          </MenuIconOpen>
        </HeaderWrap>
      </Container>
    </HeaderStyle>
  );
};
