import { Container } from '../../../utils/Container';
import ServicesImageMob from '../../../images/Services-image-mob.jpg';
import ServicesImageDesk from '../../../images/Services-image-desk.jpg';
import ServicesMaintenance from '../../../images/Service-maintenance.jpg';
import ServicesModernization from '../../../images/Service-modernization.jpg';
import ServicesProduction from '../../../images/Service-production.jpg';
import {
  ServicesBlock,
  ServicesInfoBlockButton,
  ServicesInfoBlockList,
  ServicesInfoBlockListImage,
  ServicesInfoBlockListItem,
  ServicesInfoBlockListTitle,
  ServicesInfoBlockListTitleWrap,
  // ServicesInfoBlockText,
  ServicesInfoBlockTitle,
  ServicesInfoWrap,
  ServicesSection,
  ServicesTitleHidden,
} from './Services.styled';
import { Icon } from '../../../utils/Icon';

export const Services = () => {
  return (
    <>
      <ServicesSection>
        <ServicesInfoWrap>
          <Container>
            <ServicesTitleHidden>Наші послуги</ServicesTitleHidden>
            <ServicesBlock>
              <ServicesInfoBlockTitle>
                Професійне обслуговування сільськогосподарської техніки
              </ServicesInfoBlockTitle>
              <ServicesInfoBlockList>
                <ServicesInfoBlockListItem>
                  <ServicesInfoBlockListImage
                    src={ServicesMaintenance}
                    alt=""
                  />
                  <ServicesInfoBlockListTitleWrap>
                    <ServicesInfoBlockListTitle>
                      Сервісне обслуговування
                    </ServicesInfoBlockListTitle>
                  </ServicesInfoBlockListTitleWrap>
                </ServicesInfoBlockListItem>
                <ServicesInfoBlockListItem>
                  <ServicesInfoBlockListImage
                    src={ServicesModernization}
                    alt=""
                  />
                  <ServicesInfoBlockListTitleWrap>
                    <ServicesInfoBlockListTitle>
                      Модернізація техніки
                    </ServicesInfoBlockListTitle>
                  </ServicesInfoBlockListTitleWrap>
                </ServicesInfoBlockListItem>
                <ServicesInfoBlockListItem>
                  <ServicesInfoBlockListImage src={ServicesProduction} alt="" />
                  <ServicesInfoBlockListTitleWrap>
                    <ServicesInfoBlockListTitle>
                      Виготовлення запасних частин
                    </ServicesInfoBlockListTitle>
                  </ServicesInfoBlockListTitleWrap>
                </ServicesInfoBlockListItem>
              </ServicesInfoBlockList>
              {/* <ServicesInfoBlockText>
                Наша компанія надає високоякісні послуги з обслуговування
                сільськогосподарської техніки.
                <br /> Виконуємо професійну діагностику та ремонт обладнання.
                Неперервна робота обладнання клієнтів - наш пріоритет. <br /> Ми
                команда висококваліфікованих фахівців, що поєднує в собі
                гнучкість рішень, навчання і мобільність, завжди готова
                задовольнити потреби клієнтів та забезпечити надійну співпрацю.
              </ServicesInfoBlockText> */}
              <ServicesInfoBlockButton>
                Детальніше про послуги{' '}
                <Icon
                  name="icon-circle-right"
                  width="16px"
                  height="16px"
                ></Icon>
              </ServicesInfoBlockButton>
            </ServicesBlock>
          </Container>
        </ServicesInfoWrap>
      </ServicesSection>
    </>
  );
};
