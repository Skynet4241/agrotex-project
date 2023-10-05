import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledTextField,
  TextFieldWrap,
} from './ContactForm.styled';

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

export const ContactForm = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <TextFieldWrap>
          <Field
            as={StyledTextField}
            type="text"
            id="fullName"
            label="ФІО"
            name="fullName"
          />
          <StyledErrorMessage
            name="fullName"
            component="div"
            className="error"
          />
        </TextFieldWrap>

        <TextFieldWrap>
          <Field
            as={StyledTextField}
            type="text"
            id="phoneNumber"
            label="Номер телефону"
            name="phoneNumber"
          />
          <StyledErrorMessage
            name="phoneNumber"
            component="div"
            className="error"
          />
        </TextFieldWrap>

        <TextFieldWrap>
          <Field
            as={StyledTextField}
            id="filled-multiline-static"
            name="description"
            label="Опис"
            multiline
            rows={4}
            variant="filled"
          />
          <StyledErrorMessage
            name="description"
            component="div"
            className="error"
          />
        </TextFieldWrap>

        <StyledButton type="submit">Відправити</StyledButton>
      </StyledForm>
    </Formik>
  );
};
