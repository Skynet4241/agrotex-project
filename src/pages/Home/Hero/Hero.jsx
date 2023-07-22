import HeroImage from '../../../images/hero-mob.jpg';
import HeroImageDesk from '../../../images/hero-desk.jpg';

import {
  HeroButton,
  HeroImg,
  HeroInfoWrap,
  HeroPic,
  HeroStyle,
  HeroTitle,
  HeroTitleText,
  HeroWrap,
  Overlay,
} from './Hero.styled';
import { Container } from '../../../utils/Container';

export const Hero = () => {
  return (
    <>
      <HeroStyle>
        <HeroPic>
          <source srcSet={HeroImage} media="(max-width:767px)" />
          <source srcSet={HeroImageDesk} media="(min-width:768px)" />
          <HeroImg src={HeroImage} alt="Tractor and man in a field" />
          <Overlay></Overlay>
        </HeroPic>
        <HeroWrap>
          <Container>
            <HeroInfoWrap>
              <HeroTitle>Запчастини та ремонт</HeroTitle>
              <HeroTitleText>сільськогосподарської техніки</HeroTitleText>
              <HeroButton>Зателефонуйте мені!</HeroButton>
            </HeroInfoWrap>
          </Container>
        </HeroWrap>
      </HeroStyle>
    </>
  );
};
