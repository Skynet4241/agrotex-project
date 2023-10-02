import {
  HeroButton,
  HeroInfoWrap,
  HeroStyle,
  HeroTitle,
  HeroTitleText,
  HeroWrap,
} from './Hero.styled';
import { Container } from '../../../utils/Container';
import { useState } from 'react';
import { Modal } from '../../../components/Modal';
import { ContactForm } from '../../../components/ContactForm/ContactForm';
import AnimatedComponent from '../../../utils/AnimatedComponent';

export const Hero = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

  return (
    <HeroStyle>
      <HeroWrap>
        <Container>
          <AnimatedComponent>
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
          </AnimatedComponent>
        </Container>
      </HeroWrap>
    </HeroStyle>
  );
};
