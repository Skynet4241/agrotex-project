import styled from 'styled-components';

export const ContainerWrap = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1280px;
  }
`;
