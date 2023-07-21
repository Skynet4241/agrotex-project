import styled from 'styled-components';
export const FeaturesInfoSection = styled.div`
  position: relative;
  margin: 60px 0;
`;
export const FeaturesImgCells = styled.img`
  width: 82px;
  height: 96px;
  position: absolute;
  top: -78px;
  right: 0;
`;
export const FeaturesImgCellsDown = styled.img`
  width: 82px;
  height: 96px;
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    left: 0;
    transform: translate(0, -50%);
  }
`;

export const FeaturesInfoList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  @media screen and (min-width: 1200px) {
    gap: 35px;
  }
`;
export const FeaturesInfoListItem = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }
`;
export const FeaturesInfoWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 27px;
  border: 1px solid rgba(244, 244, 244, 1);
  gap: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
    height: 192px;
  }
  @media screen and (min-width: 1200px) {
    gap: 35px;
  }
`;
export const FeaturesImageWrap = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgba(249, 187, 136, 1) 0%,
    rgba(249, 187, 136, 1) 20%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );
`;
export const FeaturesInfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const FeaturesInfoTitle = styled.h3`
  color: #202020;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const FeaturesInfoText = styled.p`
  color: #202020;
  font-family: Montserrat;
  font-size: 14px;
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
