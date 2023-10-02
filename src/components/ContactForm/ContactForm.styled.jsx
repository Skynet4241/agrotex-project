import styled from 'styled-components';
import { styled as styles } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin: 5px 0 0;
  @media screen and (min-width: 768px) {
    margin: 20px 0 0;
  }
`;

export const TextFieldWrap = styled.div`
  position: relative;
`;

export const StyledTextField = styles(TextField)`
width: 235px;
margin: 0 0 25px 0;

@media screen and (min-width: 375px) {
    width: 355px;
  }

@media screen and (min-width: 768px) {

  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: red;
`;
