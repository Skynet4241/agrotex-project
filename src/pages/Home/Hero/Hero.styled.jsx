import styled from 'styled-components';

export const HeroStyle = styled.div`
  position: relative;
  background-color: rgba(244, 244, 244, 1);
  height: 100%;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const HeroPic = styled.picture`
  @media screen and (min-width: 600px) {
    position: relative;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const HeroImg = styled.img`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const Overlay = styled.div`
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }
`;
export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 42, 46);

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
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    padding: 0;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const HeroTitle = styled.h1`
  font-family: Montserrat;
  font-size: 34px;
  font-weight: 800;
  color: rgb(255, 255, 255);
  margin-bottom: 12px;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    font-size: 44px;
  }
`;
export const HeroTitleText = styled.p`
  font-size: 18px;
  font-family: Montserrat;
  font-style: normal;

  color: rgb(255, 255, 255);
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;

export const HeroButton = styled.button`
  line-height: 28px;
  max-width: 280px;
  padding: 8px 24px;
  width: 100%;
  font-family: Montserrat;
  font-size: 16px;
  background-color: #fff;
  border: 2px solid transparent;
  color: #0063a3;
  margin-top: 40px;
  @media screen and (min-width: 600px) {
    background-color: rgb(215, 215, 215, 0.3);
    border: 3px solid #fff;
    color: #fff;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    max-width: 400px;
    padding: 18px 24px;
  }
`;
