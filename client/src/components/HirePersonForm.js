import React from "react";
import { Formik } from "formik";
import uuid from "uuid";

const HirePersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      onSubmit={values => {
        console.log("values", values);

        const newPerson = {
          ...values,
          id: uuid(),
          age: 29,
          relatedToCEO: true,
          gender: "m"
        };

        hirePerson(newPerson);
      }}
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki"
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
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
              <button type="submit">Submitore!</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
