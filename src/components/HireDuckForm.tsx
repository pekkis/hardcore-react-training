import { FC, useRef, useEffect, memo } from "react";
import { DuckProspectType } from "../services/duck";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { v4 } from "uuid";

import * as Yup from "yup";

type Props = {
  onHireDuck: (prospect: DuckProspectType) => void;
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

const HireDuckForm: FC<Props> = ({ onHireDuck }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef, "WHAT BE THE INPUT REF?");
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <Formik
        validateOnMount
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={(values) => {
          const prospect: DuckProspectType = {
            ...values,
            id: v4(),
            birthDay: "2021-07-01",
            gender: 0,
            wingedness: "r",
            migratesForWinters: false
          };

          onHireDuck(prospect);

          console.log("VALUES", values);
        }}
      >
        {({ isValid }) => {
          return (
            <Form>
              <div>
                <label>etunimi</label>
                <Field name="firstName" type="text" innerRef={inputRef} />
                <ErrorMessage name="firstName" />
              </div>
              <div>
                <label>sukunimi</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </div>
              <div>
                <button disabled={!isValid} type="submit">
                  submitore
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default memo(HireDuckForm);
