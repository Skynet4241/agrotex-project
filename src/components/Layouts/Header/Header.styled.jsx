import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: rgba(244, 244, 244, 1);
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrap = styled.div`
  padding: 16px 16px 18px 20px;
`;

export const NavigationWrap = styled.div`
  @media screen and (max-width: 767px) {
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
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavigationLink = styled.a`
  font-size: 12px;
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
