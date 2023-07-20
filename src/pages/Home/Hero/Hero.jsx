import HeroImage from '../../../images/hero-mob.jpg';
import HeroImageDesk from '../../../images/hero-desk.jpg';
import { Container } from '../../../utils/Container';
import {
  HeroImg,
  HeroInfoWrap,
  HeroStyle,
  HeroTitle,
  Overlay,
} from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <HeroStyle>
        <picture>
          <source srcSet={HeroImage} media="(max-width:767px)" />
          <source srcSet={HeroImageDesk} media="(min-width:768px)" />
          <HeroImg src={HeroImage} alt="Tractor and man in a field" />
        </picture>
        <Container>
          <HeroInfoWrap>
            <Overlay>
              <HeroTitle>Запчастини та ремонт c/г техніки</HeroTitle>
            </Overlay>
          </HeroInfoWrap>
        </Container>
      </HeroStyle>
    </>
  );
};
