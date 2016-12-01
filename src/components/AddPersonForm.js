import React from 'react';
import personService from '../services/person';
import Button from './Button';
import { Field, reduxForm } from 'redux-form';

class AddPersonForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <Field name="lastName" component="input" type="text" />
        </div>
        <Button type="submit">Do it</Button>
      </form>
    );
  }
}

AddPersonForm = reduxForm({
  form: 'addPerson',
})(AddPersonForm);

export default AddPersonForm;
