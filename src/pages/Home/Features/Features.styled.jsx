import styled from 'styled-components';

export const FeaturesImgCells = styled.img`
  width: 82px;
  height: 96px;
  margin-left: auto;
`;

export const FeaturesInfoWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 27px;
  border: 1px solid rgba(244, 244, 244, 1);
  gap: 30px;
  min-width: 300px;
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
`;
export const FeaturesInfoText = styled.p`
  color: #202020;
  font-family: Montserrat;
  font-size: 14px;
`;
