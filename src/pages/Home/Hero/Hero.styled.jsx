import styled from 'styled-components';

export const HeroStyle = styled.div`
  position: relative;
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
export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 30px;
    flex-direction: row;
  }
`;

export const HeroInfoWrap = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding: 40px 0;
  position: relative;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 260px;
  }
  @media screen and (min-width: 768px) {
    width: 245px;
    padding: 0;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 340px;
  }
`;
export const Overlay = styled.div`
  background-color: rgba(247, 243, 243, 0.3);
  pointer-events: none;
  margin-bottom: 20px;
`;
export const HeroPic = styled.picture`
  @media screen and (min-width: 768px) {
    padding: 10px 0 40px 12px;
  }
`;
export const HeroImg = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 768px) {
    width: 430px;
    height: 260px;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
    height: 500px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 18px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 45px;
  }
`;
export const HeroTitleSpan = styled.span`
  font-size: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: #ff9646;
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const HeroInfoLine = styled.div`
  height: 3px;
  background-color: #f9bb88;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 400px;
    top: 60px;
    right: 0;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
    top: 158px;
  }
`;

export const HeroButton = styled.button`
  width: 190px;
  height: 40px;
  border-radius: 5px;
  background: #ff9646;
  border: none;
  color: #f4f4f4;
  font-family: Montserrat;
  font-size: 14px;
`;
