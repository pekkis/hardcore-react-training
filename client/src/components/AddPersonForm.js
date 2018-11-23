import React from "react";
import { Formik } from "formik";
import r from "../services/random";
import uuid from "uuid";

const AddPersonForm = props => {
  return (
    <Formik
      onSubmit={values => {
        const person = {
          ...values,
          gender: r.pick(["m", "f"]),
          handedness: r.pick(["l", "r"]),
          salary: r.integer(500, 1000),
          email: "gaylord.lohiposki@dr-kobros.com",
          relatedToCEO: true,
          age: 66,
          id: uuid()
        };

        console.log("person", person);
        props.hirePerson(person);
      }}
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki",
        birthDay: "1961-01-01"
      }}
    >
      {props => {
        const { handleChange, handleSubmit, values } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First name</label>
              <input
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Last name</label>
              <input
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Birthday</label>
              <input
                id="birthDay"
                value={values.birthDay}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type="submit">Hire!</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddPersonForm;
