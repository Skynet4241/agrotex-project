import { Container } from '../../../utils/Container';
import ServicesImage from '../../../images/Services-image.jpg';
import { Overlay } from '../Hero/Hero.styled';
import {
  ServicesBlock,
  ServicesInfoBlockButton,
  ServicesInfoBlockText,
  ServicesInfoBlockTitle,
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
          <source srcSet={ServicesImage} media="(max-width:767px)" />
          <source srcSet={ServicesImage} media="(min-width:768px)" />
          <ServicesSectionImage
            src={ServicesImage}
            alt="Tractor and man in a field"
          />
          <Overlay></Overlay>
        </ServicesSectionPicture>
        <Container>
          <Overlay></Overlay>
          <ServicesTitleHidden>Наші послуги</ServicesTitleHidden>
          <ServicesBlock>
            <ServicesInfoBlockTitle>
              Професійне обслуговування сільськогосподарської техніки
            </ServicesInfoBlockTitle>
            <ServicesInfoBlockText>
              Наша компанія надає високоякісні послуги з обслуговування
              сільськогосподарської техніки. Забезпечуючи безперебійну роботу
              обладнання клієнтів, ми оперативно та професійно діагностуємо та
              ремонтуємо техніку, навіть безпосередньо на об'єкті. Наша команда
              висококваліфікованих фахівців, що поєднує в собі гнучкість рішень,
              навчання і мобільність, завжди готова задовольнити потреби
              клієнтів та забезпечити надійну співпрацю.
            </ServicesInfoBlockText>
            <ServicesInfoBlockButton>
              Переглянути послуги{' '}
              <Icon name="icon-circle-right" width="16px" height="16px"></Icon>
            </ServicesInfoBlockButton>
          </ServicesBlock>
        </Container>
      </ServicesSection>
    </>
  );
};
