import React from "react";
import { Formik } from "formik";
import uuid from "uuid";

const HirePersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki"
      }}
      onSubmit={values => {
        const newPerson = {
          ...values,
          age: 25,
          gender: "m",
          id: uuid()
        };
        hirePerson(newPerson);
      }}
    >
      {({ values, handleSubmit, handleChange }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>first name</label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>last name</label>
              <input
                type="text"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">HIRE</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
