import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ServicesSection = styled.div`
  @media screen and (min-width: 600px) {
    position: relative;
  }
`;

export const ServicesInfoWrap = styled.div`
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }
`;
export const ServicesSectionPicture = styled.picture`
  position: relative;

  @media screen and (min-width: 600px) {
  }
`;

export const ServicesSectionImage = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 400px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
`;
export const ServicesOverlay = styled.div`
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
`;
export const ServicesTitleHidden = styled.div`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const ServicesBlock = styled.div`
  background-color: #fff;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 600px) {
    padding: 0;
    background-color: rgb(14, 65, 108, 0.2);
    max-width: 860px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 0;
    background-color: rgb(14, 65, 108, 0.2);
  }
  @media screen and (min-width: 1200px) {
    padding: 40px 0;
    background-color: rgb(14, 65, 108, 0.05);
  }
`;

export const ServicesInfoBlockTitle = styled.h3`
  color: #202020;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  @media screen and (min-width: 600px) {
    color: #fff;
    font-size: 24px;
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const ServicesInfoBlockText = styled.p`
  color: #202020;
  font-family: Montserrat;
  font-size: 16px;
  @media screen and (min-width: 600px) {
    color: #fff;
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const ServicesInfoBlockButton = styled(NavLink)`
  display: flex;
  align-items: center;
  line-height: 28px;
  max-width: 350px;
  padding: 18px 24px;
  width: 100%;
  font-family: Montserrat;
  font-size: 16px;
  border: 2px solid #0e416c;
  background-color: rgb(215, 215, 215, 0.2);
  color: #0e416c;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  @media screen and (min-width: 600px) {
    font-size: 18px;
    margin-top: 25px;
    background-color: rgb(14, 65, 108, 0.4);
    color: #fff;
    &:hover,
    &:focus {
      background-color: #0e416c;
      border-color: #0e416c;
      color: #fff;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 55px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    max-width: 400px;
    padding: 18px 24px;
    background-color: rgb(14, 65, 108, 0.05);
  }
  & > svg {
    fill: #0e416c;
    margin-left: auto;
    @media screen and (min-width: 600px) {
      fill: #fff;
    }
  }
`;