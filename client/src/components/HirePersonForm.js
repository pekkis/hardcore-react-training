import React from "react";
import { Formik } from "formik";
import uuid from "uuid";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
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
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki"
      }}
      onSubmit={values => {
        const newPerson = {
          ...values,
          id: uuid(),
          age: 25.1,
          politicalView: "right",
          unionized: false
        };
        hirePerson(newPerson);
      }}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>etunimi</label>
              <input
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div>
              <label>sukunimi</label>
              <input
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>

            <div>
              <button type="submit">submitore!</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
