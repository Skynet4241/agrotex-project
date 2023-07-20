import styled from 'styled-components';

export const HeroStyle = styled.div`
  background-color: rgba(244, 244, 244, 1);
  background-image: linear-gradient(
    to right,
    rgba(249, 187, 136, 1) 0%,
    rgba(249, 187, 136, 1) 40%,
    rgba(244, 244, 244, 1) 40%,
    rgba(244, 244, 244, 1) 100%
  );
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
      to right,
      rgba(249, 187, 136, 1) 0%,
      rgba(249, 187, 136, 1) 30%,
      rgba(244, 244, 244, 1) 30%,
      rgba(244, 244, 244, 1) 100%
    );
  }
`;

export const HeroInfoWrap = styled.div`
  width: 200px;
  display: flex;
  margin-left: auto;
  padding: 40px 0;
  @media screen and (min-width: 480px) and (min-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(247, 243, 243, 0.3);
  pointer-events: none;
`;
export const HeroImg = styled.img``;

export const HeroTitle = styled.h1`
  font-size: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
