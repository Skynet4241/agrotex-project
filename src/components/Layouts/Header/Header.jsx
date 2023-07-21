import { useEffect, useState } from 'react';
import { Container } from '../../../utils/Container';
import { Icon } from '../../../utils/Icon';
import {
  HeaderStyle,
  HeaderWrap,
  LogoLink,
  LogoLinkSpan,
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
  const [isMenuAvailable, setIsMenuAvailable] = useState(false);

  const handleToggle = () => setIsMenuOpen(pS => !pS);

  useEffect(() => {
    const updateMenuAvailability = () => {
      const isMobileMenuAvailable = window.innerWidth <= 767.98;
      setIsMenuAvailable(isMobileMenuAvailable);
      setIsMenuOpen(false);
    };

    updateMenuAvailability();
    window.addEventListener('resize', updateMenuAvailability);

    return () => {
      window.removeEventListener('resize', updateMenuAvailability);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderStyle>
      <Container>
        <HeaderWrap>
          <LogoWrap>
            <LogoLink to="/">
              <Icon name="icon-cog" width="30px" height="30px"></Icon>
              Агротех<LogoLinkSpan>лан</LogoLinkSpan>
            </LogoLink>
          </LogoWrap>
          <NavigationWrap data={isMenuOpen ? 'true' : undefined}>
            <MenuIconClose
              onClick={handleToggle}
              data={isMenuOpen ? 'true' : undefined}
            ></MenuIconClose>
            <NavigationList>
              <li>
                <NavigationLink to="/" onClick={handleLinkClick}>
                  Головна
                  <Icon
                    name="icon-arrow-right"
                    width="10px"
                    height="10px"
                  ></Icon>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/" onClick={handleLinkClick}>
                  Про нас
                  <Icon
                    name="icon-arrow-right"
                    width="10px"
                    height="10px"
                  ></Icon>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/" onClick={handleLinkClick}>
                  Послуги
                  <Icon
                    name="icon-arrow-right"
                    width="10px"
                    height="10px"
                  ></Icon>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/" onClick={handleLinkClick}>
                  Запчастини
                  <Icon
                    name="icon-arrow-right"
                    width="10px"
                    height="10px"
                  ></Icon>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/" onClick={handleLinkClick}>
                  Контакти
                  <Icon
                    name="icon-arrow-right"
                    width="10px"
                    height="10px"
                  ></Icon>
                </NavigationLink>
              </li>
              <li>
                <NavigationLinkTel href="tel:+380961111111">
                  +38 096 111 11 11
                </NavigationLinkTel>
              </li>
            </NavigationList>
          </NavigationWrap>
          <MenuIconOpen
            onClick={handleToggle}
            data={isMenuOpen ? 'true' : undefined}
          >
            <span></span>
          </MenuIconOpen>
        </HeaderWrap>
      </Container>
    </HeaderStyle>
  );
};
