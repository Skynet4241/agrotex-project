import { Container } from '../../../utils/Container';
import Cells from '../../../images/cells.png';
import {
  FeaturesImageWrap,
  FeaturesImgCells,
  FeaturesImgCellsDown,
  FeaturesInfoList,
  FeaturesInfoListItem,
  FeaturesInfoSection,
  FeaturesInfoText,
  FeaturesInfoTextWrap,
  FeaturesInfoTitle,
  FeaturesInfoWrap,
} from './Features.styled';
import { Icon } from '../../../utils/Icon';
export const Features = () => {
  return (
    <>
      <FeaturesInfoSection>
        <Container>
          <FeaturesImgCells src={Cells} alt="Клітинки" />
          <FeaturesInfoList>
            <FeaturesInfoListItem>
              <FeaturesInfoWrap>
                <FeaturesImageWrap>
                  <Icon name="icon-worker" width="60px" height="60px"></Icon>
                </FeaturesImageWrap>

                <FeaturesInfoTextWrap>
                  <FeaturesInfoTitle>Повний комплекс робіт</FeaturesInfoTitle>
                  <FeaturesInfoText>
                    Наша компанія надає послуги та виконує роботи різного
                    характеру
                  </FeaturesInfoText>
                </FeaturesInfoTextWrap>
              </FeaturesInfoWrap>
            </FeaturesInfoListItem>
            <FeaturesInfoListItem>
              <FeaturesInfoWrap>
                <FeaturesImageWrap>
                  <Icon name="icon-money" width="60px" height="60px"></Icon>
                </FeaturesImageWrap>

                <FeaturesInfoTextWrap>
                  <FeaturesInfoTitle>Даємо гарантію</FeaturesInfoTitle>
                  <FeaturesInfoText>
                    Усі наші роботи та послуги супроводжуються гарантією
                  </FeaturesInfoText>
                </FeaturesInfoTextWrap>
              </FeaturesInfoWrap>
            </FeaturesInfoListItem>
            <FeaturesInfoListItem>
              <FeaturesInfoWrap>
                <FeaturesImageWrap>
                  <Icon name="icon-guarantee" width="60px" height="60px"></Icon>
                </FeaturesImageWrap>

                <FeaturesInfoTextWrap>
                  <FeaturesInfoTitle>Вигідні ціни</FeaturesInfoTitle>
                  <FeaturesInfoText>
                    У нас ви знайдете послуги з чіткими та прозорими цінами,
                    доступними для кожного
                  </FeaturesInfoText>
                </FeaturesInfoTextWrap>
              </FeaturesInfoWrap>
            </FeaturesInfoListItem>
          </FeaturesInfoList>
          <FeaturesImgCellsDown src={Cells} alt="Клітинки" />
        </Container>
      </FeaturesInfoSection>
    </>
  );
};
