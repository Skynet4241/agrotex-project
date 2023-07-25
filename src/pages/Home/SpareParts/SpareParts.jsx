import { Container } from '../../../utils/Container';
import {
  SparePartSection,
  SparePartSectionTitleHidden,
} from './SpareParts.styled';

export const SpareParts = () => {
  return (
    <>
      <SparePartSection>
        <Container>
          <div>
            <SparePartSectionTitleHidden>
              Запчастини
            </SparePartSectionTitleHidden>
          </div>
        </Container>
      </SparePartSection>
    </>
  );
};
