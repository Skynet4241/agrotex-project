import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ServicesSection = styled.div`
  @media screen and (min-width: 600px) {
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
  background: #fff;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ServicesInfoBlockTitle = styled.h3`
  color: #202020;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const ServicesInfoBlockText = styled.p`
  color: #202020;
  font-family: Montserrat;
  font-size: 16px;
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const ServicesInfoBlockButton = styled.button`
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
  margin-top: 40px;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  @media screen and (min-width: 600px) {
    background-color: #0063a3;
    color: #fff;
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
    fill: #0e416c;
    margin-left: auto;
  }
`;
