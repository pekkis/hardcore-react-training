import { FC, Profiler } from "react";
import { PersonInterface } from "../services/person";
import { v4 } from "uuid";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {
  hirePerson: (person: PersonInterface) => void;
};

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

const HirePersonForm: FC<Props> = ({ hirePerson }) => {
  return (
    <Profiler
      id="xooxersson"
      onRender={(...params) => {
        // console.log("XOO", params);
      }}
    >
      <div>
        <Formik
          validationSchema={schema}
          validateOnMount={true}
          initialValues={{
            firstName: "",
            lastName: ""
          }}
          onSubmit={(values, { resetForm }) => {
            const hired: PersonInterface = {
              ...values,
              id: v4(),
              age: 28
            };

            hirePerson(hired);

            resetForm();
          }}
        >
          {({ isValid }) => {
            return (
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
                  <button disabled={!isValid} type="submit">
                    PALKKAA!
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Profiler>
  );
};

export default HirePersonForm;
