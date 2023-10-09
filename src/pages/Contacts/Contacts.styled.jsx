import styled from 'styled-components';
import { styled as styles } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Form, ErrorMessage } from 'formik';

export const ContactsSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background-color: rgb(241, 241, 246);
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1200px) {
    padding: 90px 0;
  }
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const ContactsInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const ContactsInfoTitle = styled.h3`
  color: #252a2e;
  font-size: 30px;
  font-weight: 800;
  font-family: Montserrat;
  line-height: 1.2;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TextCountry = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  font-family: Montserrat;
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

export const ContactsText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  font-family: Montserrat;
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

export const ContactsInfoImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 15px;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1200px) {
    max-width: 500px;
    max-height: 500px;
  }
`;

export const FormSection = styled.div`
  background-color: #fff;
  padding: 40px 0;
  @media screen and (min-width: 1200px) {
    padding: 90px 0;
  }
`;

export const ContactsFormText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  font-family: Montserrat;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    width: 900px;
  }
`;

export const ContactsTextFieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const ContactsTextFieldWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledContactsTextField = styles(TextField)`
width: 100%;
max-width: 335px;
margin: 0 0 25px 0;

@media screen and (min-width: 375px) {
   max-width: 435px;
  }
`;

export const StyledContactsTextArea = styles(TextField)`
width: 100%;
max-width: 335px;
margin: 0 0 25px 0;

@media screen and (min-width: 375px) {
  max-width: 435px;
  }

@media screen and (min-width: 600px) {
  max-width: 900px;
  }

`;

export const StyledContactsErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: red;
`;

export const ContactsStyledButton = styled.button`
  padding: 12px 20px;
  line-height: 28px;
  font-family: Montserrat;
  font-size: 16px;
  background-color: #0063a3;
  border: 2px solid transparent;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  color: #fff;
  max-width: 200px;
  
  @media screen and (min-width: 600px) {
    font-size: 18px;
    padding: 10px 44px;
    max-width: 300px;
    &:hover,
    &:focus {
      background-color: #0e416c;
      border-color: #0e416c;
      color: #fff;
    }
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
