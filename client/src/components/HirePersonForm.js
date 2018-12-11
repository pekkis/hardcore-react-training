import React from "react";
import { Formik } from "formik";
import uuid from "uuid";
import { DateTime } from "luxon";
import faker from "faker";
import r from "../services/random";
import Button from "./Button";
import Input from "./Input";

const createPerson = () => {
  return {
    get age() {
      const d = DateTime.fromJSDate(this.birthDay);
      const now = DateTime.local();
      const diff = now.diff(d, "years").toObject();
      return diff.years;
    },

    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.past(70, "1999-01-01"),
    gender: r.pick(["m", "f"]),
    handedness: r.pick(["l", "r"]),
    salary: r.integer(2000, 10000),
    email: faker.internet.email(),
    relatedToCEO: r.pick([
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])
  };
};

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
          ...createPerson(),
          ...values
        };

        hirePerson(newPerson);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>first name</label>
              <Input
                block
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>last name</label>
              <Input
                block
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button block type="submit">
                hire
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
