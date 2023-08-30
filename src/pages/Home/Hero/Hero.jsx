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
import { useState } from 'react';
import { Modal } from '../../../components/Modal';
import { ContactForm } from '../../../components/ContactForm/ContactForm';

export const Hero = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

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
              <HeroButton onClick={handleToggle}>
                Зателефонуйте мені!
              </HeroButton>
              <Modal onClose={handleToggle} isOpen={isModalOpen}>
                <ContactForm />
              </Modal>
            </HeroInfoWrap>
          </Container>
        </HeroWrap>
      </HeroStyle>
    </>
  );
};
