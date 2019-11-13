import React from "react";
import { Formik, Field } from "formik";
import uuid from "uuid";

import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const HirePersonForm = props => {
  const { hirePerson } = props;
  return (
    <div>
      <Formik
        isInitialValid={true}
        validationSchema={schema}
        initialValues={{
          firstName: "Abel",
          lastName: "Abrahamsson"
        }}
        onSubmit={values => {
          const newPerson = {
            ...values,
            age: 80,
            gender: "m",
            id: uuid()
          };
          hirePerson(newPerson);
        }}
      >
        {({ handleSubmit, errors, isValid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <Field type="text" name="firstName" />
                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
              <div>
                <Field type="text" name="lastName" />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>
              <div>
                <button disabled={!isValid} type="submit">
                  Palkkaa!
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default HirePersonForm;
