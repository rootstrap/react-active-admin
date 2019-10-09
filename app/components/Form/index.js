import React from 'react';
import { object, func, bool } from 'prop-types';
import { Field } from 'formik';
import TextField from '../common/TextField';
import withForm from '../../hoc/withForm';

const Form = ({
  handleSubmit,
  isValid,
  isSubmitting,
  attributes,
}) => (
  <form onSubmit={handleSubmit}>
    {Object.keys(attributes).map(key => (
      <Field
        key={key}
        name={key}
        component={TextField}
      />
    ))}
    <button type="submit" disabled={!isValid || isSubmitting}>
      Submit
    </button>
  </form>
);

export default withForm(Form);

Form.propTypes = {
  attributes: object,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
  isValid: bool.isRequired,
};

Form.defaultProps = {
  attributes: {},
};
