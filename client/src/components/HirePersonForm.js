import React from "react";
import { Formik } from "formik";
import personService from "../services/person";

const HirePersonForm = props => {
  const { hirePerson } = props;
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "Adam",
          lastName: "Adamsson"
        }}
        validate={values => {
          let errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          const person = {
            ...personService.createPerson(),
            ...values
          };
          hirePerson(person);
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>etunimi</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>

              <div>
                <label>sukunimi</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>

              <div>
                <button type="submit">palkkaa</button>
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

export default HirePersonForm;
