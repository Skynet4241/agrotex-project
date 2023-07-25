import { Container } from '../../../utils/Container';
import ServicesImageMob from '../../../images/Services-image-mob.jpg';
import ServicesImageDesk from '../../../images/Services-image-desk.jpg';

import {
  ServicesBlock,
  ServicesInfoBlockButton,
  ServicesInfoBlockText,
  ServicesInfoBlockTitle,
  ServicesInfoWrap,
  ServicesOverlay,
  ServicesSection,
  ServicesSectionImage,
  ServicesSectionPicture,
  ServicesTitleHidden,
} from './Services.styled';
import { Icon } from '../../../utils/Icon';

export const Services = () => {
  return (
    <>
      <ServicesSection>
        <ServicesSectionPicture>
          <source srcSet={ServicesImageMob} media="(max-width:767px)" />
          <source srcSet={ServicesImageDesk} media="(min-width:768px)" />
          <ServicesSectionImage
            src={ServicesImageMob}
            alt="Tractor and man in a field"
          />
          <ServicesOverlay></ServicesOverlay>
        </ServicesSectionPicture>
        <ServicesInfoWrap>
          <Container>
            <ServicesTitleHidden>Наші послуги</ServicesTitleHidden>
            <ServicesBlock>
              <ServicesInfoBlockTitle>
                Професійне обслуговування сільськогосподарської техніки
              </ServicesInfoBlockTitle>
              <ServicesInfoBlockText>
                Наша компанія надає високоякісні послуги з обслуговування
                сільськогосподарської техніки.
                <br /> Виконуємо професійну діагностику та ремонт обладнання.
                Неперервна робота обладнання клієнтів - наш пріоритет. <br /> Ми
                команда висококваліфікованих фахівців, що поєднує в собі
                гнучкість рішень, навчання і мобільність, завжди готова
                задовольнити потреби клієнтів та забезпечити надійну співпрацю.
              </ServicesInfoBlockText>
            </ServicesBlock>
            <ServicesInfoBlockButton>
              Переглянути послуги{' '}
              <Icon name="icon-circle-right" width="16px" height="16px"></Icon>
            </ServicesInfoBlockButton>
          </Container>
        </ServicesInfoWrap>
      </ServicesSection>
    </>
  );
};
