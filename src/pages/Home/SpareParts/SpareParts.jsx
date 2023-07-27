import { Container } from '../../../utils/Container';
import {
  SparePartInfoBlock,
  SparePartInfoBlockText,
  SparePartInfoBlockTitle,
  SparePartSection,
  SparePartSectionTitleHidden,
  SparePartSectionWrap,
} from './SpareParts.styled';

export const SpareParts = () => {
  return (
    <>
      <SparePartSection>
        <Container>
          <SparePartSectionWrap>
            <SparePartSectionTitleHidden>
              Запчастини
            </SparePartSectionTitleHidden>
            <SparePartInfoBlock>
              <SparePartInfoBlockTitle>
                Ваш успіх у сільському господарстві починається з нас!
              </SparePartInfoBlockTitle>
              <SparePartInfoBlockText>
                Ми - ваш надійний партнер у виборі запчастин до сівалок. Завдяки
                нашому досвіду та професіоналізму, ми забезпечуємо вас широким
                асортиментом запчастин високої якості, які гарантовано підвищать
                продуктивність вашого обладнання. <br />
                Ми розуміємо, що правильно підібрані запчастини є ключовим
                фактором успішної роботи вашої техніки. Тому ми завжди раді
                допомогти вам обрати оптимальні комплектуючі, що відповідають
                вашим потребам та бюджету.
              </SparePartInfoBlockText>
            </SparePartInfoBlock>
          </SparePartSectionWrap>
        </Container>
      </SparePartSection>
    </>
  );
};
