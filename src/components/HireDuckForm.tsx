import { FC } from "react";
import { DuckType } from "../services/duck";
import { Form, Field, Formik } from "formik";
import Input from "./Input";

type Props = {
  hireDuck: (duck: DuckType) => void;
};

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: ""
      }}
      onSubmit={(values) => {
        console.log("VALUES", values);
      }}
    >
      {({}) => {
        return (
          <Form>
            <div>
              <label htmlFor="firstName">first name</label>
              <Field name="firstName" as={Input} />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HireDuckForm;
