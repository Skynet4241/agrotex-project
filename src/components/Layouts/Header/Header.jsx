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
import debounce from 'lodash.debounce';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAvailable, setIsMenuAvailable] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setIsVisible(visible);
    }, 100);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <HeaderStyle data={isVisible ? 'true' : undefined}>
      <Container>
        <HeaderWrap>
          <LogoWrap>
            <LogoLink to="/">
              <Icon name="icon-cog" width="30px" height="30px"></Icon>
              <LogoLinkSpan>А</LogoLinkSpan>гротехлан
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
