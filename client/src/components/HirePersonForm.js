import React from "react";
import { Formik } from "formik";
import uuid from "uuid";

const HirePersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      onSubmit={values => {
        // console.log(values, "FORM VALUES");

        const newPerson = {
          ...values,
          id: uuid(),
          age: 25,
          gender: "m"
        };

        hirePerson(newPerson);
      }}
      initialValues={{
        firstName: "Tussi",
        lastName: "Lärvilöinen"
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First name</label>
              <input
                id="firstName"
                onChange={handleChange}
                value={values.firstName}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                id="lastName"
                onChange={handleChange}
                value={values.lastName}
              />
            </div>
            <div>
              <button type="submit">hire person</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
