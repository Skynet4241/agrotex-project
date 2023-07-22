import { Container } from '../../../utils/Container';
import {
  FeaturesImageWrap,
  FeaturesImgCellsWrap,
  FeaturesImgCellsWrapDown,
  FeaturesInfoBlock,
  FeaturesInfoList,
  FeaturesInfoListItem,
  FeaturesInfoSection,
  FeaturesInfoText,
  FeaturesInfoTextWrap,
  FeaturesInfoTitle,
  FeaturesInfoWrap,
  FeaturesSectionTitleHidden,
} from './Features.styled';
import { Icon } from '../../../utils/Icon';
export const Features = () => {
  return (
    <>
      <FeaturesInfoSection>
        <Container>
          <FeaturesInfoBlock>
            <FeaturesSectionTitleHidden>
              Наші особливості
            </FeaturesSectionTitleHidden>
            <FeaturesImgCellsWrap>
              <Icon name="icon-cells" width="60px" height="60px"></Icon>
            </FeaturesImgCellsWrap>

            <FeaturesInfoList>
              <FeaturesInfoListItem>
                <FeaturesInfoWrap>
                  <FeaturesImageWrap>
                    <Icon
                      name="icon-worker"
                      width="100px"
                      height="100px"
                    ></Icon>
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
                    <Icon name="icon-money" width="100px" height="100px"></Icon>
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
                    <Icon
                      name="icon-guarantee"
                      width="120px"
                      height="120px"
                    ></Icon>
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
              <FeaturesInfoListItem>
                <FeaturesInfoWrap>
                  <FeaturesImageWrap>
                    <Icon
                      name="icon-discounts"
                      width="120px"
                      height="120px"
                    ></Icon>
                  </FeaturesImageWrap>
                  <FeaturesInfoTextWrap>
                    <FeaturesInfoTitle>Система знижок</FeaturesInfoTitle>
                    <FeaturesInfoText>
                      Ми пропонуємо систему знижок, яка розрахована на вигоду
                      для наших постійних клієнтів і замовлень великого обсягу
                    </FeaturesInfoText>
                  </FeaturesInfoTextWrap>
                </FeaturesInfoWrap>
              </FeaturesInfoListItem>
            </FeaturesInfoList>
            <FeaturesImgCellsWrapDown>
              <Icon name="icon-cells" width="60px" height="60px"></Icon>
            </FeaturesImgCellsWrapDown>
          </FeaturesInfoBlock>
        </Container>
      </FeaturesInfoSection>
    </>
  );
};
