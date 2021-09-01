import { memo, VFC } from "react";
import { GenderType, PersonType } from "../services/person";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 } from "uuid";
import * as Yup from "yup";

type Props = {
  hirePerson: (person: PersonType) => void;
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

const HirePersonForm: VFC<Props> = (props) => {
  const { hirePerson } = props;

  return (
    <Formik
      validateOnMount
      validationSchema={schema}
      initialValues={{
        firstName: "",
        lastName: ""
      }}
      onSubmit={(values) => {
        const hiree = {
          ...values,
          id: v4(),
          gender: 0 as GenderType,
          age: 20
        };

        hirePerson(hiree);
      }}
    >
      {({ isValid }) => {
        return (
          <Form>
            <div>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />
            </div>

            <button disabled={!isValid} type="submit">
              palkkaa!
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default memo(HirePersonForm);
