import styled from 'styled-components';
export const FeaturesInfoSection = styled.div`
  background-color: rgb(37, 42, 46);
  position: relative;
`;
export const FeaturesInfoBlock = styled.div`
  position: relative;
`;
export const FeaturesSectionTitleHidden = styled.h2`
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
export const FeaturesImgCellsWrap = styled.div`
  & > svg {
    fill: #fff;
    width: 100px;
    height: 100px;
    position: absolute;
    top: -10px;
    right: 30px;
    z-index: 1;
    @media screen and (min-width: 600px) {
      right: -30px;
    }
    @media screen and (min-width: 1200px) {
      right: 20px;
    }
  }
`;
export const FeaturesImgCellsWrapDown = styled.div`
  & > svg {
    fill: #fff;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translate(50%, 50%);
    z-index: 1;
  }
`;

export const FeaturesInfoList = styled.ul`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0;
  position: relative;
  z-index: 2;
  height: 100%;
  @media screen and (min-width: 600px) {
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
  }
  @media screen and (min-width: 1200px) {
    gap: 15px;
  }
`;
export const FeaturesInfoListItem = styled.li`
  @media screen and (min-width: 600px) {
    flex-basis: calc((100% - 40px) / 2);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((90% - 1px) / 4);
  }
`;
export const FeaturesInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255);
  height: 100%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const FeaturesImageWrap = styled.div`
  height: 80px;
  width: 100%;
  background-color: #0063a3;
  display: flex;
  align-items: center;
  padding: 80px 0;
  & > svg {
    fill: #fff;
    margin: 0 auto;
  }
`;
export const FeaturesInfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px 20px;
`;
export const FeaturesInfoTitle = styled.h3`
  color: #202020;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const FeaturesInfoText = styled.p`
  color: #202020;
  font-family: Montserrat;
  font-size: 16px;
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
