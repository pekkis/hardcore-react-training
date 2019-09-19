import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "uuid";

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
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={values => {
          const newPerson = {
            ...values,
            id: uuid(),
            age: 28,
            gender: "m"
          };
          hirePerson(newPerson);
        }}
        validationSchema={schema}
      >
        {({ values, errors, handleChange, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Etunimi</label>
                <input
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />

                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
              <div>
                <label>Sukunimi</label>
                <input
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>

              <div>
                <button disabled={!isValid} type="submit">
                  palkkaa
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
