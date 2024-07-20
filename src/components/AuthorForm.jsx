import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit, initialValues, authorToEdit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required')
  });

  return (
    <div className="author-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ isSubmitting, setValues }) => {
          useEffect(() => {
            if (authorToEdit) {
              setValues(authorToEdit);
            }
          }, [authorToEdit, setValues]);

          return (
            <Form>
              <div>
                <label>Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label>Birth Date</label>
                <Field type="date" name="birthDate" />
                <ErrorMessage name="birthDate" component="div" />
              </div>
              <div>
                <label>Biography</label>
                <Field as="textarea" name="biography" />
                <ErrorMessage name="biography" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthorForm;
