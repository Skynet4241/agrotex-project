import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

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
      <Form>
        <div>
          <Field
            as={TextField}
            type="text"
            id="fullName"
            label="ФІО"
            name="fullName"
          />
          <ErrorMessage name="fullName" component="div" className="error" />
        </div>

        <div>
          <Field
            as={TextField}
            type="text"
            id="phoneNumber"
            label="Номер телефону"
            name="phoneNumber"
          />
          <ErrorMessage name="phoneNumber" component="div" className="error" />
        </div>

        <div>
          <Field
            as={TextField}
            id="filled-multiline-static"
            name="description"
            label="Опис"
            multiline
            rows={4}
            variant="filled"
          />
          <ErrorMessage name="description" component="div" className="error" />
        </div>

        <button type="submit">Відправити</button>
      </Form>
    </Formik>
  );
};
