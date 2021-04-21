import { FC } from "react";
import { PersonInterface } from "../services/person";
import { v4 } from "uuid";

import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {
  hirePerson: (person: PersonInterface) => void;
};

const HirePersonForm: FC<Props> = ({ hirePerson }) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={(values) => {
          const hired: PersonInterface = {
            ...values,
            id: v4(),
            age: 28
          };

          hirePerson(hired);
        }}
      >
        <Form>
          <div>
            <label>etunimi</label>
            <Field name="firstName" />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label>sukunimi</label>
            <Field name="lastName" />
            <ErrorMessage name="lastName" />
          </div>

          <div>
            <button type="submit">PALKKAA!</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default HirePersonForm;
