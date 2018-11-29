import React from "react";
import { Formik } from "formik";
import personService from "../services/person";

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
          ...personService.createPerson(),
          ...values,
          relatedToCEO: true
        };
        hirePerson(newPerson);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First name</label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">palkkaa!</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
