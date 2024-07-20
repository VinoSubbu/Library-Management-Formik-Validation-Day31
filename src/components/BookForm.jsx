import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit, initialValues, bookToEdit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required')
  });

  return (
    <div className="book-form">
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
            if (bookToEdit) {
              setValues(bookToEdit);
            }
          }, [bookToEdit, setValues]);

          return (
            <Form>
              <div>
                <label>Title</label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
              </div>
              <div>
                <label>Author</label>
                <Field type="text" name="author" />
                <ErrorMessage name="author" component="div" />
              </div>
              <div>
                <label>ISBN</label>
                <Field type="text" name="isbn" />
                <ErrorMessage name="isbn" component="div" />
              </div>
              <div>
                <label>Publication Date</label>
                <Field type="date" name="publicationDate" />
                <ErrorMessage name="publicationDate" component="div" />
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

export default BookForm;
