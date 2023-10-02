import styled from 'styled-components';
import HeroImageMob from '../../../images/hero-mob.jpg';
import HeroImageTab from '../../../images/hero-tab.jpg';
import HeroImageDesk from '../../../images/hero-desk.jpg';

export const HeroStyle = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: rgba(244, 244, 244, 1);
  height: 100vh;
  background-image: url(${HeroImageMob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 600px) {
    background-image: url(${HeroImageTab});
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${HeroImageDesk});
  }
`;

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 42, 46);
  width: 100%;
  @media screen and (min-width: 600px) {
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    left: calc(35% - 250px);
  }
  @media screen and (min-width: 1200px) {
    left: calc(25% - 250px);
  }
`;

export const HeroInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 600px) {
    padding: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 800;
  color: rgb(255, 255, 255);
  margin-bottom: 12px;

  @media screen and (min-width: 1200px) {
    font-size: 44px;
  }
`;
export const HeroTitleText = styled.p`
  font-size: 18px;
  font-family: Montserrat;
  font-style: normal;
  color: rgb(255, 255, 255);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;

export const HeroButton = styled.button`
  line-height: 28px;
  max-width: 350px;
  padding: 8px 24px;
  width: 100%;
  font-family: Montserrat;
  font-size: 16px;
  background-color: #fff;
  border: 2px solid transparent;
  color: #0063a3;
  margin-top: 40px;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  @media screen and (min-width: 600px) {
    background-color: rgb(215, 215, 215, 0.3);
    border: 3px solid #fff;
    color: #fff;
    &:hover,
    &:focus {
      background-color: #fff;
      border-color: #fff;
      color: #0063a3;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    max-width: 400px;
    padding: 18px 24px;
  }
`;
