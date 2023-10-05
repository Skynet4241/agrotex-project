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

export const StyledButton = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 12px 20px;
  line-height: 28px;
  font-family: Montserrat;
  font-size: 16px;
  background-color: #0063a3;
  border: 2px solid transparent;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  color: #fff;
  @media screen and (min-width: 600px) {
    font-size: 18px;
    padding: 18px 44px;
    &:hover,
    &:focus {
      background-color: #0e416c;
      border-color: #0e416c;
      color: #fff;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    max-width: 400px;
    padding: 18px 24px;
  }
`;
