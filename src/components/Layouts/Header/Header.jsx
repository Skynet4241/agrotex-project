import { Container } from '../../../utils/Container';
import { Icon } from '../../../utils/Icon';
import { HeaderStyle, HeaderWrap, LogoWrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <HeaderWrap>
          <LogoWrap>
            <a href="/">Agrotexlan</a>
          </LogoWrap>

          <Icon name="icon-menu" width="24px" height="24px"></Icon>
        </HeaderWrap>
      </Container>
    </HeaderStyle>
  );
};
