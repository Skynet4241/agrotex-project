import { Container } from '../../../utils/Container';
import {
  AboutBtn,
  AboutImg,
  AboutInfoWrap,
  AboutPicture,
  AboutSection,
  AboutSectionWrap,
  AboutText,
  AboutTitle,
} from './About.styled';
import AboutImgMob from '../../../images/About_image_mob.png';
import AboutImgDesk from '../../../images/About_image_desk.png';
import { Icon } from '../../../utils/Icon';

export const About = () => {
  return (
    <>
      <AboutSection>
        <Container>
          <AboutSectionWrap>
            <AboutPicture>
              <source srcSet={AboutImgMob} media="(max-width:767px)" />
              <source srcSet={AboutImgDesk} media="(min-width:768px)" />
              <AboutImg src={AboutImgDesk} alt="Tractor and man in a field" />
            </AboutPicture>
            <AboutInfoWrap>
              <AboutTitle>
                Наша компанія - ваш надійний партнер у сільському господарстві!
              </AboutTitle>
              <AboutText>
                Ми спеціалізуємося у ремонті, продажу запчастин та виробництві
                компонентів для агротехніки. <br />
                Наша компанія забезпечує якісний ремонт та модернізацію
                ґрунтообробної та посівної техніки.
                <br />
                Однією з наших ключових послуг є надання якісних запасних частин
                для вашої техніки. <br />
                Наш пріоритет - забезпечити нашим клієнтам високий рівень
                обслуговування з оптимальним співвідношенням ціни та якості
                наших послуг.
              </AboutText>
              <AboutBtn>
                Дізнайтеся більше про Агротехлан{' '}
                <Icon
                  name="icon-circle-right"
                  width="16px"
                  height="16px"
                ></Icon>
              </AboutBtn>
            </AboutInfoWrap>
          </AboutSectionWrap>
        </Container>
      </AboutSection>
    </>
  );
};
