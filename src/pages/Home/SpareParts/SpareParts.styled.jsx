import styled from 'styled-components';

export const SparePartSection = styled.div`
  background-color: #0063a3;
  padding: 40px 0;
  @media screen and (min-width: 600px) {
    padding: 90px 0;
  }
`;

export const SparePartSectionWrap = styled.div`
s
`;

export const SparePartSectionTitleHidden = styled.h2`
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

export const SparePartInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 860px;
`;
export const SparePartInfoBlockTitle = styled.h3`
  color: #fff;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1200px) {
    font-size: 34px;
  }
`;

export const SparePartInfoBlockText = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
  }
`;
