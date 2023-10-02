import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ServicesImageMob from '../../../images/Services-image-mob.jpg';
import ServicesImageDesk from '../../../images/Services-image-desk.jpg';

export const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media screen and (min-width: 600px) {
    background-image: url(${ServicesImageMob});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    position: relative;
    padding: 90px 0;
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
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${ServicesImageDesk});
  }
`;

export const ServicesInfoWrap = styled.div`
  z-index: 1;
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
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 600px) {
    padding: 0;
    background-color: rgb(14, 65, 108, 0.1);
    max-width: 860px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    background-color: rgb(14, 65, 108, 0.05);
    margin: 0 auto;
    gap: 40px;
  }
`;

export const ServicesInfoBlockTitle = styled.h3`
  color: #202020;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 600px) {
    color: #fff;
  }
  @media screen and (min-width: 1200px) {
    font-size: 34px;
  }
`;
export const ServicesInfoBlockText = styled.p`
  color: #202020;
  font-family: Montserrat;
  font-size: 18px;
  @media screen and (min-width: 600px) {
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const ServicesInfoBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    gap: 35px;
  }
`;

export const ServicesInfoBlockListItem = styled.li`
  background-color: #fff;
  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const ServicesInfoBlockListImage = styled.img`
  max-width: 300px;
  max-height: 200px;
  @media screen and (min-width: 600px) {
    max-width: 400px;
    max-height: 300px;
  }
`;

export const ServicesInfoBlockListTitleWrap = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  @media screen and (min-width: 768px) {
    height: 120px;
  }
  @media screen and (min-width: 1200px) {
    height: 150px;
  }
`;

export const ServicesInfoBlockListTitle = styled.h4`
  font-size: 18px;
  color: #0063a3;
  font-family: Montserrat;
  padding: 20px 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
    font-size: 20px;
  }
`;

export const ServicesInfoBlockButton = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-top: 40px;
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
    margin: 0;
    font-size: 18px;
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
    margin-top: 40px;
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
