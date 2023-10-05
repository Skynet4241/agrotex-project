import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Container } from '../../utils/Container';
import officeImage from '../../images/office-buildings.jpg';
import { Icon } from '../../utils/Icon';
import AnimatedComponent from '../../utils/AnimatedComponent';
import {
  ContactsInfoBlock,
  ContactsInfoImage,
  ContactsInfoTitle,
  ContactsSection,
  ContactsText,
  ContactsWrap,
  TextCountry,
  ContactsTextFieldWrap,
  TextWrap,
  StyledContactsTextField,
  StyledContactsErrorMessage,
  StyledContactsTextArea,
  ContactsFormText,
  FormSection,
  ContactsTextFieldBlock,
  StyledForm,
  ContactsStyledButton,
} from './Contacts.styled';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Обов'язкове поле"),
  phoneNumber: Yup.string().required("Обов'язкове поле"),
  description: Yup.string().required("Обов'язкове поле"),
});

const initialValues = {
  fullName: '',
  phoneNumber: '',
  description: '',
};

const Contacts = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <ContactsSection>
        <Container>
          <ContactsWrap>
            <AnimatedComponent>
              <ContactsInfoBlock>
                <ContactsInfoTitle>Контакти</ContactsInfoTitle>
                <TextWrap>
                  <Icon name="icon-Ukraine" width="32px" height="32px"></Icon>
                  <TextCountry>Україна</TextCountry>
                </TextWrap>
                <ContactsText>Черкаська обл., м. Жашків</ContactsText>
                <ContactsText>Тел: +38 096 111 11 11</ContactsText>
                <ContactsText>Email: example@examle.com</ContactsText>
              </ContactsInfoBlock>
            </AnimatedComponent>
            <AnimatedComponent>
              <picture>
                <source srcSet={officeImage} media="(max-width:767px)" />
                <source srcSet={officeImage} media="(min-width:768px)" />
                <ContactsInfoImage src={officeImage} alt="Office buildings" />
              </picture>
            </AnimatedComponent>
          </ContactsWrap>
        </Container>
      </ContactsSection>
      <FormSection>
        <Container>
          <AnimatedComponent>
            <ContactsInfoTitle>Зворотній зв`язок</ContactsInfoTitle>
            <ContactsFormText>
              Є питання чи пропозиції? Ви можете зв`язатися з нами через форму
              нижче, вказавши ім`я, номер телефона та текст повідомлення.
            </ContactsFormText>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <StyledForm>
                <ContactsTextFieldBlock>
                  <ContactsTextFieldWrap>
                    <Field
                      as={StyledContactsTextField}
                      type="text"
                      id="fullName"
                      label="Ваше ім'я"
                      name="fullName"
                    />
                    <StyledContactsErrorMessage
                      name="fullName"
                      component="div"
                      className="error"
                    />
                  </ContactsTextFieldWrap>
                  <ContactsTextFieldWrap>
                    <Field
                      as={StyledContactsTextField}
                      type="text"
                      id="phoneNumber"
                      label="Ваш номер телефону"
                      name="phoneNumber"
                    />
                    <StyledContactsErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error"
                    />
                  </ContactsTextFieldWrap>
                </ContactsTextFieldBlock>
                <ContactsTextFieldWrap>
                  <Field
                    as={StyledContactsTextArea}
                    fullWidth
                    id="fullWidth"
                    name="description"
                    label="Тема листа"
                    multiline
                    rows={4}
                    placeholder="Привіт, Агротехлан ..."
                  />
                  <StyledContactsErrorMessage
                    name="description"
                    component="div"
                    className="error"
                  />
                </ContactsTextFieldWrap>
                <ContactsStyledButton type="submit">
                  Відправити
                </ContactsStyledButton>
              </StyledForm>
            </Formik>
          </AnimatedComponent>
        </Container>
      </FormSection>
    </div>
  );
};

export default Contacts;
