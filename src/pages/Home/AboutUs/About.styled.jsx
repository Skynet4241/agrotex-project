import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AboutSection = styled.div`
  background: rgb(241, 241, 246);
  padding-bottom: 50px;
  @media screen and (min-width: 600px) {
    padding: 50px 0;
  }
`;
export const AboutSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 40px 0;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
`;
export const AboutPicture = styled.picture`
  display: block;
`;
export const AboutImg = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 2px 2px 7px 7px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 600px) {
    max-width: 500px;
    max-height: 500px;
    box-shadow: 5px 5px 9px 9px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 768px) {
    max-width: 600px;
    max-height: 600px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 550px;
    max-height: 550px;
  }
`;
export const AboutInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 590px;
  @media screen and (min-width: 600px) {
    max-width: 860px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;
export const AboutTitle = styled.h3`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 34px;
  }
`;

export const AboutText = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const AboutBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  line-height: 28px;
  max-width: 350px;
  padding: 18px 24px;
  width: 100%;
  font-family: Montserrat;
  font-size: 16px;
  background-color: #0063a3;
  border: 2px solid transparent;
  color: #fff;
  margin-top: 40px;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  @media screen and (min-width: 600px) {
    background-color: #0063a3;
    color: #fff;
    font-size: 18px;
    &:hover,
    &:focus {
      background-color: #0e416c;
      border-color: #0e416c;
      color: #fff;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    max-width: 400px;
    padding: 18px 24px;
  }
  & > svg {
    fill: #fff;
    margin-left: auto;
  }
`;
