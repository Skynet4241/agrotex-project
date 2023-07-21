import HeroImage from '../../../images/hero-mob.jpg';
import HeroImageDesk from '../../../images/hero-desk.jpg';
import { Container } from '../../../utils/Container';
import {
  HeroButton,
  HeroImg,
  HeroInfoLine,
  HeroInfoWrap,
  HeroStyle,
  HeroTitle,
  HeroTitleSpan,
  HeroWrap,
  Overlay,
} from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <HeroStyle>
        <Container>
          <HeroWrap>
            <picture>
              <source srcSet={HeroImage} media="(max-width:767px)" />
              <source srcSet={HeroImageDesk} media="(min-width:768px)" />
              <HeroImg src={HeroImage} alt="Tractor and man in a field" />
            </picture>
            <HeroInfoWrap>
              <Overlay>
                <HeroTitle>
                  Запчастини та ремонт{' '}
                  <HeroTitleSpan>сільськогосподарської техніки</HeroTitleSpan>
                </HeroTitle>
              </Overlay>
              <HeroInfoLine></HeroInfoLine>
              <HeroButton>Зателефонуйте мені!</HeroButton>
            </HeroInfoWrap>
          </HeroWrap>
        </Container>
      </HeroStyle>
    </>
  );
};
